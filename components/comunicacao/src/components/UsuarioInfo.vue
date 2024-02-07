<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{reverseName()}}</strong></p>
    </div>
</template>

<script>
//import barramento from '@/barramento'

export default {
    //props:['nome'],
    // props:{
    //     nome: [String, Array]
    // },
    props: {
        nome :{
            //validação de propriedades
            type: String,  
            required: true,
            //default: 'Anônimo'
            default: function () {
                return Array(10).fill(0).join(',')
            }
        },
        idade: Number
    },
    methods: {
        reverseName() {
            //acessa prop da mesma forma de um data 
            return this.nome.split('').reverse().join('')
        }
    },
    // created() {
    //     barramento.$on('idadeMudou', (idade) => {
    //         this.idade = idade
    //     })
    // }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style> 
