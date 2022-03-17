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
let monitor1 = new Monitor('dei',2)
console.log(monitor1.toString());
