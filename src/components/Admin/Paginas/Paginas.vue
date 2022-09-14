<template>
    <div>
        <v-container>
            <h1 class="mt-10 font-monserrat font-weight-bold font-size-18 text-uppercase">Landings</h1>
            <v-row justify="center" class="mt-5">
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
                                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" class="decoration-none">
                                    <v-btn icon>
                                        <v-icon>mdi-eye-outline</v-icon>
                                    </v-btn>
                                </a>
                                <router-link :to="`/paginas/edit/${item.id}`" class="decoration-none">
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
            </v-row>
        </v-container>

        
        <v-fab-transition>
            <v-btn color="#D9D9D9" dark fixed bottom right fab @click="gotoCreatePagina">
                <v-icon color="black">mdi-tray-arrow-up</v-icon>
            </v-btn>
        </v-fab-transition>

        <v-dialog v-model="dialog" max-width="500px">                            
            <v-card>
                <v-card-title></v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.carbs" label="Carbs (g)" ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.protein" label="Protein (g)" ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Esta seguro que desea eliminar esta pagina?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">Eliminar</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dialogDelete: false,
            headers: [
                { text: 'Landing Actuales', align: 'start', value: 'name',},
                { text: 'Fecha de creacion', value: 'calories', align: 'center' },
                { text: 'Estatus ', value: 'fat', align: 'center'},
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
    computed: {
    },
    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    created() {
        this.initialize()
    },
    methods: {
        initialize () {
            this.desserts = [
                {
                    id: 1,
                    name: 'Directv',
                    calories: '30 Agosto 2022',
                    fat: 'Activo',
                },
                {
                    id: 1,
                    name: 'Vix',
                    calories: '30 Agosto 2022',
                    fat: 'Activo',
                },
            ]
        },

        editItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        save () {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
        gotoCreatePagina(){
            this.$router.push('/paginas/create')
        }
    }
}
</script>

<style scoped>
.size-width{
    width: 400px;
}
</style>