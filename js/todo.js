const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDoArray = [];
///////////////////////////////////////////////////////////////////////funtcion
///
function saveToDo(params) {
    localStorage.setItem("todoarray", JSON.stringify(toDoArray));
}

///to-do리스트 요소 삭제
function removeList(event){
 const li = event.target.parentElement;//버튼들 간에 구분이 잘 안감. 따라서 그들의 부모의 요소로 구분해 취사 삭제 
 li.remove();
}
///
function paintToDo(newTodo){
const li = document.createElement("li");
const span = document.createElement("span");//옆에 삭제 버튼을 추가하기위해 띄어쓰기
span.innerText = newTodo;
const button = document.createElement("button");//삭제버튼 생성
button.innerText = "✨";
li.appendChild(span);//span을 li 내부에 넣어주기
li.appendChild(button);

toDoList.appendChild(li);


button.addEventListener("click", removeList);//삭제버튼에 삭제 기능 추가 
}
///to-do리스트 요소 추가 
function handleToDoSubmit(event){
    event.preventDefault();//기본동작(새로고침) 막음
    const newToDo = toDoInput.value;//입력받은 내용을 newToDo 변수에 저장
    toDoInput.value = "";
    toDoArray.push = newToDo;//배열에 입력받은 내용 추가
    paintToDo(newToDo);//리스트생성 함수호출
}

///////////////////////////////////////////////////////////////////////////
toDoForm.addEventListener("submit", handleToDoSubmit);