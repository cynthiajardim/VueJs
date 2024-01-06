const appDesafio = new Vue({
    el: '#desafio',
    data: {
        nome: 'Cynthia',
        idade: 21,
        link: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/kingdom-hearts-hd-15-remix/4/4e/Sora_KH15.jpg?width=1280'
    },
    methods: {
        idadeMultiplicada: function(){
            return this.idade * 3
        },

        randomNumber: function(){
            return Math.random()
        }
    }
})