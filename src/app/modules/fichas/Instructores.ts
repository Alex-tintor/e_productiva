export class Instructores{
    private _cc:number;
    private _nombre:string;
    private _apellido:string;
    private _email:string;
    private _telefono:number;
    private _estado:boolean;

    constructor(cc:number,nombre:string,apellido:string,email:string,telefono:number,estado:boolean){
        estado=true;
        this._cc=cc;
        this._nombre=nombre;
        this._apellido=apellido;
        this._email=email;
        this._telefono=telefono;
        this._estado=estado;
    }
    public get cc():number{return this._cc;}
    public set cc(cc:number){this._cc=cc}

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}

    public get apellido():string{return this._apellido;}
    public set apellido(apellido:string){this._apellido=apellido;}

    public get email():string{return this._email;}
    public set email(email:string){this._email=email;}

    public get telefono():number{return this._telefono;}
    public set telefono(telefono:number){this._telefono=telefono}

    public get estado():boolean{return this._estado;}
    public set estado(estado:boolean){this._estado=estado;}
  
  
  
}