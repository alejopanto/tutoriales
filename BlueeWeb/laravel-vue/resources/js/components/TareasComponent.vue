<template>
    <div>
        <form @submit.prevent="editarNota(nota)" v-if="this.editarActivo">
            <h3>Editar Tarea</h3>
            <input type="text" class="form-control mb-2" placeholder="Nombre" v-model="nota.nombre">
            <input type="text" class="form-control mb-2" placeholder="Descripcion" v-model="nota.descripcion">
            <button class="btn btn-success" type="subtmit">Guardar</button>    
            <button class="btn btn-danger" type="subtmit" @click="cancelarEdicion()">Cancelar</button>
        </form>    

        <form @submit.prevent="agregar" v-else>
            <h3>Agregar Tareas</h3>
            <input type="text" class="form-control mb-2" placeholder="Nombre" v-model="nota.nombre">
            <input type="text" class="form-control mb-2" placeholder="Descripcion" v-model="nota.descripcion">
            <button class="btn btn-primary" type="subtmit">Crear</button>    
        </form>

        <hr>
        <h3 class="mt-4">Lista de Notas</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="(nota, index) in notas" :key="index">
                <span class="badge badge-primary float-right">{{nota.updated_at}}</span>
                <p>{{nota.nombre}}</p>
                <p>{{nota.descripcion}}</p>
                <button class="btn btn-danger btn-sm" @click="eliminarNota(nota, index)">Eliminar</button>
                <button class="btn btn-warning btn-sm" @click="editarFormulario(nota)">Actualizar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notas: [],
            nota: { nombre: '', descripcion: ''},
            editarActivo: false
        }
    },

    created(){
        axios.get('/notas')
            .then(res => {
                this.notas = res.data
            })
    },

    methods: {
        agregar(){
            if(this.nota.nombre.trim() === '' || this.nota.descripcion.trim() === ''){
                alert('Debes completar todos los campos antes de guardar');
                return;
            }

            const params = {
                nombre: this.nota.nombre,
                descripcion: this.nota.descripcion
            }

            this.nota.nombre = '';
            this.nota.descripcion = '';

            axios.post('/notas', params)
                .then(res => {
                    this.notas.push(res.data)
                })
        },

        editarFormulario(nota){
            this.editarActivo = true
            this.nota.nombre = nota.nombre;
            this.nota.descripcion = nota.descripcion;
            this.nota.id = nota.id;
        },

        editarNota(nota){
            const params = {
                nombre: nota.nombre,
                descripcion: nota.descripcion
            };

            axios.put(`/notas/${nota.id}`, params)
                .then(res => {

                    this.editarActivo = false;

                    const index = this.notas.findIndex(
                        notaBuscar => notaBuscar.id === res.data.id
                    )
                    this.notas[index] = res.data;

                    this.nota.nombre = '';
                    this.nota.descripcion = '';

                    axios.get('/notas')
                        .then(res => {
                            this.notas = res.data
                        })
                })
        },
        
        cancelarEdicion(){
            this.editarActivo = false;

            this.nota.nombre = '';
            this.nota.descripcion = '';
        },

        eliminarNota(nota, index){
            axios.delete(`/notas/${nota.id}`)
                .then(() => {
                    this.notas.splice(index, 1);
                })
        }
    },
}
</script>