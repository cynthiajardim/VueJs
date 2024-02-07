<template>
    <div class="contadores">
        <meuContador v-for="k in 5" :key="k"></meuContador>
    </div>
</template>

<script>
    import Contador from './ContadorComponent.vue'
    export default {
        components:{
            meuContador: Contador
        }
    }
</script>

<style>
</style>