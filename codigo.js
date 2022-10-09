//Celulares
class Celular {
    constructor(color, peso, tamanio, rdc, ram, nombre) {
        this.color = color;
        this.peso = peso;
        this.tamanio = tamanio;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.nombre = nombre;
        this.encedido = false;

    }

    mobileInfo() {
        document.write(
            `
        nombre: <b>${this.nombre}</b><br>
         Color: <b>${this.color}</b><br>
         Peso : <b>${this.peso}</b><br>
         Tamanio : <b>${this.tamanio}</b><br>
       Memoria ram : <b>${this.memoriaRam}</b><br>
       Resolucion de video : <b>${this.resolucionDeCamara}</b><br>
         `)
    }
}


let celular1 = new Celular("rojo", "150gr", "5'", "full hd", "2gb", "celular1")
let celular2 = new Celular("negro", "155gr", "5.4'", " hd", "1gbc", "celular2")
let celular3 = new Celular("blanco", "146gr", "5.9'", "full hd", "2gb", "celular3")

let lista_celulares = [];
lista_celulares.push("celular1", "celular2", "celular3")





//API GOOGLE MAPS
function iniciarMap() {
    var coord = {
        lat: -31.6580861,
        lng: -64.4283101
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}