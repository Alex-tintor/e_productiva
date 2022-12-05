import { User } from "./User";

export class Aprendiz extends User{

    public fichaId:string;

    public etapa:string;
    constructor(){
        super()
        this.fichaId = '';
        this.etapa = '';
    }
    
}
