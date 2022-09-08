export class Ficha { 
  private _nombrePrograma:string;
  private _numeroFicha:number;
  private _centroFormacion:string;
  private _etapa:string;
  private _estado:boolean;
  
  constructor(programa:string,ficha:number,centro:string,etapa:string,estado:boolean){
    this._nombrePrograma = programa;
    this._numeroFicha = ficha;
    this._centroFormacion = centro;
    this._etapa = etapa;
    this._estado = estado;
  }

  public get programa():string{return this._nombrePrograma;}
  public set programa(programa:string){this._nombrePrograma=programa}

  public get numero():number{return this._numeroFicha;}
  public set numero(ficha:number){this._numeroFicha=ficha}

  public get centro():string{return this._centroFormacion;}
  public set centro(centro:string){this._centroFormacion=centro}

  public get etapa():string{return this._etapa;}
  public set etapa(etapa:string){this._etapa=etapa;}

  public get estado():boolean{return this._estado;}
  public set estado(estado:boolean){this._estado=estado;}
}