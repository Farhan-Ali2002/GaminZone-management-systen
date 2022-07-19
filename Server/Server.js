const express = require('express');

const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require("bcrypt");
// const { response } = require('express');
const saltRounds = 10;
const session = require("express-session");
mySQLStore = require("express-mysql-session")
  (session) ;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");



const app = express();
app.use(express.json());

app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ["GET","POST","DELETE"],
    credentials: true,

    
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
//const db = mysql.createConnection("mysql://root:@localhost:3001/finalproject");
const db = mysql.createConnection({
    user : "root",
    host: 'localhost',
    password: '',
    database : 'finalproject',
   

});
app.use(session({
    key: "userId",
    secret : "ajeeb",
    store : new mySQLStore({
        expiration: 10800000,
        createDatabaseTable: true,
        schema:{
            tableName: "sessions",
            columnNames:{
                session_id: "session_id",
                expires : "expires",
                data: "data"
            }
        }

    }, db),
    resave: false,
    saveUninitialized : false,
    proxy: true,
    cookie:{
        maxAge : 1000*60*60*24,
        sameSite: false
    }
    
    
}))


// app.use(function (request, response, next) {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


db.connect((errr)=>{
   if (errr) {
       console.log(errr)
       
   }
   else{
       console.log("database connected")
   }
});

app.post('/create',(req,res)=>{
    
    const cfname = req.body.cfname
    const clname = req.body.clname
    const cemail = req.body.cemail
    const cpassword = req.body.cpassword
    const cphone = req.body.cphone
    const cdob = req.body.cdob
    // if (!req.body) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Content can not be empty!"
    //     });
    // }

    console.log(cfname + clname + cemail);
     bcrypt.hash(cpassword, saltRounds,(err,hash)=>{
         if(err){
             console.log(err);
         }

     
    db.query('INSERT INTO employeesignup (empfname,emplname,empemail,emppassword,empjoineddate,empdob) VALUES (?,?,?,?,?,?)',
    [cfname,clname,cemail,hash,cphone,cdob],
    (err,result)=>{
        
        if (err) {
            console.log(err);
            res.status(400)
            res.send({

                message: (err.code == 'ER_DUP_ENTRY' || err.errno == 1062) ? "Username already exists!" : "Unknown error"
            
            })
            
            // alert("email is already taken");
            
        }
        else{
            res.send('successful')
        }
    }
)
     }
     )
}
);

app.post('/customers',(req,res) =>{

    // const cfname = req.body.cfname
    // const clname = req.body.clname
    const cemail = req.body.cemail
    const cpassword = req.body.cpassword
    const ctype = req.body.ctype
    
    if(ctype == 1)
    {
    db.query("SELECT * FROM customersignup WHERE customeremail = ?;",
    cemail,
    (err,result)=>{
        console.log(result)
        if (err) {    
            res.send({err : err});
        }
        console.log(result);
            if (result.length > 0) {
                console.log(result[0].customerpassword);
                console.log("my ",cpassword )
                bcrypt.compare(cpassword,result[0].customerpassword,(error,resp)=>{
                    console.log("2",result);
                    console.log("1",resp);
                    if (resp) {
                       db.query('INSERT INTO activeuser2 (cfname,clname,cemail,cphno,ctime) VALUES (?,?,?,?,?)',
                       [result[0].customerfname,result[0].customerlname,result[0].customeremail,result[0].customerphone,"dalla"],
                       (err1,result1)=>{
                        if (err1) {
                            console.log(err1);
                            
                            // res.status(400)
                            // res.send({
                
                            //     message: (err.code == 'ER_DUP_ENTRY' || err.errno == 1062) ? "Username already exists!" : "Unknown error"
                            
                            // })
                            
                            // alert("email is already taken");
                            
                        }
                        else{
                            // res.send('successful')
                            console.log(result1);
                        }
                           
                       }
                       
                       
                       )
                        






                        req.session.user = result;
                        // req.session.save();
                        console.log("result : ",result);
                        console.log(req.session.user);
                        res.send(result);
                    }
                    else{
                        res.send({message : "wrong username/password combination!"});

                    } }
              );}
            else{
                res.send({message : "user doesnot exist"})
            }     
    }
    );
}
else if (ctype == 0) {
    db.query("SELECT * FROM employeesignup WHERE empemail = ?;",
    cemail,
    (err,result)=>{
        console.log(result)
        if (err) {    
            res.send({err : err});
        }
        console.log(result);
            if (result.length > 0) {
                console.log(result[0].emppassword);
                console.log("my ",cpassword )
                bcrypt.compare(cpassword,result[0].emppassword,(error,resp)=>{
                    console.log("2",result);
                    console.log("1",resp);
                    if (resp) {
                        
                        app.get("/Info", (req, res) => {
                            db.query("SELECT * from employeesignup where empemail = ? ",
                            result[0].empemail,
                            
                            (err, result) => {
                              if (err) {
                                console.log(err);
                              } else {
                                res.send(result);
                              }
                            });
                          });




                        req.session.user = result
                        console.log("result : ",result);
                        console.log(req.session.user);
                        res.send(result);
                    }
                    else{
                        res.send({message : "wrong username/password combination!"});

                    } }
              );}
            else{
                res.send({message : "user doesnot exist"})
            }     
    }
    );
    
}
else{
    res.send("Account type not specified! Employee or customer!");
}
});
app.get('/customers',(req,res)=>{
 
    console.log("this : ",req.session.user);
    if (req.session.user) {
        res.send({loggedIn : true, user : req.session.user})
        
    }
    else{
        res.send({loggedIn: false})
        
    }
});
app.get("/user", (req, res) => {
    db.query("SELECT * FROM customersignup", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/activeuser", (req, res) => {
    db.query("SELECT * from activeuser2", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.delete("/deletec/:email", (req, res) => {
    const email = req.params.email;
    db.query("DELETE FROM customersignup WHERE customeremail = ?;",email, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });


  });

  app.post('/addpc',(req,res)=>{
    
    const Pcmodel = req.body.Pcmodel
    const pcpurchaseddate = req.body.pcpurchaseddate
     
    db.query('INSERT INTO pcinfo (Pcmodel,pcpurchaseddate) VALUES (?,?);',
    [Pcmodel,pcpurchaseddate],
    (err,result)=>{
        
        if (err) {
            console.log(err);
            res.status(400)
            res.send({

                message: (err.code == 'ER_DUP_ENTRY' || err.errno == 1062) ? "pc record already exists!" : "Unknown error"
            
            })
            
            // alert("email is already taken");
            
        }
        else{
            res.send('successful')
        }
    }
)});
     
app.get("/addpc", (req, res) => {
    db.query("SELECT * FROM pcinfo", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.post('/addgame',(req,res)=>{
    
    const gamename = req.body.gamename
    const gamecompany = req.body.gamecompany
     
    db.query('INSERT INTO games (gamename,gamecompany) VALUES (?,?);',
    [gamename,gamecompany],
    (err,result)=>{
        
        if (err) {
            console.log(err);
            res.status(400)
            res.send({

                message: (err.code == 'ER_DUP_ENTRY' || err.errno == 1062) ? "game record already exists!" : "Unknown error"
            
            })
            
            // alert("email is already taken");
            
        }
        else{
            res.send('successful')
        }
    }
)});
     
  app.get("/addgame", (req, res) => {
    db.query("SELECT * FROM games", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(3001, ()=>{
    
    console.log("yay!");
});
