export class Flebomista {
	nome: String;
	cpf: String;
	id?: String;

	validarFlebomista() {
		if (this.nome == "" || this.cpf == "") {
			return false
		}
		return true
	}
	toDocument(){
		return {
			nome: this.nome,
			cpf: this.cpf, 

		}
	}
} 