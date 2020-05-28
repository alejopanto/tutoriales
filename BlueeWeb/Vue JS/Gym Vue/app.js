const app = new Vue({
    el: '#app',

    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'))
        if(datosDB === null){
            this.tareas = [] 
        }else{
            this.tareas = datosDB
        }
    },

    data: {
        titulo: 'Gym with VUE',
        tareas: [],
        nuevaTarea: '',
    },

    methods: {

        localS: function(){
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },

        agregarTarea: function(){

            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            this.localS();
        },

        editarTarea: function(index){
            this.tareas[index].estado = true;
            this.localS();
        },

        eliminarTarea: function(index){
            console.log(index);
            this.tareas.splice(index, 1);
            this.localS();
        }
    },
    
})

