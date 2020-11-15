<template>
    <v-main>
        <v-toolbar color="warning">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Vuetify</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="success">Ingreso</v-btn>
            <v-btn color="error">Salir</v-btn>
        </v-toolbar>
        <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
        >
            <v-row>
                <v-col>
                    <v-avatar class="mt-3">
                        <img src="https://randomuser.me/api/portraits/women/75.jpg" />
                    </v-avatar>
                </v-col>
                <v-col>
                    <p class="mt-3 headline">Junita Perez</p>
                </v-col>
            </v-row>
        </v-navigation-drawer>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
        }
    },
}
</script>