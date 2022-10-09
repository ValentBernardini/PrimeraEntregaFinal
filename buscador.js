let buscador = document.getElementById("producto");
let cel1 = document.getElementById("celular1");
let cel2 = document.getElementById("celular2");
let cel3 = document.getElementById("celular3");


buscador.addEventListener("change", function (e) {
    if (e.target.value == "huawei") {
        myFunction();
    } else if (e.target.value == "samsung") {
        myFunction1();
    } else if (e.target.value == "iphone") {
        myFunction2();
    } else {
        cel1.style.display = "block";
        cel2.style.display = "block";
        cel3.style.display = "block";
        Swal.fire(
            'ERROR',
            'No se encontro tu producto',
            'error'
        )
    }
})

let volver_btn = document.getElementById("volver");
volver_btn.addEventListener("click", function(){
        cel1.style.display = "block";
        cel2.style.display = "block";
        cel3.style.display = "block";
})

function myFunction() {
    cel1.style.display = "block";
    cel2.style.display = "none";
    cel3.style.display = "none";

}

function myFunction1() {
    cel2.style.display = "block";
    cel1.style.display = "none";
    cel3.style.display = "none";

}

function myFunction2() {
    cel3.style.display = "block";
    cel1.style.display = "none";
    cel2.style.display = "none";

}