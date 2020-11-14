<template>
  <div>
    <v-row>
      <v-col sm="12">
        <v-card>
          <v-date-picker 
            v-model="fecha"
            full-width
            locale="es-cl"
            :min="minimo"
            :max="maximo"
            @change="getDolar(fecha)"
            >
          </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            {{valor}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>

  import axios from 'axios'
  import {mapMutations} from 'vuex'

  export default {
    name: 'Home',
    
    data () {
      return {
        fecha: new Date().toISOString().substr(0, 10),
        minimo: '1984',
        maximo: new Date().toISOString().substr(0, 10),
        valor: null
      }
    },

    created() {
      this.getDolar(this.fecha)
    },

    methods: {

      ...mapMutations(['mostrarLoading', 'ocultarLoading']),

      async getDolar(dia){

        let fecha = dia.split(['-'])
        let ddmmyy = dia.split('-').reverse().join('-')
        
        try {
          
          this.mostrarLoading({titulo:'Accediendo a la informacion', color:'secondary'})

          let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)

          if (datos.data.serie.length >= 1) {
            this.valor = await datos.data.serie[0].valor
          } else {
            this.valor = 'Sin Resultados'
          } 

        } catch (error) {
          // console.log(error)
        } finally {
          this.ocultarLoading() 
        }

      }
    },

  }
</script>
