<template>
    <div class="container mt-5">
        <div class="row">
            <h3>Gestion de productos</h3>
            <button class="btn btn-warning" data-toggle="modal" data-target="#exampleModal" @click="crear()">Crear Producto</button>
            
            <!-- Modal -->
            <div class="modal hide" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Crear nuevo producto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form v-on:submit.prevent="submitCreate()">
                                <div class="form-row">
                                    <!-- <div class="col-md-3 mb-3">
                                        <label for="validationDefault01">ID</label>
                                        <input type="text" class="form-control" id="validationDefault01" value="" required v-model="formulario.id">
                                    </div> -->
                                    <div class="col-md-9 mb-3">
                                        <label for="validationDefault02">Nombre</label>
                                        <input type="text" class="form-control" id="validationDefault02" value="" required v-model="formulario.nombre">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <label for="validationDefault03">Codigo</label>
                                        <input type="text" class="form-control" id="validationDefault03" required v-model="formulario.codigo">
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationDefault04">Existencia</label>
                                        <input type="text" class="form-control" id="validationDefault04" required v-model="formulario.existencia">
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationDefault05">ID Bodega</label>
                                        <select class="custom-select" id="validationDefault05" required v-model="formulario.id_bodega">
                                            <option v-for="(bodega, index) in bodegas" :key="index" :value="bodega.id">{{bodega.nombre}}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationDefault06">Descripcion</label>
                                        <input type="text" class="form-control" id="validationDefault06" required v-model="formulario.descripcion">
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="validationDefault07">Estado</label>
                                        <select class="custom-select" id="validationDefault07" required v-model="formulario.estado">
                                            <option>Activo</option>
                                            <option>Inactivo</option>
                                            <option>Pendiente</option>
                                        </select>
                                    </div>
                                </div>
                                <button class="btn btn-primary" type="submit" v-if="!editando">Crear</button>
                                <button class="btn btn-warning" type="submit" v-if="editando" >Actualizar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div><!--  End Modal -->


            <!-- NAV -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light col-lg-12">
                <form class="form-inline my-2 my-lg-0">
                    <label for="">Nombre Producto</label>
                    <input class="form-control mr-sm-2" type="search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="form-check mr-3">
                                <input class="form-check-input" type="checkbox" value="all" id="defaultCheck1" v-model="chekedNames">
                                <label class="form-check-label" for="defaultCheck1">
                                    Mostrar Todos
                                </label>
                            </div>
                        </li>
                        <li class="nav-item mr-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="active" id="defaultCheck1" v-model="chekedNames">
                                <label class="form-check-label" for="defaultCheck1">
                                    Activos
                                </label>
                            </div>
                        </li>
                        <li class="nav-item mr-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="inactive" id="defaultCheck1" v-model="chekedNames">
                                <label class="form-check-label" for="defaultCheck1">
                                    Inactivos
                                </label>
                            </div>
                        </li>
                        <li class="nav-item mr-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="pending" id="defaultCheck1" v-model="chekedNames">
                                <label class="form-check-label" for="defaultCheck1">
                                    Pendientes
                                </label>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </nav><!-- End NAV -->

            <!-- Table -->
            <table class="table table-striped">
                <thead class="bg-primary">
                    <tr>
                    <th scope="col">Nombre Producto</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Existencia</th>
                    <th scope="col">Bodega</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto, index) in productosFiltrados" :key="index">
                        <td>{{producto.nombre}}</td>
                        <td>{{producto.codigo}}</td>
                        <td>{{producto.existencia}}</td>
                        <td>Jacob</td>
                        <td>{{producto.descripcion}}</td>
                        <td><a data-toggle="modal" data-target="#exampleModal" @click="edit(producto)"><span class="material-icons">edit</span></a></td>
                        <td class="bg-warning">{{producto.estado}}</td>
                    </tr>
                </tbody>
                <tfoot class="bg-primary">
                    <th>Productos Activos</th>
                    <th>Productos Pendientes</th>
                    <th>Productos Inactivos</th>
                </tfoot>
            </table><!-- End Table -->

            <!-- Footer -->
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="/img/logo.jpeg" class="card-img rounded-circle" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-success"><ins>Estadisticas Generales</ins></h5>
                            <p class="card-text">Productos en la bodega</p>
                            <p class="card-text">Productos en la bodega</p>
                            <p class="card-text">Productos en la bodega</p>
                        </div>
                    </div>
                </div>
            </div><!-- end footer -->

        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        mounted() {
            this.getProducts();
            

            this.getBodegas();
            this.chekedNames = ["all"]
        },

        watch: {
            chekedNames(checkedArray){
                console.log(checkedArray);
                let result = this.productos.filter(function(producto){
                    // console.log()
                    if(checkedArray.indexOf("all") >= 0){
                        return producto
                    }else if(checkedArray.indexOf("active") >= 0){
                        if(producto.estado == "activo"){
                            return producto
                        }
                    }else if(checkedArray.indexOf("inactive") >= 0){
                        if(producto.estado == "inactivo"){
                            return producto
                        }
                    }else if(checkedArray.indexOf("pending") >= 0){
                        if(producto.estado == "pendiente"){
                            return producto
                        }
                    }else{}
                });
                this.productosFiltrados = result
            }
        },

        data() {
            return {
                productosFiltrados: [],
                productos: [],
                bodegas: [],
                chekedNames: [],
                formulario: {
                    // id: '',
                    nombre: '',
                    codigo: '',
                    existencia: '',
                    id_bodega: '',
                    descripcion: '',
                    estado: ''
                },
                editando: false,
            }
        },

        methods: {
            getProducts: function(){
                var urlProducts = 'api/productos';

                axios.get(urlProducts).then(response => {
                    this.productos = response.data
                    this.productosFiltrados = this.productos
                    // Document.getElementById('exampleModal').classList.add('hide')
                    // console.log(this.productos)
                })
            },

            submitCreate: function(){
                var urlProducts = 'api/productos';
                if(this.editando){
                    axios.put(urlProducts, this.formulario).then(response => {
                    // console.log(response);
                        this.getProducts();                    
                    })
                }else{
                    axios.post(urlProducts, this.formulario).then(response => {
                    // console.log(response);
                        this.getProducts();
                        this.formulario = {
                            nombre: '',
                            codigo: '',
                            existencia: '',
                            id_bodega: '',
                            descripcion: '',
                            estado: ''
                        }
                    
                    })
                }
                
            },

            crear: function(){
                this.editando = false
            },

            edit: function(producto){
                this.formulario = producto
                this.editando = true
            },

            getBodegas: function(){
                var urlProducts = 'api/bodegas';

                axios.get(urlProducts).then(response => {
                    this.bodegas = response.data
                    // console.log(this.bodegas)
                })
            }
        },
    
    }

</script>
