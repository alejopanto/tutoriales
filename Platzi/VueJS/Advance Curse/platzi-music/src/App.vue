<template lang="pug">
  #app
    input(v-model="name")
    button(v-on:click="format") format
    p {{formatName}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      formatName: ''
    }
  },
  methods: {
    format(){
      this.formatName = this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }
  },
  
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
