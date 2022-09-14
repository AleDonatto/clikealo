<template>
    <div>
        <v-container>
            
            <v-row justify="center" class="mt-10 mb-16">
                <v-col align="start">
                    <h1 class="font-weight-bold font-size-18 text-uppercase font-monserrat text-left">Codigos</h1>
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
                                <router-link :to="`/codigos/edit/${item.id}`" class="decoration-none">
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
                <v-col cols="12">
                    <router-link to="/codigos/create" class="decoration-none">
                        <v-btn class="rounded-lg text-none" color="#BAD543">
                            <span class="font-weight-bold white--text px-10">Subir códigos</span>
                        </v-btn>
                    </router-link> 
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
                { text: 'CODIGOS ACTULES', align: 'start', value: 'name',},
                { text: 'Landing', align: 'start', value: 'landing',},
                { text: 'Fecha', value: 'fecha', align: 'center' },
                { text: 'Correo de redencion', value: 'email', align: 'center' },
                { text: 'Estatus', value: 'estatus', align: 'center' },
                { text: 'Acciones', value: 'actions', sortable: false, align: 'center' },
            ],
            search: '',
            desserts: []
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
                    name: 'CDH2389',
                    landing: 'VIX',
                    fecha: '06/Sep/2022',
                    email: 'Activo',
                    estatus: 'Redimido'
                },
                {
                    id: 2,
                    name: 'HPV3355',
                    landing: 'VIX',
                    fecha: '06/Sep/2022',
                    email: 'Activo',
                    estatus: 'Redimido'
                },
                {
                    id: 3,
                    name: 'CDH2389',
                    landing: 'Directv',
                    fecha: '06/Sep/2022',
                    email: 'Activo',
                    estatus: 'Redimido'
                },
                {
                    id: 4,
                    name: 'HPV3355',
                    landing: 'Directv',
                    fecha: '06/Sep/2022',
                    email: 'Activo',
                    estatus: 'Redimido'
                },
                {
                    id: 5,
                    name: 'CDH2389',
                    landing: 'Directv',
                    fecha: '-',
                    email: '-',
                    estatus: 'Sin redimir'
                },
                {
                    id: 6,
                    name: 'HPV3355',
                    landing: 'CaracolTv',
                    fecha: '-',
                    email: '-',
                    estatus: 'Sin redimir'
                },
            ]
        }
    }
}
</script>

<style>

</style>