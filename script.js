$(document).ready(function () {
    // Display portfolio thumbnails
    for (let i = 0; i < projectsArr.length; i++) {
        // make new column div for portfolio thumbnails
        $('#portThumbs').append(`<div class="column">
        <img class="project-pic" src="${projectsArr[i].imageLoc}" alt="${projectsArr[i].tittle}" id="${i}" onclick="expandPic(this);">
    </div>`);
    };
    // Display first project full view
    expandPic()

    // skill bar animation
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
});

// Display first project full view
function expandPic(imgs) {
    let project;
    if (!imgs) {
        project = projectsArr[0];
    } else {
        project = projectsArr[imgs.id];
    }

    $(".project-viewer").empty();
    $(".project-viewer").html(`<img id="expandedImg" class="image" alt="project-viewer" src="${project.imageLoc}"
    style="width:100%">
    <div class="middle">
        <div class="text">
            <h1 id="imgtext">${project.title}</h1>
            <a id="url" href="${project.URL}">URL Link</a>
            <a id="gitHub" href="${project.gitHub}">GitHub</a>
            <p>${project.description}<p>
        </div>
    </div>`);
}