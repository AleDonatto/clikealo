<template>
    <div>
        <v-container>
            <v-row class="mt-10 mb-16">
                <v-col cols="12">
                    <h1 class="text-uppercase font-weight-bold font-size-18 font-monserrat">{{ this.$route.path.includes('edit') ? 'Editar Codigo': 'Crear Codigo'}}</h1>
                </v-col>
            </v-row>
            <v-form ref="form" @submit.prevent="createCode">
                <v-row>
                    <v-col cols="8">
                        <v-text-field v-model="codigo.code" class="rounded-lg" filled label="Codigo" type="text" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <v-select v-model="codigo.landing" :items="estatus" item-text="name" item-value="value" class="rounded-lg" filled label="Seleccione Landing" :rules="[rules.required]"></v-select>
                    </v-col>
                    <v-col cols="8">
                        <v-btn class="text-none rounded-lg px-10 mr-5">
                            <span class="font-weight-bold">Cancelar</span>
                        </v-btn>
                        <v-btn class="text-none rounded-lg px-10" color="#BAD543" type="submit">
                            <span class="font-weight-bold white--text">Crear Codigo</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            estatus: [
                {name: 'VIX', value: 'Vix'},
                {name: 'VIX+', value: 'Vix+'},
                {name: 'Directv', value: 'Directv'},
            ],
            rules: {
                required: (value) => !!value || 'This input is Required.',
                counter: (value) => value.length <= 20 || 'Max 20 characters',
                email: (value) => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
            codigo: {
                code: '',
                landing: ''
            }
        }
    },
    methods: {
        createCode(){
            if(this.$refs.form.validate()){
                //send
            }
        }
    }
}
</script>

<style>

</style>