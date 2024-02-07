<template>
    <div class="estrutura-contador">
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        methods:{
            adicionar(){
                return this.contador++
            },
            subtrair(){
                return this.contador--
            }
        }
    }
</script>

<!-- scoped significa que o style será aplicado somente no componente. 
    Antes, caso tivesse um outro botão dentro de app, fora do componente, 
    com a classse abaixo, o estilo tbm seria aplicado nele -->
<style scoped>
    .estrutura-contador span{
        border-bottom: 1px olid #CCC;
        height: 30px;
        padding: 5px 25px;
        font-size: x-large;
    }

    .estrutura-contador button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 1px;
        outline: none;
    }
</style>