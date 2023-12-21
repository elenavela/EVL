let logo = document.getElementById("icono");

function modoOscuro() { 
    if (document.querySelector("html").getAttribute("data-theme") === "claro") {
        document.querySelector("html").setAttribute("data-theme", "oscuro");
        logo.src = "images/logosinfondoclaro.png";
    }
    else {
        document.querySelector("html").setAttribute("data-theme", "claro");
        logo.src = "images/logosinfondo.png";
    }

}


