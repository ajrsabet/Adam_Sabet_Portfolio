
$(document).ready(function () {
    for (let i = 0; i < projectsArr.length; i++) {
        // make new column div for portfolio thumbnails
        $('#portThumbs').append(`<div class="column">
        <img class="project-pic" src="${projectsArr[i].imageLoc}" alt="${projectsArr[i].tittle}" id="${i}" onclick="expandPic(this);">
    </div>`);
    };
})


function expandPic(imgs) {
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    const url = document.getElementById("url")
    const gitHub = document.getElementById("gitHub")
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    url.href = projectsArr[imgs.id].URL;
    gitHub.href = projectsArr[imgs.id].gitHub;
    expandImg.parentElement.style.display = "block";
    
}
