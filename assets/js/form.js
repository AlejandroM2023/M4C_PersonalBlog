
//variables

//submit button
const submitButton = document.getElementById("submit");

//have all text boxes as array variable to minize variable/clean code
const inputBoxes = document.querySelectorAll("input");


//funtions




//button calls 

//event in function to prevent call since button inside form
submitButton.addEventListener('click',function(event){
    event.preventDefault();
    console.log(inputBoxes[1].value);
});