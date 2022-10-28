export class User{
  private _uuid :string;
  private _documento:string;
  private _nombre:string;
  private _apellido:string;
  private _email:string;
  private _telefono:string;
  private _enabled:boolean;
  private _documentoType:string;

  constructor(uuid:string,documento:string,nombre:string,apellido:string,email:string,telefono:string,enabled:boolean,documentoType:string){
    this._uuid=uuid;
    this._documento=documento;
    this._nombre=nombre;
    this._apellido=apellido;
    this._email=email;
    this._telefono=telefono;
    this._enabled=enabled;
    this._documentoType=documentoType;
  }

  public get uuid():string{return this._uuid;}
  public set uuid(uuid:string){this._uuid=uuid}

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

  public get documentoType():string{return this._documentoType;}
  public set documentoType(documentoType:string){this._documentoType=documentoType;}

  public get enabled():boolean{return this._enabled;}
  public set enabled(enabled:boolean){this._enabled=enabled}
}