export class CentrosFormacion{
    private _uuid:string;
    private _nombre:string;
    // private _coordinador:string;
    private _enabled:boolean;
    
    
    

    constructor(id:string,nombre:string/*,coordinador:string*/, estado:boolean){
        this._uuid=id;
        this._nombre=nombre;
        // this._coordinador= coordinador;
        this._enabled=estado;
    }
    public get id():string{return this._uuid;}
    public set id(id:string){this._uuid=id;}

    // public get coordinador():string{return this._coordinador;}
    // public set coordinador(coordinador:string){this._coordinador=coordinador;}

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}
  
    public get estado():boolean{return this._enabled;}
    public set estado(estado:boolean){this._enabled=estado}
}