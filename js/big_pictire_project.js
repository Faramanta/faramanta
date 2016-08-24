var myProjects = document.querySelectorAll('.project-item');
var shadow = document.querySelector('.shadow');





myProjects.forEach(function(project) {
    var zoom = project.querySelector('.project-zoom');
    var img = project.querySelector('.project-img-big');
    zoom.addEventListener('click', function (zoom) {
        event.preventDefault();
        shadow.classList.add('shadow-show');
        img.classList.add('project-img-big-show');
    });

    shadow.addEventListener('click', function(event) {
        event.preventDefault();
        shadow.classList.remove('shadow-show');
        img.classList.remove('project-img-big-show');
    });

    window.addEventListener('keydown', function(event) {
        event.preventDefault();
        shadow.classList.remove('shadow-show');
        img.classList.remove('project-img-big-show');
    })

});







