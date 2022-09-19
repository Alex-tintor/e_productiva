export class Aprendices{
    private _cc:number;
    private _nombre:string;
    private _apellido:string;
    private _numeroFicha:number;
    private _etapa:string;
    private _estado:string;

    constructor(cc:number,nombre:string,apellido:string,ficha:number,etapa:string,estado:string){
        this._cc=cc;
        this._nombre=nombre;
        this._apellido=apellido;
        this._numeroFicha=ficha;
        this._etapa=etapa;
        this._estado=estado;
    }
    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}

    public get apellido():string{return this._apellido;}
    public set apellido(apellido:string){this._apellido=apellido}
  
    public get ficha():number{return this._numeroFicha;}
    public set ficha(ficha:number){this._numeroFicha=ficha}
  
    public get cc():number{return this._cc;}
    public set cc(cc:number){this._cc=cc}
  
    public get etapa():string{return this._etapa;}
    public set etapa(etapa:string){this._etapa=etapa;}
  
    public get estado():string{return this._estado;}
    public set estado(estado:string){this._estado=estado;}
}
