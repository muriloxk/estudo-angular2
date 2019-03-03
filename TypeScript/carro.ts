class Carro{
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number;

    constructor(modelo: string, numeroDePortas: number, velocidade: number)
    {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }

    public parar(): void {
        this.velocidade =0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}