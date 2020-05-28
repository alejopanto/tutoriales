const app = new Vue({

    el: '#app',

    data:{
        saludo: 'saludando'
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')   
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeDestroy() {
        console.log('beforeDestry')
    },
    destroyed() {
        console.log('destroyed')
    },

    methods: {
        destruir(){
            this.$destroy()
        }
    },
})