
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";// 로그인 여부에 따라 form을 숨길지 말지를 결정할 것이다. 숨기는 기능을 hidden이란 클래스를 html에 추가함으로써 구현할건데 이를 HIDDEN_CLASSNAME이란 변수에 저장
const USERNAME_KEY = "username";//사용자 이름을 저장 localStorage에 저장할 것이다. 이떄  key값을 변수 USERNAME_KEY에 저장할 것이다.

//유저가 이름을 입력했을때 다음 기능 실행
function onLoginSubmit(event){
event.preventDefault();// 브라우저가 기본 동작(form submit 시 페이지 새로고침)을 실행하지 못하게 막기 
loginForm.classList.add(HIDDEN_CLASSNAME);//로그인 폼 숨기기
const username = loginInput.value;// 유저가 입력한 이름을 변수 username에 저장
localStorage.setItem(USERNAME_KEY, username);// 변수 username을 localStorage에 추가
paintGreetings(username);
 
}
function paintGreetings(username){
greeting.innerText = `Hello ${username}`;// HTML 요소 greeting에 해당 문구를 추가한다.
greeting.classList.remove(HIDDEN_CLASSNAME);// h1에서 hidden클래스 제거해서 표시
}
  
loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

  if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);// 유저이름 입력 폼을 화면에 다시표시함
    loginForm.addEventListener("submit", onLoginSubmit); 
  }else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);// h1태그 내용에 hello (사용자이름) 을 추가하고 숨김 해제.
  }
  
  