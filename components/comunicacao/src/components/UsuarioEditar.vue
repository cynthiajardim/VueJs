<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário <strong>{{idade}}</strong></p>
        <!-- <button @click="alterAge">Alterar Idade</button> -->
    </div>
</template>

<script>
//import barramento from '@/barramento'

export default {
    props: {
        idade: {type: Number}
    },
    methods: {
        // alterAge(){
        //     this.idade = 33
        //     barramento.$emit('idadeMudou', 33)
        // }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
