


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
        // attach click function
        image.attr('onclick', 'expandPic(this);')
        column.append(image);
        }
 
})


function expandPic(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
