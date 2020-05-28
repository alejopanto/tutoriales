const app = new Vue({
    el: '#app',
    
    data:{
        saludo: 'Hola mundo desde VUEJS',

        frutas: [
            {nombre: 'manzana', cantidad: 50},
            {nombre: 'pera', cantidad: 30},
            {nombre: 'maracuya', cantidad: 0}
        ],

        nuevaFruta: '',
        total: 0,
    },

    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, 
            });

            this.nuevaFruta = '';
        },
        
    },

    computed: {
        sumarTotal(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            };
            return this.total;
        }
    },
})