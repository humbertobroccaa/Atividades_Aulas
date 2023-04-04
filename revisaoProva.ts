class Pessoa {
    private _nome: string
    private _CPF: string
    private _RG: string
    private _Rua: string
    private _Bairro: string
    private _Telefone: string

    /*constructor(nome: string, cpf: string, rg: string, rua: string, bairro: string, telefone: string) {
        this._nome = nome;
        this._CPF = cpf;
        this._RG = rg;
        this._Rua = rua;
        this._Bairro = bairro;
        this._Telefone = telefone;
    }*/

    set Nome(nome: string) {
        this._nome = nome
    }

    get Nome() {
        return this._nome;
    }

    set CPF(cpf: string) {
        if (validarCPF(cpf) == null) {
            this._CPF = cpf
        } else {
            console.log("CPF Invalido")
        }
    }

    get CPF() {
        return this._CPF;
    }

    set RG(rg: string) {
        this._RG = rg
    }

    get RG() {
        return this._RG;
    }

    set Rua(rua: string) {
        this._Rua
    }

    get Rua () {
        return this._Rua
    }

    set Bairro (bairro: string){
        this._Bairro

    }
    
    get Bairro () {
        return this._Bairro
    }

    set Telefone(telefone: string) {
        if (telefone.length >= 11) {
            this._Telefone = telefone
        } else {
            console.log("Numero invalido")
        }
    }
}

function validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
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
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

let pessoa = new Pessoa ()
pessoa.Nome = "Humberto";
pessoa.CPF = "10309564999"
pessoa.RG = "5476282"
pessoa.Rua = "teste"
pessoa.Bairro = "teste2"
pessoa.Telefone = "48999587818"


console.log (pessoa)