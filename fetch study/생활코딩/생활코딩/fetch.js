const fetchBtn = document.querySelector('.fetchBtn');
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.javascript');

window.addEventListener('click', (e) => {


    // 함수 만들기 전 version

    // if(e.target === fetchBtn){
    // // callbackme = function(){
    // // console.log('response end'); }
    // // fetch('html').then(callbackme); 

    // // 위와 같은 것
    // fetch('html').then(function (response) {
    //     // console.log(response);
    //     console.log(response.status);
    //     if (response.status === 200) {
    //         console.log("success");
    //     }
    // });
    // }

    // if(e.target === html){
    //     fetch('html').then(function(response){
    //         response.text().then(function(text){
    //             document.querySelector('article').innerHTML = text;
    //         });
    //     });
    // }

    // if(e.target === css){
    //     fetch('css').then(function(response){
    //         response.text().then(function(text){
    //             document.querySelector('article').innerHTML = text;
    //         })
    //     })
    // }

    // if(e.target === js){
    //     fetch('javascript').then(function(response){
    //         response.text().then(function(text){
    //             document.querySelector('article').innerHTML = text;
    //         });
    //     });
    // }


    // 함수로 만든 version
    if(e.target === html){
        fetchPage("html");
    }
    else if(e.target === css){
        fetchPage("css");
    }
    else if(e.target === js){
        fetchPage("javascript");
    }

});

function fetchPage(fetchName){
    fetch(fetchName).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    });
}


// ==========================li지우고 여기서 생성 후 바로 fetch 까지 가능==================
fetch('list').then(function(response){
    response.text().then(function(text){
        const items = text.split(',');
        let tags = '';
        for(let i=0; i<items.length; i++){
            let item = items[i];

            
    // <li><a  class="html">HTML</a></li>
        console.log(item);

            let tag = '<li><a href="#!' + item + '" onclick="fetchPage(\''+item+'\')">' + item + '</a></li>';
            tags = tags + tag ; 
        }
        document.querySelector('#nav').innerHTML = tags;
    })
})



/*
    fetch('html').then(callbackme);
    console.log('1');
    console.log('2');
    실행시키면 1,2가 먼저 출력(실행)되고 callbackme 함수가 실행된다.
*/

/*
    fetch('javascript') : 웹 브라우저야 자바스크립트라는 파일을 서버에게 응답해줘
    .then : fetch야 응답이 끝나면 함수를 실행시켜줘( fetch 요청이 끝난 후 실행되는 함수)
    비동기적 실행이므로 fetch가 실행중일 때 다른 코드 실행
    비동기 : 비동기는 동시에 실행되지 않는다. 따로따로 진행함 즉, fetch로 파일을 요청했는데 시간이 오래 걸릴 수 있음. 그 동안 컴퓨터가 다른 작업을 하는 것
*/