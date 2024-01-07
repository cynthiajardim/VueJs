new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		corBackground: 'c1',
		largura: 'tamanhoM',
		classeUsuario: '',
		corQuadrado: 'c1',
		aplicarClasse: false,
		width: 0

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor  += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		}
	}
})
