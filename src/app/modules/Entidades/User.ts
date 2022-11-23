export class User{
  public uuid :string;
  public documento:string;
  public nombre:string;
  public apellido:string;
  public email:string;
  public telefono:string;
  public enabled:boolean;
  public documentoType:number;

  constructor(){
    this.uuid='';
    this.documento='';
    this.nombre='';
    this.apellido='';
    this.email='';
    this.telefono='';
    this.enabled=true;
    this.documentoType=1;
  }
}