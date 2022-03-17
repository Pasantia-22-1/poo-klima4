class Monitor extends dispositivoEntrada{

    //creamos el contador
    static contadorMonitores = 0; //se inicializa en 0

    //creamos el constructor
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca); //herencia 
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    //obtenemos
    get idMonitor(){
        this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}}]`;
    }
}

let monitor1 = new Monitor('pantalla', 'dell');
console.log(monitor1.toString());