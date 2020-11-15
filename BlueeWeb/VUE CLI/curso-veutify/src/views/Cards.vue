<template>
    <v-container>
        <v-row>
            <v-col sm="6">
                <v-card>
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>

                    <v-card-title>
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                    </v-card-title>
                    
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit, laborum repudiandae sunt at nemo, et, commodi accusantium tempore quisquam repellat. Pariatur temporibus quam tenetur doloremque vero dolor deserunt praesentium.</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn depressed>Accion</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>
            <v-col sm="6">
                <v-card>
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        class="align-end"
                    >
                        <v-container>
                            <v-row> 
                                <v-col>
                                    <v-card-title class="white--text justify-center" style="border-style: solid">Mensaje de la imagen</v-card-title>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-img>

                    <v-card-title>
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                    </v-card-title>
                    
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit, laborum repudiandae sunt at nemo, et, commodi accusantium tempore quisquam repellat. Pariatur temporibus quam tenetur doloremque vero dolor deserunt praesentium.</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn depressed @click="dialog = true">Accion</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" persistent width="500">
            <v-card>
                <v-card-title>
                    <h1>Soy el titulo</h1>
                </v-card-title>
                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente doloremque ipsa sit sequi iste vel, accusantium cumque nostrum reprehenderit similique quas totam praesentium minus eligendi autem exercitationem corrupti! Exercitationem, consequatur.
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="dialog = false">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    },
}
</script>