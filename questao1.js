var Fornecedor = /** @class */ (function () {
    function Fornecedor() {
    }
    Object.defineProperty(Fornecedor.prototype, "id", {
        get: function () {
            return this._ID;
        },
        set: function (ID) {
            this._ID = ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "NomeERazaoSocial", {
        get: function () {
            return this._Nome_Razao_Social;
        },
        set: function (Nome_Razao_Social) {
            this._Nome_Razao_Social = Nome_Razao_Social;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "CPFeCNPJ", {
        get: function () {
            return this._CPF_CNPJ;
        },
        set: function (CPF_CNPJ) {
            this._CPF_CNPJ = CPF_CNPJ;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "telefone", {
        get: function () {
            return this._Telefone;
        },
        set: function (Telefone) {
            this._Telefone = Telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "endereco", {
        get: function () {
            return this._Endereco;
        },
        set: function (Endereco) {
            this._Endereco = Endereco;
        },
        enumerable: false,
        configurable: true
    });
    return Fornecedor;
}());
var fornecedor = new Fornecedor();
fornecedor.id = "12";
fornecedor.NomeERazaoSocial = "Humberto LTDA";
fornecedor.CPFeCNPJ = "11467645966";
fornecedor.telefone = "48999587618";
fornecedor.endereco = "Unibave";
console.log(fornecedor);
var Produto = /** @class */ (function () {
    function Produto() {
    }
    Object.defineProperty(Produto.prototype, "id_produto", {
        get: function () {
            return this._ID_Produto;
        },
        set: function (ID_Produto) {
            this._ID_Produto = ID_Produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this._Descricao;
        },
        set: function (Descricao) {
            this._Descricao = Descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "fornecedor", {
        get: function () {
            return this._Fornecedor;
        },
        set: function (Fornecedor) {
            this._Fornecedor = Fornecedor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "ValorUnitario", {
        set: function (valorunitario) {
            if (valorunitario.length <= 0) {
                console.log("Valor invalido");
            }
            else {
                this._ValorUnitario = valorunitario;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var produto = new Produto();
produto.id_produto = "326";
produto.descricao = "Parafuso";
produto.fornecedor = fornecedor;
produto.ValorUnitario = "";
console.log(produto);
var Estoque = /** @class */ (function () {
    function Estoque() {
    }
    Object.defineProperty(Estoque.prototype, "IdEstoque", {
        get: function () {
            return this._ID_Estoque;
        },
        set: function (ID_Estoque) {
            this._ID_Estoque = ID_Estoque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estoque.prototype, "Produto", {
        get: function () {
            return this.Produto;
        },
        set: function (Produto) {
            this._Produto = Produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estoque.prototype, "Quantidade", {
        set: function (quantidade) {
            if (quantidade.length < 0) {
                console.log("Valor invalido");
            }
            else {
                this._Quantidade = quantidade;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Estoque;
}());
var estoque = new Estoque();
estoque.IdEstoque = "2";
estoque.Produto = produto;
estoque.Quantidade = "5";
console.log(estoque);
