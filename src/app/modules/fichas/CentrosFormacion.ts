export class CentrosFormacion{
    private _nombre:string;
    private _direccion:string;
    private _regional:string;
    private _coordinador:string;
    private _numeroAprendices:number;

    constructor(nombre:string, direccion:string, regional:string,coordinador:string,aprendices:number){
        this._nombre=nombre;
        this._direccion=direccion;
        this._regional=regional;
        this._coordinador=coordinador;
        this._numeroAprendices=aprendices;
    }
    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}
  
    public get direccion():string{return this._direccion;}
    public set ficha(direccion:string){this._direccion=direccion}
  
    public get regional():string{return this._regional;}
    public set regional(regional:string){this._regional=regional}
  
    public get coordinador():string{return this._coordinador;}
    public set coordinador(coordinador:string){this._coordinador=coordinador;}
  
    public get aprendices():number{return this._numeroAprendices;}
    public set aprendices(aprendices:number){this._numeroAprendices=aprendices;}
}