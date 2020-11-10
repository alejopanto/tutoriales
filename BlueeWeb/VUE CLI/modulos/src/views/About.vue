<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item, index) in tareasState" :key="index">{{item}}</h2>
    <h3>{{titulo}}</h3>
    <hr>
    <h1>{{contador}}</h1>
    <button @click="aumentarContador(2)">+</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  computed: {
    ...mapState('tareas', ['tareasState']),
    ...mapState(['titulo']),
    ...mapState('contador', ['contador'])
  },
  methods: {
    ...mapMutations('contador', ['aumentarContador'])
  },
}

</script>
