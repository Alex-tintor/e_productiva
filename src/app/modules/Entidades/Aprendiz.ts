export class Aprendiz{
    private _cc:number;
    private _nombre:string;
    private _apellido:string;
    private _email:string;
    private _telefono:number;
    private _fichaId:number;
    private _etapa:string;
    private _enabled:boolean;

    constructor(){
        this._cc=0;
        this._nombre = ''
        this._apellido = ''
        this._email = ''
        this._telefono = 0
        this._fichaId = 0
        this._etapa = ''
        this._enabled = true;
    }
    public get cc():number{return this._cc;}
    public set cc(cc:number){this._cc=cc}

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}

    public get apellido():string{return this._apellido;}
    public set apellido(apellido:string){this._apellido=apellido}

    public get email():string{return this._email;}
    public set email(email:string){this._email=email}

    public get telefono():number{return this._telefono;}
    public set telefono(telefono:number){this._telefono=telefono}
  
    public get fichaId():number{return this._fichaId;}
    public set fichaId(fichaId:number){this._fichaId=fichaId}
  
    public get etapa():string{return this._etapa;}
    public set etapa(etapa:string){this._etapa=etapa;}

    public get enabled():boolean{return this._enabled;}
    public set enabled(enabled:boolean){this._enabled=enabled}
}
