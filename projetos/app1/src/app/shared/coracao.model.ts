export class Coracao {

    public isCheio = true;
    public coracaoVazio: string = "far fa-heart";
    public coracaoCheio: string = "fas fa-heart";

    public retornaCoracao() : string {
        if(this.isCheio){
            return this.coracaoCheio;
        }
        else{
            return this.coracaoVazio;
        }
    }
    
}