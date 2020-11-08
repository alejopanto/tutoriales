<template lang="pug">
  #app
    pm-header
    
    pm-notification(v-show="showNotification")
      p(slot="body") Superaste mas de 10 carateres

    pm-loader(v-show="isLoading")
    //- (v-show="!isLoading") en el section
    section.section
      nav.nav
        .container
          input.input.is-large(type="text", placeholder="Buscar Caciones (Alarma a los 10 caracteres)", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;

        .container
          p
            small {{searhMessage}}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(:class="{ 'is-active' : t.id == selectedTrack }", :track="t", @select="setSelectedTrack")

    pm-footer

</template>

<script>

import trackService from '@/services/track.js'

import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

const tracks = [
  {id: 1, name: "muchacha", artist: "paquito", img:"https://los40es00.epimg.net/los40/imagenes/2017/11/28/album/1511885438_220718_1512034270_portada_normal.jpg", duration: 228626},
  {id: 2, name: "despacito", artist: "julion", img:"https://los40.com/los40/imagenes/2017/11/28/album/1511885438_220718_1512040978_album_normal.jpg", duration: 124587},
  {id: 3, name: "gasolina", artist: "daddy", img:"https://los40.com/los40/imagenes/2016/10/20/album/1476974044_548008_1477034844_album_normal.jpg", duration: 968574},
]

export default {
  name: 'app',

  components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },

  computed: {
    searhMessage(){
      return `Total encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification(){
      if(this.showNotification){
        setTimeout( () => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {

    search(){

      if(!this.searchQuery) {return}
      this.isLoading = true

      this.showNotification = this.searchQuery.length > 10

      this.tracks = tracks

      // trackService.search(this.searchQuery)
      //   .then(res => {
      //     this.tracks = res.tracks.items
      //     this.isLoading = false
      //   })
    },

    setSelectedTrack(id){
      this.selectedTrack = id
    }

  },
  
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
