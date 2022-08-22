class Celular {
    constructor(color, peso, tamanio, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamanio = tamanio;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encedido = false;

    }
    
    mobileInfo() {
        document.write(
            `
             Color: <b>${this.color}</b><br>
             Peso : <b>${this.peso}</b><br>
             Tamanio : <b>${this.tamanio}</b><br>
           Memoria ram : <b>${this.memoriaRam}</b><br>
           Resolucion de video : <b>${this.resolucionDeCamara}</b><br>
             `)
    }
}



celular1 = new Celular("rojo", "150gr", "5'", "full hd", "2gb")
celular2 = new Celular("negro", "155gr", "5.4'", " hd", "1gb")
celular3 = new Celular("blanco", "146gr", "5.9'", "full hd", "2gb")

function selector() {
    let cel_elegido = prompt("Que celular deseas ver?") 
    {
        if (cel_elegido == "celular 1") {
            celular1.mobileInfo();
        } 
        else if (cel_elegido == "celular 2") {
            celular2.mobileInfo()
        }
         else if (cel_elegido == "celular 3") {
            celular3.mobileInfo()
        } else {
            document.write("No esta disponible")
        }
    }
}



selector();
