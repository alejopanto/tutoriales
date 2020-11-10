<template>
    <div>
        <h1>Galeria de Fotos</h1>
        
        <router-link :to="{ name: 'fotos', params: {id: item}}" 
        v-for="(item, index) in fotosArreglo" :key="index">
            <button>Foto {{item}}</button>
        </router-link>

        <Foto />

        <button @click="anterior()">anterior</button>
        <button @click="home()">Home</button>
        <button @click="siguiente()">siguiente</button>
    </div>
</template>

<script>

    import Foto from "@/components/Fotografia.vue";

    export default {

        name: 'Fotos',
        
        components: {
            Foto
        },
        
        data() {
            return {
                fotosArreglo: [1, 2, 3]
            }
        },

        methods: {
            home(){
                this.$router.push('/')
            },
            anterior(){
                this.$router.go(-1)
            },
            siguiente(){
                this.$router.go(1)
            }
        },
    }
</script>