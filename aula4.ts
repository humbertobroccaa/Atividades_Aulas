class Carro{
   private _marca: string
    private _cor: string
     private _potencia: number
     
     set Marca(marca) {
        this._marca = marca
    }

    get Marca() {
        return this._marca
    }

    set Cor(cor) {
        this._cor = cor
    }

    get Cor() {
        return this._cor
    }

    set Potencia(potencia) {
        if (potencia > 0)
            this._potencia = potencia
    }

    get Potencia() {
        return this._potencia
    }
}