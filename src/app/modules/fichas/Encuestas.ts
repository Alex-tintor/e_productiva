export class Encuestas{
    private _nombre:string;
    private _uuid:string;
    private _representante:string;
    private _numeroContacto:number;
    private _email:string;

    constructor(nombre:string,id:string,representante:string,contacto:number,email:string){
        this._nombre=nombre;
        this._uuid=id;
        this._representante=representante;
        this._numeroContacto=contacto;
        this._email=email;
    }
    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}
  
    public get id():string{return this._uuid;}
    public set id(id:string){this._uuid=id}
  
    public get representante():string{return this._representante;}
    public set representante(representante:string){this._representante=representante}
  
    public get contacto():number{return this._numeroContacto;}
    public set contacto(contacto:number){this._numeroContacto=contacto;}
  
    public get email():string{return this._email;}
    public set email(email:string){this._email=email;}
}
