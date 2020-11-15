<template>
  <v-container>
    <v-row>
      <v-col class="primary" sm="12">
        <h1>12</h1>
      </v-col>
      <v-col class="secondary" sm="6">
        <h1>6</h1>
      </v-col>
      <v-col class="error" sm="6">
        <h1>6</h1>
      </v-col>
    </v-row>

    <v-row class="mt-5 light-green lighten-3" justify-sm="center" style="height: 150px" align-content-sm="center">
      <v-col class="info" sm="3">
        <h1>centrado</h1>
      </v-col>
      <v-col class="info" sm="3">
        <h1>centrado</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1 class="display-1 text-uppercase">Lorem ipsum dolor</h1>
        <h1 class="display-2 primary pa-5 my-5">Lorem ipsum dolor</h1>
        <h1 class="display-3 text-center">Lorem ipsum dolor</h1>
        <h1 class="display-4">Lorem ipsum dolor</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
