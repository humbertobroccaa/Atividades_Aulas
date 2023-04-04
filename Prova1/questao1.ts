class Fornecedor{

    private _ID: string
    private _Nome_Razao_Social: string
    private _CPF_CNPJ: string
    private _Telefone: string
    private _Endereco: string
    
    set id (ID: string){
        this._ID = ID
    }
    
    get id (){
        return this._ID;
    }
    
    set NomeERazaoSocial (Nome_Razao_Social: string){
        this._Nome_Razao_Social = Nome_Razao_Social
    
    }
    
    get NomeERazaoSocial (){
        return this._Nome_Razao_Social;
    }
    
    set CPFeCNPJ (CPF_CNPJ: string){
        this._CPF_CNPJ = CPF_CNPJ
    }
    
    get CPFeCNPJ (){
        return this._CPF_CNPJ;
    }
    
    set telefone (Telefone: string){
        this._Telefone = Telefone
    }
    
    get telefone (){
        return this._Telefone;
    }
    
    set endereco (Endereco: string){
        this._Endereco = Endereco
    }
    
    get endereco (){
        return this._Endereco;
    }
    
    }
    
    let fornecedor = new Fornecedor ()
    fornecedor.id = "12"
    fornecedor.NomeERazaoSocial = "Humberto LTDA"
    fornecedor.CPFeCNPJ = "11467645966"
    fornecedor.telefone = "48999587618"
    fornecedor.endereco = "Unibave"
    
    console.log (fornecedor)
    
    class Produto {
        private _ID_Produto: string
        private _Descricao: string
        protected _Fornecedor: Fornecedor
        private _ValorUnitario: number
    
        set id_produto (ID_Produto: string){
            this._ID_Produto = ID_Produto
        }
    
        get id_produto (){
            return this._ID_Produto;
        }
    
        set descricao (Descricao: string){
            this._Descricao = Descricao
        }
    
        get descricao (){
            return this._Descricao;
        }
    
        set fornecedor (Fornecedor: Fornecedor){
            this._Fornecedor = Fornecedor
        }
    
        get fornecedor (){
            return this._Fornecedor;
        }
    
        set ValorUnitario (valorunitario: number) {
            if (valorunitario <= 0) {
                console.log("Valor invalido")
                } else {
                this._ValorUnitario = valorunitario;
            }
    }
    
    valorDoProdutoEmEstoque(){
        console.log("O produto " + this._Descricao + ", tem o valor de R$"  + this._ValorUnitario + " no estoque")
    }
    
    }
    
    let produto = new Produto ()
        produto.id_produto = "326"
        produto.descricao = "Parafuso"
        produto.fornecedor = fornecedor
        produto.ValorUnitario = 5

        produto.valorDoProdutoEmEstoque();
    
        console.log (produto)
    
    class Estoque{
        private _ID_Estoque: string
        private _Produto: Produto
        private _Quantidade: number
    
        set IdEstoque (ID_Estoque: string){
            this._ID_Estoque = ID_Estoque
        }
    
        get IdEstoque (){
            return this._ID_Estoque;
        }
    
        set Produto (Produto: Produto){
            this. _Produto = Produto
        }
    
        get Produto (){
            return this. Produto;
        }
    
        set Quantidade (quantidade: number) {
            if (quantidade < 0) {
                console.log("Valor invalido")
                } else {
                this._Quantidade = quantidade;
            }
    }
    
    }
    
    let estoque = new Estoque ()
    estoque.IdEstoque = "2"
    estoque.Produto = produto
    estoque.Quantidade = 5
    
    console.log (estoque)
