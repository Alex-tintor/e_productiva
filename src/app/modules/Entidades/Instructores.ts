import { User } from "./User";

export class Instructor extends User{

    public centro : string;

    constructor(){
        super()
        this.centro = '';
    }
  
}