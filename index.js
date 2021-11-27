//express 모듈 추가
const express = require("express");

//express 사용
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//임시 데이터 선언
const users = [
    { id: 1, name: "유저1" },
    { id: 2, name: "유저2" },
    { id: 3, name: "유저3" }
];

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

/**
 * @path {GET} http://localhost:3030/api/users/user?user_id=1
 * @description Query Params 요청 데이터 값이 있고 반환 값이 있는 GET Method
 * 
 * Query Params 방식
 * user 뒤에 user_id 변수를 통해 값을 찾을 수 있다.
 * &를 통해 두변째 변수를 받아 사용할 수 있다. (/user?user_id=1&name="유저1")
 */
app.get("/api/users/user", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const user_id = req.query.user_id;

    //filter 함수는 자바스크립트 배열 함수, 필터링을 할때 많이 사용되고 필터링한 새로운 배열을 반환한다.
    const user = users.filter(data => data.id == user_id);

    res.json({ok: false, user: user});
})

app.listen(3030, () => console.log("express 서버가 3030포트에서 실행중"));