import { ResponseDto } from "./ResponseDto"

export class CentroFormacionDto extends ResponseDto{
    private _uuid:string
    private _nombre:string
    private _enabled:boolean

    constructor(){
        super()
        this._uuid=""
        this._nombre=""
        this._enabled=true
    }
    
    public get uuid(){ return this._uuid}
    public set uuid(uuid:string){this._uuid = uuid }

    public get nombre(){return this._nombre}
    public set nombre(nombre:string){this._nombre=this.nombre}

    public get enabled(){return this._enabled}
    public set enabled(enabled:boolean){this._enabled=enabled}

}