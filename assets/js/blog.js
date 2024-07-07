//array holding all post
const postArr = JSON.parse(localStorage.getItem("postObjectArray"));

//area where post will be appended
const feed = document.getElementById("feed");





function createHeader(title){
    const header = document.createElement("header");
    header.textContent = title;
    header.setAttribute('class','postHeader');
    return header;

}

function createContent(content){
    const text = document.createElement("span");
    text.textContent = content;
    text.setAttribute('class','postSpan');
    return text;
}

function createFooter(userName){
    const footer = document.createElement("footer");
    footer.textContent = `Posted by: ${userName}`;
    footer.setAttribute('class','postFooter');
    return footer;
}

function loadPosts(){
    

    for(const post of postArr){

        //create individual post sections
        const postContainer = document.createElement("div");
        postContainer.setAttribute('class','post');
        
        postContainer.appendChild(createHeader(post.Title));
        postContainer.appendChild(createContent(post.content));
        postContainer.appendChild(createFooter(post.UserName));

        feed.appendChild(postContainer);

    }
}

//will load post when page is loaded
loadPosts();