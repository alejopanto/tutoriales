<template>
    <div>
        <form>
            <b-row class="mt-5">
                <b-col cols="3">
                    <b-form-input v-model="textoI" :state="confirm"></b-form-input>
                    <small>only 3 caracteres</small>
                    <p>Texto: {{textoI}}</p>
                </b-col>
                <b-col md ="3">
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                    <p>Seleccion: {{select}}</p>
                </b-col>
                <b-col md ="3">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <p>Seleccion: {{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" 
                    :options="animalesRadio"></b-form-checkbox-group>
                    <p>Multipe: {{check}}</p>
                </b-col>
            </b-row>
        </form>

    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            textoI: '',
            select: null,
            animales: [
                {value: null, text: 'Seleccione un animal'},
                {value: 'Perro', text: 'Guau Guau'},
                {value: 'Gato', text: 'Miau'},
                {value: 'Pato', text: 'cuack'}
            ],

            radio: null,
            animalesRadio: [
                {value: 'Perro', text: 'Guau Guau'},
                {value: 'Gato', text: 'Miau'},
                {value: 'Pato', text: 'cuack'}
            ],

            check: []
        }
    },
    computed: {
        confirm(){
            return this.textoI.length > 2 ? true : false
        }
    },
}
</script>