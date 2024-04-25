// Criado por Aparicio Fermiano Junior
// https://github.com/AparicioFermiano 

function nav() {
    var sidebar = document.querySelector(".sidebar");
    var btn_sidebar = document.querySelector(".btn-sidebar");
    var offcanvas = document.querySelector(".offcanvas");
    btn_sidebar.classList.toggle("open");
    sidebar.classList.toggle("open");
    offcanvas.classList.toggle("open");

    offcanvas.addEventListener("click", function() {
        offcanvas.classList.remove("open");
        btn_sidebar.classList.remove("open");
        sidebar.classList.remove("open");
    });
}

