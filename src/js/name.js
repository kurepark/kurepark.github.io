const userForm = document.querySelector('.name_form'),
    userInput = userForm.querySelector('.nf_input'),
    userContainer = document.querySelector('.user_name'),
    userText = document.querySelector(".name_wrap .ask_text"),
    userLS = "current_user",//local storage key
    stateCN = "show";//user name toggle class name

function saveUserName(name){
    const currentUser = name;
    localStorage.setItem(userLS, currentUser);
}

function handleSubmit(event){
    event.preventDefault();
    const inputUserName = userInput.value;
    paintUserName(inputUserName);
    saveUserName(inputUserName);
}

function setUserName(){
    userText.classList.add(stateCN);
    userForm.classList.add(stateCN);
    userForm.addEventListener("submit", handleSubmit);
} 

function paintUserName(name) {
    userText.classList.remove(stateCN);
    userForm.classList.remove(stateCN);//form remove
    userContainer.classList.add(stateCN);//username view
    userContainer.innerText = `Hello, ${name}`;
}

function loadUserName(){
    const currentUser = localStorage.getItem(userLS);
    if(currentUser === null) {
        //username 이 없으면
        setUserName();
    } else {
        //username 이 있으면
        paintUserName(currentUser);
    }
}

function init() {
    loadUserName();
}

init();