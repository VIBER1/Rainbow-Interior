function loadContent(page, targetId){
    const tragetSection = document.getElementById(targetId);
    const xhr = new XMLHttpRequest();
    xhr.open('GET','html/' + page,true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status === 200){
            tragetSection.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

window.addEventListener('load',function(){
    loadContent('about.html','about');
    loadContent('contacts.html','contacts');
})


var header=document.getElementsById("header");
function showMenu(){
    header.style.left="0";
}
function hideMenu(){
    header.style.right="-200px";
}

// function loadAboutContent() {
//     const aboutSection = document.getElementById('about');
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'about.html', true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             aboutSection.innerHTML = xhr.responseText;
//         }
//     };
//     xhr.send();
// }
// window.addEventListener('load', loadAboutContent);