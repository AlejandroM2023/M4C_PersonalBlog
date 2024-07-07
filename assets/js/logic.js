

//check of our array of object already exist if not create it
if(!localStorage.getItem("postObjectArray")){
    const obj = [];
    localStorage.setItem("postObjectArray",JSON.stringify(obj));
}
if(!localStorage.getItem("darkMode")){
    const theme = false;
    localStorage.setItem("darkMode",JSON.stringify(theme));
}

//pulls aray and turns it into javascript then pushes object then stores it as json 
function addPost(userName,title,txt){

    const post = {UserName: userName,Title: title, content: txt};
    const postArr = JSON.parse(localStorage.getItem("postObjectArray")) ;
    postArr.push(post);
    localStorage.setItem("postObjectArray",JSON.stringify(postArr));
    

}
function setTheme(){
    let bl = JSON.parse(localStorage.getItem("darkMode")) ;
    if(bl){
        bl=false;
        
    }else{
        bl=true;
    }
    localStorage.setItem("darkMode",JSON.stringify(bl));
}

function checkTheme(){
    const bl = JSON.parse(localStorage.getItem("darkMode")) ;
    return bl;
}

//will take in a section of html and add class for dark mode 