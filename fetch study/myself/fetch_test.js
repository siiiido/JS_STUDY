// ===================fetch() 기본 형태=======================

// fetch('api 주소')
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(res){
//     //data를 응답 받은 후의 로직
//     });

    // 이렇게 바꾸기~
fetch('api 주소')
    .then(res => res.json())
    .then(res =>{
    // data를 응답 받은 후의 로직
    });


// =================fetch() 함수가 - method가 get인 경우==================

// 설명: 유저 정보를 가져온다.
// base url: https://api.google.com
// endpoint: /user/3
// method: get
// 응답형태:
//     {
//         "success": boolean,
//         "user": {
//             "name": string,
//             "batch": number
//         }
//     }

// fetch() 기본이 get이라서 아무것도 작성하지 않아도 get으로 호출
fetch('https://api.google.com/user/3')
    .then(res=>res.json())
    .then(res=>{
        if(res.success){
            console.log(`{res.user.name}` 님 환영합니다.);
        }
    })



// ====================fetch() 함수가 - method가 post인 경우======================

// 설명: 유저를 저장한다.
// base url: https://api.google.com
// endpoint: /user
// method: post
// 요청 body:
//         {
//         "name": string,
//         "batch": number
//     }
    
// 응답 body:
//     {
//         "success": boolean
//     }


fetch('https://api.google.com/user',{
    method: 'POST',
    body:JSON.stringify({
        name:"yeri",
        batch:1
    })
})
.then(res=>res.json())
.then(res=>{
    if(res.success){
        alert('저장 완료');
    }
})



// ==============fetch() 함수 - method가 get인데 parameter를 전달해야 하는 경우============
// 설명: 유저 정보를 가져온다.
// base url: https://api.google.com
// endpoint: /user
// method: get
// query string: ?id=아이디
// 응답형태:
//     {
//         "success": boolean,
//         "user": {
//             "name": string,
//             "batch": number
//         }
//     }


fetch('https://api.google.com/user?id=3') //api 주소 뒤에 붙여주면 끝
    .then(res=>res.json())
    .then(res=>{
        if(res.success){
            console.log(`{res.user.name}`님 환영합니다.)
        }
    });