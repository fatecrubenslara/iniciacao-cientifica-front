var express = require('express')
var app = express()
var router = express.Router()
const fetch = require('node-fetch')

app.use(express.static('public'))
app.use(express.static('pages'))

// app.get('/', function(req, res) {
//     res.sendfile('./public/index.html');
// });

// =================usuarios==========================
	app.get('/usuarios', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/usuarios'
		const url = 'http://localhost/iniciacao-cientifica-reboot/usuarios'
		fetch(url, {
		    method: 'GET',
		    headers: {'Content-Type':'application/json'},
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/usuarios/niveis', (req, res) => {
		const url = 'https://iniciacaoback.herokuapp.com/usuarios/niveis'
		fetch(url, {
		    method: 'GET',
		    headers: {'Content-Type':'application/json'},
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/usuarios/unico', (req, res) => {
		const url = 'https://iniciacaoback.herokuapp.com/usuarios/unico'
		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify({id: 60})
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/usuarios/cadastrar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/usuarios/cadastrar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/usuarios/cadastrar'
		const usuario = {
        nome: "Nome do Usuario",
        cpf: "11558187685",
        email: "email@email.com",
        titulacao: "Doutor",
        area: "3.00.00.00-9",
        linha: [3097],
        celular: "(12) 34567890",
        nivel: [1, 2],
        senha: "sssssssss",
        csenha: "sssssssss",
        lattes: "url do currículo lattes"
    }

		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify(usuario)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/usuarios/editar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/usuarios/editar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/usuarios/editar'
		const usuario = {
        nome: "Outro",
        cpf: "11558187685",
        email: "email@email.com",
        titulacao: "Doutor",
        area: "3.00.00.00-9",
        linha: [3097],
        celular: "(12) 34567890",
        nivel: [1, 2],
        senha: "sssssssss",
        csenha: "sssssssss",
        lattes: "url do currículo lattes",
				id_usuario: "183"
    }

		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify(usuario)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/usuarios/deletar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/usuarios/deletar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/usuarios/deletar'
		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify({id: 60})
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})


// =================projetos==========================
	app.get('/projetos', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos'
		fetch(url, {
				method: 'GET',
				headers: {'Content-Type':'application/json'},
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/unico', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/unico'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/unico'
		fetch(url, {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({id: 36})
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/cadastrar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/cadastrar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/cadastrar'
		const projeto = {
											titulo: "Lindo",
											url_repositorio: "http://localhost/iniciacao-cientifica-reboot/projetos",
											url_revista: "http://localhost/iniciacao-cientifica-reboot/projetos",
											data_atual: "2019-09-16",
											coorientador: "Fulano",
											is_bolsista: "0",
											instituicao_bolsa: "cnpq",
											id_orientador: "104",
											id_autor: "36",
											linha: "3096"
										}

		fetch(url, {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(projeto)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/editar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/editar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/editar'
		const projeto = {
											titulo: "Ótimo!!!",
											url_repositorio: "http://localhost/iniciacao-cientifica-reboot/projetos",
											url_revista: "http://localhost/iniciacao-cientifica-reboot/projetos",
											data_atual: "2019-09-16",
											coorientador: "Fulano",
											is_bolsista: "0",
											instituicao_bolsa: "cnpq",
											id_orientador: "104",
											id_autor: "36",
											linha: "3096",
											id_projeto: "26"
										}

		fetch(url, {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(projeto)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/deletar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/deletar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/deletar'
		fetch(url, {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({id: 28})
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/status', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/status'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/status'
		fetch(url, {
				method: 'GET',
				headers: {'Content-Type':'application/json'}
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/meus-projetos', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/meus-projetos'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/meus-projetos'
		fetch(url, {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({id: 104})
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/areas', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/areas'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/areas'
		fetch(url, {
				method: 'GET',
				headers: {'Content-Type':'application/json'}
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/linhas', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/linhas'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/linhas'
		fetch(url, {
				method: 'GET',
				headers: {'Content-Type':'application/json'}
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/avaliar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/avaliar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/avaliar'
		const dados = {
		    "ressalva": "ndjsnj dsds dsdsds dsds dsnjdsnj",
		    "data": "2019-09-18",
		    "id_avaliador": "75",
		    "id_projeto": "25",
		    "id_status": "2"
		}

		fetch(url, {
				method: 'GET',
				headers: {'Content-Type':'application/json'}
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/avaliadores', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/avaliadores'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/avaliadores'
		const dados = {
        ids_avaliador: [60, 75],
        id_projeto: "25"
    }

		fetch(url, {
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JOSON.stringify(dados)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/projetos/enviar-relatorio', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/projetos/enviar-relatorio'
		const url = 'http://localhost/iniciacao-cientifica-reboot/projetos/enviar-relatorio'
		const dados = {
        url: "http://localhost/iniciacao-cientifica-reboot/projetos/enviar-relatorio",
        data: "2019-09-25",
        categoria: "parcial",
        id_projeto: "25"
    }

		fetch(url, {
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(dados)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

// =================autores==========================
	app.get('/autores', (req, res) => {
		const url = 'https://iniciacaoback.herokuapp.com/autores'
		fetch(url, {
		    method: 'GET',
		    headers: {'Content-Type':'application/json'}
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/autores/cadastrar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/autores/cadastrar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/autores/cadastrar'
		const dados = {
        cpf: "11558187685",
        nome: "Nome do Autor",
        email: "email@email.com",
        curso: "Sistemas para Internet",
        lattes: "https://iniciacaoback.herokuapp.com/autores/cadastrar",
        id_orientador: "60"
    }
		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify(dados)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/autores/editar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/autores/editar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/autores/editar'
		const dados = {
        cpf: "11558187685",
        nome: "Ciclano",
        email: "ciclano@email.com",
        curso: "Sistemas para Internet",
        lattes: "https://iniciacaoback.herokuapp.com/autores/cadastrar",
        id_orientador: "60",
				id_autor: "45"
    }
		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify(dados)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/autores/deletar', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/autores/deletar'
		const url = 'http://localhost/iniciacao-cientifica-reboot/autores/deletar'
		const dados = {
				id: "45"
    }
		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify(dados)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})

	app.get('/autores/aluno', (req, res) => {
		// const url = 'https://iniciacaoback.herokuapp.com/autores/aluno'
		const url = 'http://localhost/iniciacao-cientifica-reboot/autores/aluno'
		const dados = {
				cpf: "11558187685"
    }
		fetch(url, {
		    method: 'POST',
		    headers: {'Content-Type':'application/json'},
				body: JSON.stringify(dados)
		})
		.then(async response => {
			const r = await response.json()
			res.send(r)
		})
	})


// =================calendario==========================
app.get('/calendario', (req, res) => {
	// const url = 'https://iniciacaoback.herokuapp.com/calendario'
	const url = 'http://localhost/iniciacao-cientifica-reboot/calendario'
	fetch(url, {
			method: 'GET',
			headers: {'Content-Type':'application/json'}
	})
	.then(async response => {
		const r = await response.json()
		res.send(r)
	})
})

app.get('/calendario/eventos', (req, res) => {
	// const url = 'https://iniciacaoback.herokuapp.com/calendario/eventos'
	const url = 'http://localhost/iniciacao-cientifica-reboot/calendario/eventos'
	fetch(url, {
			method: 'GET',
			headers: {'Content-Type':'application/json'}
	})
	.then(async response => {
		const r = await response.json()
		res.send(r)
	})
})

app.get('/calendario/novo-agendamento', (req, res) => {
	// const url = 'https://iniciacaoback.herokuapp.com/calendario/novo-agendamento'
	const url = 'http://localhost/iniciacao-cientifica-reboot/calendario/novo-agendamento'
	const dados = {
				data_inicio: "2019-09-20",
				data_final: "2019-10-20",
				id_evento: "3"
			}
	fetch(url, {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(dados)
	})
	.then(async response => {
		const r = await response.json()
		res.send(r)
	})
})


const PORT =  process.env.PORT || 8081
app.listen(PORT, () => {
  console.log('\n\n Server Running \n\n')
})
