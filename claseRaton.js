class dispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this.marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamano(){
        return this.tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
}

//CLASE RATON
class Raton extends dispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}


//console.log(raton1.toString());

//CLASE TECLADO
class Teclado extends dispositivoEntrada{
    static contTeclados = 0;

    //creamos el constructor
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca); //?
        this._idTeclado = ++Teclado.contTeclados; //primero se incrementa luego visualiza
    }
    //creamos get
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}


//console.log(teclado1.toString());


//CLASE MONITOR preguntar si está bien++
class Monitor{
    //creamos el contador
    static contadorMonitores = 0; //se inicializa en 0

    //creamos el constructor
    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
        
    }
    //obtenemos
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamano: ${this._tamano}}]`;
    }
}

//console.log(monitor1.toString());

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

