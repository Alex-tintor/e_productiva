export class Aprendices{
    private _cc:number;
    private _nombre:string;
    private _apellido:string;
    private _email:string;
    private _etapa:string;
    private _telefono:number;
    private _enabled:boolean;

    constructor(cc:number,nombre:string,apellido:string,email:string,etapa:string, telefono:number, enabled:boolean){
        enabled = true;
        this._cc=cc;
        this._nombre=nombre;
        this._apellido=apellido;
        this._email=email;
        this._etapa=etapa;
        this._telefono = telefono;
        this._enabled = enabled;
    }
    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}

    public get apellido():string{return this._apellido;}
    public set apellido(apellido:string){this._apellido=apellido}

    public get email():string{return this._email;}
    public set email(email:string){this._email=email}
  
    public get ficha():number{return this._telefono;}
    public set ficha(telefono:number){this._telefono=telefono}
  
    public get cc():number{return this._cc;}
    public set cc(cc:number){this._cc=cc}
  
    public get etapa():string{return this._etapa;}
    public set etapa(etapa:string){this._etapa=etapa;}

    public get enabled():boolean{return this._enabled;}
    public set enabled(enabled:boolean){this._enabled=enabled}
}
