


$(document).ready(function () {
    for (let i = 0; i < projectsArr.length; i++) {
        // make new column div for portfolio thumbnails
        const column = $('<div>');
        column.addClass('column')
        $('#portThumbs').append(column);
        // insert image into each column
        const image = $('<img>')
        image.addClass('project-pic');
        image.attr('src', projectsArr[i].imageLoc)
        image.attr('alt', projectsArr[i].tittle)
        image.attr('id', i)
        // attach click function
        image.attr('onclick', 'expandPic(this);')
        column.append(image);
        }
 

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
