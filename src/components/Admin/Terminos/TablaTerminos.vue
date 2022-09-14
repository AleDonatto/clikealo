<template>
    <div>
        <v-container>
            <v-row justify="center" class="mt-10 mb-16">
                <v-col align="start">
                    <h1 class="text-uppercase font-weight-bold font-size-18 font-monserrat text-left">Terminos de Uso</h1>
                </v-col>
                
                <v-col cols="12">
                    <v-card>
                        <v-card-title>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
                            <template v-slot:item.name="{ item }">
                                <p class="size-width mt-2 font-weight-bold">{{item.name}}</p>
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <!--<v-btn icon>
                                    <v-icon>mdi-eye-outline</v-icon>
                                </v-btn>-->
                                <router-link :to="`/terminos/edit/${item.id}`" class="decoration-none">
                                    <v-btn icon>
                                        <v-icon>mdi-pencil-outline</v-icon>
                                    </v-btn>
                                </router-link>
                                <v-btn icon @click="deleteItem(item)">
                                    <v-icon>mdi-close-circle-outline</v-icon>
                                </v-btn>
                            </template>
                            <template v-slot:no-data>
                                <v-btn color="primary" @click="initialize">Reset</v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>

                <v-col cols="12" align="end">
                    <v-btn class="text-none" @click="gotoCreateTerms">Crear nuevos términos y condiciones</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            headers: [
                { text: 'Terminos de Uso', align: 'start', value: 'name',},
                { text: 'Fecha de creacion', value: 'calories', align: 'center' },
                { text: 'Estatus', value: 'estatus', align: 'center' },
                { text: 'Acciones', value: 'actions', sortable: false, align: 'center' },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            search: ''
        }
    },
    created(){
        this.initialize()
    },
    methods: {
        initialize () {
            this.desserts = [
                {
                    id: 1,
                    name: 'Formulario Vix',
                    calories: '30 Agosto 2022',
                    estatus: 'Activo'
                }
            ]
        },
        gotoCreateTerms(){
            this.$router.push('/terminos/create')
        }
    }

}
</script>

<style scoped>
.size-width{
    width: 400px;
}
</style>