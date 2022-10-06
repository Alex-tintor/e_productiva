export class Ficha { 
  private _id:number;
  private _modalidad:string;
  private _fechaInicio:Date;
  private _fechaFin:Date;
  private _enabled:boolean;
  
  constructor(id:number,
    modalidad:string,
    fechaInicio:string,
    fechaFin:string,
    estado:boolean)
    {
    estado = true;
    this._id = id;
    this._modalidad = modalidad;
    this._fechaInicio = new Date(Date.parse(fechaInicio));
    this._fechaFin = new Date(Date.parse(fechaFin));
    this._enabled = estado;
  }

  public get id():number{return this._id;}
  public set id(id:number){this._id=id}

  public get modalidad():string{return this._modalidad;}
  public set modalidad(modalidad:string){this._modalidad=modalidad}

  public get fechaInicio():Date{return this._fechaInicio;}
  public set fechaInicio(fecchaInicio:Date){this._fechaInicio=fecchaInicio;}

  public get fechaFin():Date{return this._fechaFin;}
  public set fechaFin(fechaFin:Date){this._fechaFin=fechaFin;}

  public get estado():boolean{return this._enabled;}
  public set estado(estado:boolean){this._enabled=estado;}

}