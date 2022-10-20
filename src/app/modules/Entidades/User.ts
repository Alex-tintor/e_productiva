export class User{
  private _id:number;
  private _enabled:boolean;
  private _password:string;
  private _rol:number;
  private _user:number;

  constructor (id:number,enabled:boolean,password:string,rol:number,user:number){
    this._id = id;
    this._user = user;
    this._password = password;
    this._rol = rol;
    this._enabled = enabled;
  }

}