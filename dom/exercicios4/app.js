new Vue({
	el: '#desafio',
	data: {
		classe: 'destaque',
		classe01: 'seguro',
		classe02: 'medio',
		classe03: '',
		classe04: '',
		aplicarClasse: '',
		width: ''

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe = this.classe == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor  += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setAplicarClasse(e){
			if(e.target.value == 'true')
				this.aplicarClasse = true
			else if(e.target.value == 'false')
				this.aplicarClasse = false

			console.log(this.aplicarClasse);

			
		}
	}
})
