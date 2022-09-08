export class Instructores{
    private _cc:number;
    private _nombre:string;
    private _apellido:string;
    private _enail:string;
    private _telefono:number;
    private _centro:string;
    private _estado:boolean;

    constructor(id:number,nombre:string,apellido:string,email:string,telefono:number,centro:string,estado:boolean){
        this._cc=id;
        this._nombre=nombre;
        this._apellido=apellido;
        this._enail=email;
        this._telefono=telefono;
        this._centro=centro;
        this._estado=estado;
    }
    public get cc():number{return this._cc;}
    public set cc(cc:number){this._cc=cc}

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre}

    public get apellido():string{return this._apellido;}
    public set apellido(apellido:string){this._apellido=apellido;}

    public get email():string{return this._enail;}
    public set email(email:string){this._enail=email;}

    public get telefono():number{return this._telefono;}
    public set telefono(telefono:number){this._telefono=telefono}

    public get centro():string{return this._centro;}
    public set centro(centro:string){this._centro=centro;}

    public get estado():boolean{return this._estado;}
    public set estado(estado:boolean){this._estado=estado;}
  
  
  
}