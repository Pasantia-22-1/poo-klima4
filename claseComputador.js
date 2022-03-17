//CLASE COMPUTADOR preeguntar
class Computador{
    static contadorComputador = 0;

    //dentro del constructor creamos las inicializaciones
    constructor(nombre, monitor, teclado, raton){
        this._idComputador = ++Computador.contadorComputador;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;  
    }
    toString(){
        return `Computadora: [idcomputadora: ${this._idComputador}, nombre: ${this._nombre}, monitor: ${this._monitor}, teclado: ${this._teclado}, raton: ${this._raton}]`;
    }
}
/*let raton1 = new Raton('wireless', 'genius');
let teclado1 = new Teclado('usb','wit');
let monitor1 = new Monitor('dell', 2)
let computador1 = new Computador('computador1', monitor1, teclado1, raton1);
console.log(computador1.toString());
*/