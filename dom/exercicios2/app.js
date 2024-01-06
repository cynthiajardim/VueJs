new Vue({
    el: '#desafio',
    data: {
        texto: '',
        valor: ''
    },
    methods:{
        alertar: function(){
            alert("Alert criado!")
        },
        guardarValor: function(event){
            this.texto = event.target.value
        },
        guardarValorEnter: function(event){
            this.valor = event.target.value
        }
    }
})