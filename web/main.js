 // GET은 API의 의미론적으로 간단하고 평이한 정보 제공에 적합
// POST는 객체의 생성과 관련된 API
// PUT은 서버에 존재하는 객체의 업데이트를 할 때 적합
// DELETE는 특정 객체를 백엔드로부터 삭제해야할 때
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public')); // 전체 이미지 파일과 연결. 배치 처리
app.listen(3000, () => {
    console.log('Server running at port: 3000!');
});

app.get('/', (req, res) => res.sendFile(__dirname+"/main.html"));














/*
var ajax_obj=["jinwoo", "kumoh","computer"];
app.post('/ajax',(req,res)=>{
    if(req.body.pos < 0 || req.body.pos > 2) res.sendStatus(400);
    else {
    ajax_obj[req.body.pos] = req.body.con;
    res.sendStatus(200);
    }
    });
var obj;
app.get('/ajax/:id',(req,res)=>res.json(ajax_obj[req.params.id]));
app.get("/obj", (req,res) => res.send(obj));

    
// app.post('/form',(req,res)=>{
//     let contents = "<html><body><h1>Welcome!</h1>";
//     contents += "<p>"+req.body.stuName+"님, 환영합니다!</p>";
//     contents += "<p>"+req.body.stuGrade+"학년에 해당하는 정보를 찾으시나요?</p>";
//     if(typeof(req.body.stuJob)=="string") contents += "<p>아하! <em>"+req.body.stuJob+"</em>에 관심이 있으시네요?</p>";
//     else{
//     req.body.stuJob.forEach((job)=>{
//     contents += "<p>아하! <em>"+job+"</em>에 관심이 있으시네요?</p>";
//     });
//     }
//     res.status(200).send(contents);
//     })
    
app.post("/obj", (req, res) => {
    if(req.body.name) {
    obj={name:req.body.name}
    console.log(req.body.name);
    }
    else obj={name:'jinwoo'};
    res.sendStatus(200);
    });

app.post('/form',(req,res)=>{
    console.log(req.body.stuName);
    console.log(req.body.stuFirst);
    console.log(req.body.stuJob);
    res.sendStatus(200);
    })
app.put('/obj', (req, res) => {
    if(!obj) res.status(500).send('object not found');
    else { 
    obj.name='updated';
    res.sendStatus(200);
    }
    });

app.get('/download',(req,res)=>{

res.download('index.html','fakename.html');

});

let tmp={
    name:"jinwoo",
    age:35,
    married:true,
    course:["webp","capstone"],
    favorite:{name:"dayoul",age:1}
    };
    
    app.get('/',(req,res)=>res.json(tmp));
     */