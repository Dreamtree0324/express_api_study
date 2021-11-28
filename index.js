//express,mongoose,dotenv 모듈 추가
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//dotenv 사용
dotenv.config();

//express 사용
const app = express();

//MongoDB 사용
const MONGO_DB = process.env.MONGO_DB;

//mongoose 세팅
mongoose.connect(MONGO_DB);

//db 연결
const db = mongoose.connection;

//연결 성공시 로깅
db.once('open', function(){
    console.log('DB Connected');
})

//연결 실패시 로깅 및 에러처리
db.on('error', function(err){
    console.log('DB ERROR : ', err);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

/**
 * @path {GET} http://localhost:3030/
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
app.get("/", (req, res) => {
    
    //Hello World 라는 데이터 반환
    res.send("Hello World");
})

/**
 * @path {GET} http://localhost:3030/api/users
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 * 
 */
app.get("/api/users", (req, res) => {
    
    //유저 데이터 반환
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ok: true, users: users});
})

app.listen(3030, () => console.log("express 서버가 3030포트에서 실행중"));