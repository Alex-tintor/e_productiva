export class Ficha { 
  private _id:number;
  private _programa:string;
  private _modalidad:string;
  private _instructorId:number;
  private _centro:string;
  private _fechaInicio:string;
  private _fechaFin:string;
  private _etapa:string;
  private _estado:boolean;
  
  constructor(id:number,
    programa:string,
    modalidad:string,
    instructor:number,
    centro:string,
    fechaInicio:string,
    fechaFin:string,
    etapa:string,
    estado:boolean)
    {
    this._id = id;
    this._programa = programa;
    this._modalidad = modalidad;
    this._instructorId = instructor;
    this._centro = centro;
    this._fechaInicio = fechaInicio;
    this._fechaFin = fechaFin;
    this._etapa = etapa;
    this._estado = estado;
  }

  public get id():number{return this._id;}
  public set id(id:number){this._id=id}

  public get programa():string{return this._programa;}
  public set programa(programa:string){this._programa=programa}

  public get modalidad():string{return this._modalidad;}
  public set modalidad(modalidad:string){this._modalidad=modalidad}
  
  public get instructor():number{return this._instructorId;}
  public set instructor(instructor:number){this._instructorId=instructor}

  public get centro():string{return this._centro;}
  public set centro(centro:string){this._centro=centro}

  public get fechaInicio():string{return this._fechaInicio;}
  public set fechaInicio(fecchaInicio:string){this._fechaInicio=fecchaInicio;}

  public get fechaFin():string{return this._fechaFin;}
  public set fechaFin(fechaFin:string){this._fechaFin=fechaFin;}

  public get etapa():string{return this._etapa;}
  public set etapa(etapa:string){this._etapa=etapa}

  public get estado():boolean{return this._estado;}
  public set estado(estado:boolean){this._estado=estado;}
}