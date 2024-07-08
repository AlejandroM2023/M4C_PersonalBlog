
//variables

//load button
const theme = document.getElementById("theme");

//submit button
const submitButton = document.getElementById("submit");

//have all text boxes as array variable to minize variable/clean code
const inputBoxes = document.querySelectorAll("input");

//message area
const messageArea = document.getElementById("message");



//funtions

//to earase error messages
function resetErrors(){
   messageArea.innerHTML = "";
}

//check if boxes are empty if not clear previous error message and present new errors and return false if true return true
function boxIsNotEmpty(){
    let empty = false;
    let emptyCount = 0;
    resetErrors();
    for(let i =0; i<inputBoxes.length;i++){
        if(inputBoxes[i].value == ""){
            const lineBreak = document.createElement("br")
            messageArea.append(`${inputBoxes[i].id} is empty`);
            messageArea.appendChild(lineBreak);
            emptyCount ++;
        }
    }
    if(emptyCount == 0){
        empty = true;
    }
    return empty;
}



//button calls 

//event in function to prevent call since button inside form, checks if boxes are empty if not adds a post to a local storage variable
submitButton.addEventListener('click',function(event){
    event.preventDefault();
    if(boxIsNotEmpty()){
        addPost(inputBoxes[0].value,inputBoxes[1].value,inputBoxes[2].value);
        window.open("./blog.html","_self");
    }

});

//them change

theme.onclick =function(){
    if(checkTheme()){
        ligthMode();
        setTheme();
    }else{
        darkMode();
        setTheme();
    }
};

function darkMode(){
    //body color
    const body = document.querySelector("body");
    body.setAttribute('style', 'background: black');
    body.setAttribute('class','wordsBorder');
    const header = document.querySelector("header");
    header.setAttribute('style','border-color:white');

    const sub = document.querySelector("#submit");
    sub.setAttribute('style', 'background: white; color:black');

    theme.setAttribute('style','background-image: url(\'./assets/images/sun.png\')');

}

function ligthMode(){
    const body = document.querySelector("body");
    body.setAttribute('style', 'background: #e4e2df');
    body.setAttribute('class','');
    const header = document.querySelector("header");
    header.setAttribute('style','border-color:black');
    const sub = document.querySelector("#submit");
    sub.setAttribute('style', 'background: black; color:white');
    theme.setAttribute('style','background-image: url(\'./assets/images/moon.png\')');

}

//set theme to user default
if(checkTheme()){
    darkMode();
    
}else{
    ligthMode();
}
