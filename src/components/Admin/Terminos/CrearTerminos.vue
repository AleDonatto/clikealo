<template>
    <div>
        <v-container>
            <v-row class="mt-10">
                <v-col cols="6" align-self="center">
                    <h1 class="font-monserrat font-size-18 text-uppercase">{{ this.$route.path.includes('edit') ? 'Editar Terminos de Uso' : 'Terminos de Uso' }}</h1>
                </v-col>
                <v-col cols="6" align-self="center" align="end">
                    <!--Fecha de creacion del termino -->
                    <p class="font-weight-bold font-monserrat font-size-18">{{date.toLocaleDateString('es-MX',opciones)}}</p>
                </v-col>
            </v-row>
            
            <v-form ref="form" @submit.prevent="createTerminos">
                <v-row justify="center">
                    <v-col cols="12">
                        <v-textarea v-model="terminos" name="termino" filled label="Escribe tu texto aquí" rows="10" :rules="[rules.required]"></v-textarea>
                    </v-col>
                </v-row>
                <v-row justify="end">
                    <v-col cols="12" align="end">
                        <v-btn class="rounded-lg text-none mx-5 px-16"><span class="font-weight-bold">Cancelar</span></v-btn>
                        <v-btn class="rounded-lg text-none px-16 white--text" color="#BAD543" type="submit"><span class="font-weight-bold">Guardar</span></v-btn>
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
            date: new Date(),
            opciones: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
            terminos: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
    methods: {
        createTerminos(){
            if(this.$refs.form.validate()){
                //send
            }
        }
    }
}
</script>

<style>

</style>