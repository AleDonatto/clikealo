<template>
    <div >
        <v-container>
            <h1 class="font-monserrat font-size-18 font-weight-bold mt-10 text-uppercase">Formularios</h1>
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
                                <!--<v-btn icon>
                                    <v-icon>mdi-eye-outline</v-icon>
                                </v-btn>-->
                                <router-link :to="`/formularios/edit/${item.id}`" class="decoration-none">
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
            <v-row>
                <v-col>
                    <v-btn class="text-none" color="#BAD543" @click="gotoCrearForms">
                        <span class="white--text font-monserrat font-weight-bold">Crear nuevo formulario</span>
                    </v-btn>
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
                { text: 'Landing Actuales', align: 'start', value: 'name',},
                { text: 'Fecha de creacion', value: 'calories', align: 'center' },
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
                    name: 'Formulario Vix',
                    calories: '30 Agosto 2022',
                }
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
        gotoCrearForms(){
            this.$router.push('/formularios/create')
        }
    }
}
</script>

<style scoped>
.size-width{
    width: 400px;
}
</style>