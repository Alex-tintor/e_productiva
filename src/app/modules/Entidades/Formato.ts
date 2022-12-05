export class Formato{
    public id:string;
    public instructor:string;
    public fecha:string;
    public formato:Blob;

    constructor(){
        this.id='';
        this.instructor='';
        this.fecha='';
        this.formato = new Blob();
    }
}
