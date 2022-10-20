export class Instructores{
    private _uuId :string;
    private _documento: string;
    private _nombre: string;
    private _apellido :string;
    private _email :string;
    private _telefono :string;
    private _centro: number;
    private _documentoType:string;
    private _enabled :boolean;

    constructor(uuId:string,documento:string,nombre:string,apellido:string,email:string,telefono:string,centro:number,tipo_documento:any,enabled:boolean){
        this._uuId=uuId;
        this._documento=documento;
        this._nombre=nombre;
        this._apellido=apellido;
        this._email=email;
        this._telefono=telefono;
        this._centro=centro;
        this._documentoType=tipo_documento;
        this._enabled=enabled;
    }
    public get uuId():string{return this._uuId;}
    public set uuId(uuId:string){this._uuId=uuId}

    public get documento():string{return this._documento;}
    public set documento(documento:string){this._documento=documento}

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}

    public get apellido():string{return this._apellido;}
    public set apellido(apellido:string){this._apellido=apellido;}

    public get email():string{return this._email;}
    public set email(email:string){this._email=email;}

    public get telefono():string{return this._telefono;}
    public set telefono(telefono:string){this._telefono=telefono}

    public get centro():number{return this._centro;}
    public set centro(centro_id:number){this._centro=centro_id}

    public get documentoType():string{return this._documentoType;}
    public set documentoType(tipo_documento:string){this._documentoType=tipo_documento}

    public get enabled():boolean{return this._enabled;}
    public set enabled(enabled:boolean){this._enabled=enabled;}
  
  
  
}