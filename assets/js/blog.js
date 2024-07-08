//array holding all post
const postArr = JSON.parse(localStorage.getItem("postObjectArray"));

//area where post will be appended
const feed = document.getElementById("feed");

//load button
const theme = document.getElementById("theme");

const back = document.getElementById("back");


function createHeader(title){
    const header = document.createElement("header");
    header.textContent = title;
    let clss;
    if(checkTheme()){
        clss = "postHeaderDark";
    }else{
        clss = "postHeaderLight";
    }
    header.setAttribute('class', clss);
    return header;

}

function createContent(content){
    const text = document.createElement("span");
    text.textContent = content;
    let clss;
    if(checkTheme()){
        clss = "postSpanDark"
    }else{
        clss = "postSpanLight"
    }
    text.setAttribute('class',clss);
    return text;
}

function createFooter(userName){
    const footer = document.createElement("footer");
    footer.textContent = `Posted by: ${userName}`;
    let clss;
    if(checkTheme()){
        clss = "postFooterDark"
    }else{
        clss = "postFooterLight"
    }
    footer.setAttribute('class',clss);
    return footer;
}

function loadPosts(){
    

    for(const post of postArr){

        //create individual post sections
        const postContainer = document.createElement("div");
        if(checkTheme()){
            postContainer.setAttribute('class','postDark');
        }else{
            postContainer.setAttribute('class','postLight');
        }
        
        
        postContainer.appendChild(createHeader(post.Title));
        postContainer.appendChild(createContent(post.content));
        postContainer.appendChild(createFooter(post.UserName));

        feed.appendChild(postContainer);

    }
}

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

    //header
    const header = document.querySelector("#mainHeader");
    header.setAttribute('class','wordsBorder');

    //feed
    const main = document.querySelector("main");
    main.setAttribute('class','wordsBorder')

    //all post text content
    const blogContent = document.querySelectorAll("span");
    const blogFooter = document.querySelectorAll("footer");
    
    for(const item of blogContent){
        item.setAttribute('style','color:white');
    }
    for(const item of blogFooter){
        item.setAttribute('style','color:white');
    }
    theme.setAttribute('style','background-image: url(\'./assets/images/sun.png\')');
}

function ligthMode(){
    //body color
    const body = document.querySelector("body");
    body.setAttribute('style', 'background: #e4e2df');

    const header = document.querySelector("#mainHeader");
    header.setAttribute('class','');

    //feed
    const main = document.querySelector("main");
    main.setAttribute('class','')

    //all post text content
    const blogContent = document.querySelectorAll("span");
    const blogFooter = document.querySelectorAll("footer");
    
    for(const item of blogContent){
        item.setAttribute('style','color:black');
    }
    for(const item of blogFooter){
        item.setAttribute('style','color:black');
    }

    theme.setAttribute('style','background-image: url(\'./assets/images/moon.png\')');

}
back.addEventListener('click',function(){
    
    window.open("./index.html","_self");

});

//will load post when page is loaded
loadPosts();

//set theme to user default
if(checkTheme()){
    darkMode();
    
}else{
    ligthMode();
}




