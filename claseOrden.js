class Orden{
    static contadorOrden = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computador = [];
    }
    get computador(){
        this._computador;
    }
    get idOrden(){
        this._idOrden;
    }
    set computador(computador){
        this._computador = computador;
    }
    set idOrden(idOrden){
        this._idOrden = idOrden;
    }

    agregarComputador(computador){
        this._computador.push(computador);
    }
    mostrarOrden(){
        console.log(`Orden: [idOrden: ${this._idOrden}, ${this._computador}]`);
    }
    toString(){
        return `Orden: [idOrden: ${this._idOrden}, ${this._computador}]`;
    }
}

//creamos el computador1
let raton1 = new Raton('wireless', 'genius');
let teclado1 = new Teclado('usb','wit');
let monitor1 = new Monitor('dell', 2)
let computador1 = new Computador('computador1', monitor1, teclado1, raton1);

//creamos el computador2
let raton2 = new Raton('mouse', 'swla');
let teclado2 = new Teclado('Bluetooth', 'done');
let monitor2 = new Monitor('hp', 5)
let computador2 = new Computador('computador segundo', monitor2, teclado2, raton2);

let orden1 = new Orden();
orden1.agregarComputador(computador1);
orden1.agregarComputador(computador2);
orden1.mostrarOrden();