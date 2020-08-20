<template lang="pug">
  #app
    pm-header
    
    section.section
      nav.nav.has-shadow  
        .container
          input.input.is-large(type="text", placeholder="Buscar Caciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{searhMessage}}

      .container
        .columns
          .column(v-for="t in tracks") {{t.name}} {{t.artist}}

    pm-footer

</template>

<script>

import trackService from './services/track.js'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

const tracks = [
  {name: "muchacha", artist: "paquito"},
  {name: "despacito", artist: "julion"},
  {name: "gasolina", artist: "daddy"},
]

export default {
  name: 'app',

  components: { PmFooter, PmHeader },

  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searhMessage(){
      return `Total encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search(){
      if(!this.searchQuery) {return}

      this.tracks = tracks


      // trackService.search(this.searchQuery)
      //   .then(res => {
      //     this.tracks = res.tracks.items
      //   })
    },
  },
  
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }
</style>
