// 개발자도구 network에서 preview, headers, response을 챙겨보자

function fetchData(){
    // fetch("https://reqres.in/api/users"); // 개발자도구 네트워크에서 확인 가능
    // console.log(fetch("https://reqres.in/api/users")); // 콘솔창에 promise 객체 반환 -> 여러가지를 확인할 수 있다

    // fetch("https://reqres.in/api/users").then(abc=>{
    //     console.log(abc);   // response 객체 반환
    // });


    // fetch("https://reqres.in/api/users").then(response=>{
    //     const data = response.json();
    //     console.log(data);  // 위와 같이 콘솔창에 promise 객체 반환
    // });


    fetch("https://reqres.in/api/users/").then(response=>{
        if(!response.ok){ // url주소가 잘못되거나 하면 ok가 false뜨는데 그 때 error를 catch로 던져준다
            throw Error("ERROR");
        }
        return response.json();
    }).then(data=>{
        // console.log(data);
        console.log(data.data);
        const html = data.data.map(user=>{
            return `
            <div class="user">
                <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
                <p>Name : ${user.first_name}</p>
                <p>Email : ${user.email}</p>
            </div>
            `;
        })
        .join("");
        console.log(html);
        // document.querySelector('#app').innerHTML = '<h1>helooooooo</h1>'
        document.querySelector('#app').insertAdjacentHTML("afterbegin",html); // name들이 써짐
    }).catch(error=>{
        console.log(error);
    });
}


function postData(){
    fetch("https://reqres.in/api/users",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:"morpheus",
            job:"leader"
        })
    }).then(response=>{
        if(!response.ok){
            throw Error("ERROR 떳따~");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    })
}



// fetchData();

postData();