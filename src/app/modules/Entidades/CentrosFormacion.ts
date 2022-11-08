export class CentrosFormacion{
    private _uuid:string;
    private _nombre:string;
    private _enabled:boolean;

    constructor(uuid:string,nombre:string, enabled:boolean){
        this._uuid=uuid;
        this._nombre=nombre;
        this._enabled=enabled;
    }

    public get uuid():string{return this._uuid;}
    public set uuid(uuid:string){this._uuid=uuid;}

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}
  
    public get enabled():boolean{return this._enabled;}
    public set enabled(enabled:boolean){this._enabled=enabled}
}