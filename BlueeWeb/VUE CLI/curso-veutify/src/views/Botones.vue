<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-btn>Texto</v-btn>
                <v-btn class="primary">Texto</v-btn>
                <v-btn dark class="blue">Texto color</v-btn>
                <v-btn x-large>Largo</v-btn>
                <v-btn x-small>pequeño</v-btn>
                <v-btn disabled>disabled</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="primary" fab small>
                    <v-icon>mdi-android</v-icon>
                </v-btn>
                <v-btn color="primary" icon>
                    <v-icon>mdi-android</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn>Texto
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>
                <v-btn>Texto
                    <v-icon class="ml-3">mdi-format-list-bulleted-square</v-icon>
                </v-btn>
                <v-btn>Texto
                    <v-icon right>mdi-format-list-bulleted-square</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon left>mdi-format-list-bulleted-square</v-icon>
                    Texto
                </v-btn>
                <v-btn outlined color="success">
                    <v-icon left>mdi-format-list-bulleted-square</v-icon>
                    Texto
                </v-btn>
                 <v-btn outlined class="mt-3" block color="red">
                    <v-icon left>mdi-format-list-bulleted-square</v-icon>
                    Texto
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>