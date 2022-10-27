export class Aprendiz{
    private _documento:string;
    private _nombre:string;
    private _apellido:string;
    private _email:string;
    private _telefono:string;
    private _fichaId:number;
    private _etapa:string;
    private _enabled:boolean;

    constructor(documento:string,nombre:string,apellido:string,email:string,telefono:string,fichaId:number,etapa:string,enabled:boolean){
        this._documento=documento;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._telefono = telefono;
        this._fichaId = fichaId;
        this._etapa = etapa;
        this._enabled = enabled;
    }
    public get documento():string{return this._documento;}
    public set documento(cc:string){this._documento=cc}

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}

    public get apellido():string{return this._apellido;}
    public set apellido(apellido:string){this._apellido=apellido}

    public get email():string{return this._email;}
    public set email(email:string){this._email=email}

    public get telefono():string{return this._telefono;}
    public set telefono(telefono:string){this._telefono=telefono}
  
    public get fichaId():number{return this._fichaId;}
    public set fichaId(fichaId:number){this._fichaId=fichaId}
  
    public get etapa():string{return this._etapa;}
    public set etapa(etapa:string){this._etapa=etapa;}

    public get enabled():boolean{return this._enabled;}
    public set enabled(enabled:boolean){this._enabled=enabled}
}
