export class Programas{
    private _id:number;
    private _nombre:string;
    private _enabled:boolean;

    constructor(id:number,nombre:string,enabled:boolean){
        this._id=id;
        this._nombre=nombre;
        this._enabled=enabled
    }

    public get id():number{return this._id}
    public set id(id:number){this._id=id}

    public get nombre():string{return this._nombre}
    public set nombre(nombre:string){this._nombre=nombre}

    public get enabled():boolean{return this.enabled}
    public set enabled(enabled:boolean){this.enabled=enabled}
}