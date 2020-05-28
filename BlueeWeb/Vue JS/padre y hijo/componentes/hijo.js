Vue.component('hijo', {
    template: /*html*/
    `
        <div class="py-5 bg-warning">
            <h4>Componente Hijo {{numero}}</h4>
            <h5>nombre: {{nombre}}</h5>
        </div>
    `,

    props:['numero'], 

    data() {
        return {
            nombre: 'fulano'
        }
    },

    mounted() {
        this.$emit('nombreHijo', this.nombre)
    },
    
})