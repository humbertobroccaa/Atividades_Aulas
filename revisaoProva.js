var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Object.defineProperty(Pessoa.prototype, "Nome", {
        get: function () {
            return this._nome;
        },
        /*constructor(nome: string, cpf: string, rg: string, rua: string, bairro: string, telefone: string) {
            this._nome = nome;
            this._CPF = cpf;
            this._RG = rg;
            this._Rua = rua;
            this._Bairro = bairro;
            this._Telefone = telefone;
        }*/
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "CPF", {
        get: function () {
            return this._CPF;
        },
        set: function (cpf) {
            if (validarCPF(cpf) == null) {
                this._CPF = cpf;
            }
            else {
                console.log("CPF Invalido");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "RG", {
        get: function () {
            return this._RG;
        },
        set: function (rg) {
            this._RG = rg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "Rua", {
        get: function () {
            return this._Rua;
        },
        set: function (rua) {
            this._Rua;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "Bairro", {
        get: function () {
            return this._Bairro;
        },
        set: function (bairro) {
            this._Bairro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "Telefone", {
        set: function (telefone) {
            if (telefone.length >= 11) {
                this._Telefone = telefone;
            }
            else {
                console.log("Numero invalido");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '')
        return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito
    var add = 0;
    for (var i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito
    add = 0;
    for (var i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}
var pessoa = new Pessoa();
pessoa.Nome = "Humberto";
pessoa.CPF = "10309564999";
pessoa.RG = "5476282";
pessoa.Rua = "teste";
pessoa.Bairro = "teste2";
pessoa.Telefone = "48999587818";
console.log(pessoa);
