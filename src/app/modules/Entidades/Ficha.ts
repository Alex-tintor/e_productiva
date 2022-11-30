export class Ficha { 
  public id:string;
  public programaId:string;
  public modalidad:string;
  public instructor:string;
  public centroId:string;
  public inicio:string;
  public fin:string;
  public enabled:boolean;

  constructor(){
    this.id = "";
    this.programaId = "";
    this.modalidad = ""
    this.instructor = "";
    this.centroId = "";
    this.inicio = "";
    this.fin = "";
    this.enabled = true;
  }

}