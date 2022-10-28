export class Formato{
    private _id:number;
    private _instructor:string;
    private _fecha:Date;

    constructor(id:number,instructor:string,fecha:Date){
        this._id=id;
        this._instructor=instructor;
        this._fecha=fecha
    }
  
    public get id():number{return this._id;}
    public set id(id:number){this._id=id;}
  
    public get instructor():string{return this._instructor;}
    public set instructor(instructor:string){this._instructor=instructor;}

    public get fecha():Date{return this._fecha;}
    public set fecha(fecha:Date){this._fecha=fecha;}
}
