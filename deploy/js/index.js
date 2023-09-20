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
    loadContent('services.html','services')
    loadContent('projects.html','project')
    loadContent('contacts.html','contacts');
})

//for hamberger menu
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const hamburgerMenu = document.getElementById("hamburger-menu");
  
    hamburgerMenu.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  });
  


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