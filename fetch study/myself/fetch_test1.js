// ===========================GET=============================
// GET : 데이터 조회

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res)=>{

//         console.log(res);
//         return res.json()
//     })
//     .then((data)=>console.log(data));


// ===========================POST==================================
// POST : 새로운 데이터 추가

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body:JSON.stringify({
//         title:'foo',
//         body:'bar',
//         userId:1,
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((res)=>res.json())
//     .then((data)=>console.log(data));


// ===========================PUT==================================
// PUT : 데이터 전체 수정 ->  원래 있던 key 역시 안 적으면 출력되지 않음

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'PUT', // put is like updating
//     body:JSON.stringify({
//         id:1,
//         title:'foo',
//         body:'hiii', // 꼭  post로만 생성하는 것이 아니네 put으로도 새롭게 만들기 가능
        // userId:1,
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((res)=>res.json())
//     .then((data)=>console.log(data));




// ===========================DELETE==================================
// PATCH : 데이터 일부 수정

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'PATCH',
//     body:JSON.stringify({
//         title:'foo',
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((res)=>res.json())
//     .then((data)=>console.log(data));



// ===========================DELETE==================================
// DELETE : 정보 삭제

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     methdo:'DELETE',
// });



// ===========================Filtering resources==================================

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1&id=1')
//     .then((res)=>res.json())
//     .then((data)=>console.log(data));


// ===========================Listing nested resources==================================

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments') // url이 아래와 같은 뜻
// fetch('https://jsonplaceholder.typicode.com/posts/1/comments?postId=1')
//     .then((res)=>res.json())
//     .then((data)=>console.log(data));