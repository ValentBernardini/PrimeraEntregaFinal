//Celulares
alert("Lista de celulares: celular1 celular2 y celular3");
alert("Lista de apps: Google, Whatsapp, Twitter, e Instagram");
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


function selector() {
    for (let i = 0; i < 3; i++) {
        document.write(" ", lista_celulares[i], )
    }
    let cel_elegido = prompt("Que celular deseas ver?") 
    {
        if (cel_elegido == celular1.nombre) {
            celular1.mobileInfo();
        } else if (cel_elegido == celular2.nombre) {
            celular2.mobileInfo()
        } else if (cel_elegido == celular3.nombre) {
            celular3.mobileInfo()
        } else {
            document.write("No esta disponible")
        }
    }
}

 //Aplicaciones
class App {
    constructor(nombre,descargas, puntuacion, peso) {
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    appInfo() {
        document.write( `
        Descarags : ${this.descargas}<br>
        Puntuacion : ${this.puntuacion}<br>
        Peso : ${this.peso}`);
    }

}

let lista_apps = []
lista_apps.push("app1", "app2", "app3", "app4");

let app1 = new App("Google","16.000", "5 stars", "900MB")
let app2 = new App("Whatsapp","17.000", "6 stars", "1000MB")
let app3 = new App("Twitter","18.000", "7 stars", "1100MB")
let app4 = new App("Instagram","19.000", "8 stars", "1200MB")


function selectorApp() {
    let app_elegida = prompt("Que app deseas ver?") 
    {
        if (app_elegida == app1.nombre) {
            document.write("Elegiste: ", app1.nombre)
            app1.appInfo();        
        } else if (app_elegida == app2.nombre) {
            document.write("Elegiste: ", app2.nombre)
            app2.appInfo()           
        } else if (app_elegida == app3.nombre) {
            document.write("Elegiste: ", app3.nombre)
            app3.appInfo()           
        }else if (app_elegida == app4.nombre) {
            document.write("Elegiste: ", app4.nombre)
            app4.appInfo()
            }
         else {
            document.write("No esta disponible")
        }
    }
}

selector();
selectorApp();














