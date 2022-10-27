export class Ficha { 
  private _id:number;
  private _programaId:number;
  private _modalidad:string;
  private _instructor:number;
  private _centroId:number;
  private _inicio:Date;
  private _fin:Date;
  private _enabled:boolean;
  
  constructor(id:number,
    programaId:number,
    modalidad:string,
    instructor:number,
    centroId:number,
    inicio:string,
    fin:string,
    enabled:boolean)
    {
    this._id = id;
    this._programaId = programaId;
    this._modalidad = modalidad;
    this._instructor = instructor;
    this._centroId = centroId;
    this._inicio = new Date(Date.parse(inicio));
    this._fin = new Date(Date.parse(fin));
    this._enabled = enabled;
  }

  public get id():number{return this._id;}
  public set id(id:number){this._id=id}

  public get programaId():number{return this._programaId;}
  public set programaId(programaId:number){this._programaId=programaId}

  public get modalidad():string{return this._modalidad;}
  public set modalidad(modalidad:string){this._modalidad=modalidad}

  public get instructor():number{return this._instructor;}
  public set instructor(instructor:number){this._instructor=instructor}

  public get centroId():number{return this._centroId;}
  public set centroId(centroId:number){this._centroId=centroId}

  public get inicio():Date{return this._inicio;}
  public set inicio(inicio:Date){this._inicio=inicio;}

  public get fin():Date{return this._fin;}
  public set fin(fin:Date){this._fin=fin;}

  public get enabled():boolean{return this._enabled;}
  public set enabled(enabled:boolean){this._enabled=enabled;}

}