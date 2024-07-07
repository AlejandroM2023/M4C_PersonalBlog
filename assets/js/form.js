
//variables

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
    }

});