class Pessoa {
    
    private nome: string; //atributo com acesso privado
    protected idade: number; //atributo com acesso protegido
    public genero: string; //atributo com acesso público
    
    constructor(nome: string, idade: number, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
    
    get getNome (): string { //método com acesso privado
        return this.nome;
    }
    
    get getIdade (): number { //método com acesso protegido
        return this.idade;
    }
    
    get getGenero (): string { //método com acesso público
        return this.genero;
    }    
}
///public static main(): void {
   let pessoa = new Pessoa("Humberto", 21, "Macho");
    console.log(pessoa.getNome); //erro de compilação, pois o método getNome é privado
    console.log(pessoa.getIdade); //acesso permitido, pois o método getIdade é protegido
    console.log(pessoa.getGenero); //acesso permitido, pois o atributo genero é público


