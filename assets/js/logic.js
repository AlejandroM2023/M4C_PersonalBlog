//check of our array of object already exist if not create it
if(!localStorage.getItem("postObjectArray")){
    const obj = [];
    localStorage.setItem("postObjectArray",JSON.stringify(obj));
}


function addPost(userName,title,txt){

    const post = {UserName: userName,Title: title, content: txt};
    const postArr = JSON.parse(localStorage.getItem("postObjectArray")) ;
    postArr.push(post);
    localStorage.setItem("postObjectArray",JSON.stringify(postArr));
    

}