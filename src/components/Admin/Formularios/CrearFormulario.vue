<template>
    <div>
        <v-container>
            <v-form ref="form" @submit.prevent="createForm">
                <v-row justify="center" class="mt-10 mb-16">
                    <v-col cols="8">
                        <h1 class="text-uppercase font-weight-bold font-monserrat font-size-18">{{ this.$route.path.includes('edit') ? 'Editar Formulario' : 'Nuevo Formulario' }}</h1>
                        <v-row justify="start" class="mt-5">
                            <v-col cols="10">
                                <v-text-field v-model="formulario.titulo" filled class="rounded-lg" label="Título o texto descriptivo" :rules="[rules.required]"></v-text-field>
                            </v-col>
                            <v-col cols="10">
                                <v-textarea v-model="formulario.contenido" filled class="rounded-lg" label="Contenido" counter="250" :rules="[rules.required]"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="10" v-for="(item, index) in campos" :key="index" class="grey lighten-4 my-2 rounded-lg">
                                <v-row class="">
                                    <v-col cols="6">
                                        <v-text-field v-model="campos[index].nombre" label="Nombre del campo" :rules="[rules.required]"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-select v-model="campos[index].tipo" :items="itemsTipo" item-text="text" item-value="value" label="Seleccione Tipo de campo" :rules="[rules.required]"></v-select>
                                    </v-col>
                                    <v-col cols="6" class="d-flex justify-start">
                                        <div class="d-flex align-center">
                                            <p class="mx-5 mt-4">Requerido</p>
                                            <v-switch v-model="campos[index].requerido" inset></v-switch>
                                        </div>
                                    </v-col>
                                    <v-col cols="6" class="d-flex justify-start">
                                        <div class="d-flex align-center">
                                            <p class="mx-5 mt-4">Validación</p>
                                            <v-switch v-model="campos[index].validacion" inset></v-switch>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col v-if="campos.length > 0">
                                <v-btn class="rounded-lg outline-dashed" @click="RemoveCampo">
                                    <v-icon left>mdi-close-circle-outline</v-icon>
                                    Remover campo
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn class="rounded-lg outline-dashed" @click="AddCampos">
                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                    Agregar Campo
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-row class="mt-2">
                            <v-col>
                                <v-btn color="#F2F2F2" class="text-none">
                                    <span class="font-weight-bold font-monserrat">Cancelar</span>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn color="#BAD543" class="text-none" type="submit">
                                    <span class="font-weight-bold font-monserrat white--text">Guardar formulario</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {

    data() {
        return {
            campos: [],
            itemsTipo:[ 
                {text: 'Abierto', value: 'Abierto'},
                {text: 'Seleccion', value: 'Seleccion'},
                {text: 'Fecha', value: 'Fecha'}
            ],
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
            formulario: {
                titulo: '',
                contenido: '',
                campos: []
            }
        }
    },
    methods: {
        AddCampos(){
            this.campos.push({nombre: '', tipo: '', requerido: false, validacion: false})
        },
        RemoveCampo(){
            this.campos.pop()
        },
        createForm(){
            if(this.$refs.form.validate()){
                //send form
            }
        }
    }
}
</script>

<style scoped>
.outline-dashed{
    outline: dashed black 2px;
}
</style>