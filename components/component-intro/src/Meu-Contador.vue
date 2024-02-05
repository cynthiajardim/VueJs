<template>
    <div class="cont">
        <span>{{contadorResult}}</span>
        <button @click="adicionar">+</button>
        <button @click="substrair">-</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                contadorResult: 0
            }
        },
        methods:{
            adicionar(){
                this.contadorResult++
            },
            subtrair(){
                this.contadorResult--
            }
        }
    }
</script>

<style>
    .cont span{
        border-bottom: 1px olid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    .cont button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 1px;
        outline: none;
    }
</style>