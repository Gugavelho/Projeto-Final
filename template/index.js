let continuar = true
let dados = [{
	NomeTreinador: "JORGE",
	Pokemons: [{
		NumeroPokedex: "025",
		NomePokémon: "Pikachu",
		TiposPokemon: "elétrico"
}]
},{
	NomeTreinador: "PEDRO",
	Pokemons: [{
		NumeroPokedex: "430",
		NomePokémon: "Honchkrow",
		TiposPokemon: "sombrio e voador"
}]
},{
	NomeTreinador: "JOÃO",
	Pokemons:[{
		NumeroPokedex: "481",
		NomePokémon: "Mesprit",
		TiposPokemon:"psíquico"
}]
},{
	NomeTreinador: "JARDEL",
	Pokemons: [{
		NumeroPokedex: "094",
		NomePokémon: "Gengar",
		TiposPokemon:"fantasma e venenoso"
	},{
		NumeroPokedex: "143",
		NomePokémon: "Snorlax",
		TiposPokemon:"fantasma e venenoso"
}]
}]

//Função para cadastrar
function cadastrar() {
    console.log("Normal")

	//Pedindo ID do treinador
	let idTreinador = prompt("Digite o seu ID de treinador.").toUpperCase()

	//se o usuário digitar 0 a função tem que voltar para o "menu"
	if (idTreinador === "0") {
		return
	}

    //Pedindo N° da Pokedex do Pokémon do Usuário
    let numeroPokedex = prompt("Digite o número da pokédex que o Pokémon se encontra.").toUpperCase()
    
    //Pedindo o nome do Pokémon
    let nomePokémon = prompt("Digite o nome do pokémon.").toUpperCase()

    //Pedindo os tipos do Pokémon
    let tiposPokemon = prompt("Digite o tipo do pokémon.")

	//cria uma variavel com 3 objetos
	let novoPokemon = {
		NumeroPokedex: numeroPokedex,
		NomePokémon: nomePokémon,
		TiposPokemon: tiposPokemon
	}
	let cadastro = false

	//cria um laço de repetição que verifica se o idTreinador(inserido pelo usuário) já existe dentro do array dados
	for (let treinador of dados) {
		if (treinador.NomeTreinador === idTreinador) {
			treinador.Pokemons.push(novoPokemon)
			cadastro = true
			console.log(treinador)
		}
	}

	//se o idTreinador não estiver dentro de dados ele cria um novo objeto e o isnsere nele
	if (!cadastro) {
		let novoTreinador = {
			NomeTreinador: idTreinador,
			Pokemons: [ novoPokemon ]
		}

		dados.push(novoTreinador)
		console.log(dados[dados.length -1])

	}
}

// Função que verifica uma lista para ser percorrida e repete isso varias vezes ate ver todos os itens do array dados 
function listar() {
	let i = 0
	console.log("Listando dados")

	
	for(let treinador of dados){
		console.log(treinador.NomeTreinador)

		for(let pokémon of treinador.Pokemons) {
			console.log(pokémon)
		}
	}
}

// Função para buscar os dados do treinador (nome,número da pokedex,nome do pokémon e seu(s)tipos) e imprimilos no console
function buscar() {
	console.log("Buscando dados")
	let buscarTreinador = prompt("Digite o seu ID de treinador.").toUpperCase()
//se o usuário digitar 0 a função tem que voltar para o "menu"
	if (buscarTreinador === "0") {
		return
	}

	let dadoEncontrado = false

	for (let treinador of dados) {
		if (buscarTreinador === treinador.NomeTreinador) {
			dadoEncontrado = true
			for (let pokemon of treinador.Pokemons) {
				console.log(
					`${treinador.NomeTreinador} ${pokemon.NumeroPokedex} ${pokemon.NomePokémon} ${pokemon.TiposPokemon}`
				);
			}
		}
	}

	if (!dadoEncontrado) {
		console.log(`O ID de treinador ${buscarTreinador} não existe!`)
	}
}

// Função para sair do programa
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "CENTRO POKÉMON\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar pokémon\n"
		pergunta += "2. Listar usuários\n"
		pergunta += "3. Procurar dados do usuário\n"
		pergunta += "4. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
			sair()
			break
	}
}