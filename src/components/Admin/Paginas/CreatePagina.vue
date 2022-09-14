<template>
    <div>
        <v-container>
            <v-row justify="center" class="mt-10">
                <v-col cols="12">

                    <v-form class="mt-5 mb-16" @submit.prevent="createPagina" ref="form">
                        <v-row justify="start">
                            <v-col cols="7">
                                <h1 class="font-weigth-bold font-monserrat font-size-18 mb-6">GENERALES</h1>
                                <p class="font-weight-bold font-monserrat">Nombre de la página</p>
                                <v-text-field v-model="pagina.nombre" label="Nombre de la pagina" filled class="rounded-lg"
                                :rules="[rules.required]"></v-text-field>
                            </v-col>
                            <v-col cols="7">
                                <p class="font-weight-bold font-monserrat">Titulo de la página</p>
                                <v-text-field v-model="pagina.titulo" label="Titulo de la pagina" filled class="rounded-lg" :rules="[rules.required]"></v-text-field>
                                
                                <v-divider></v-divider>
                            </v-col>
                            <v-col cols="7">
                                <h1 class="font-weigth-bold font-monserrat font-size-18 mb-6">IMAGEN</h1>
                                <v-row class="my-0">
                                    <v-col>
                                        <p class="font-weight-bold font-monserrat">Main Logo</p>
                                    </v-col>
                                    <v-col>
                                        <VueFileAgent
                                            ref="logo"
                                            :theme="'list'"
                                            :multiple="false"
                                            :deletable="true"
                                            :meta="true"
                                            :accept="'image/*'"
                                            :maxSize="'10MB'"
                                            :maxFiles="1"
                                            :helpText="'Choose images or documents files'"
                                            :errorText="{
                                                type: 'Invalid file type. Only images or documents Allowed',
                                                size: 'Files should not exceed 10MB in size',
                                            }"
                                            @select="filesSelected($event)"
                                            @beforedelete="onBeforeDelete($event, 'logo')"
                                            @delete="fileDeleted($event)"
                                            v-model="fileRecordsLogo"
                                        ></VueFileAgent>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <p class="font-weight-bold font-monserrat">Fav Icon</p>
                                    </v-col>
                                    <v-col>
                                        <VueFileAgent
                                            ref="icon"
                                            :theme="'list'"
                                            :multiple="false"
                                            :deletable="true"
                                            :meta="true"
                                            :accept="'image/*,.ico'"
                                            :maxSize="'10MB'"
                                            :maxFiles="1"
                                            :helpText="'Choose images or documents files'"
                                            :errorText="{
                                                type: 'Invalid file type. Only images or documents Allowed',
                                                size: 'Files should not exceed 10MB in size',
                                            }"
                                            @select="filesSelected($event)"
                                            @beforedelete="onBeforeDelete($event, 'icon')"
                                            @delete="fileDeleted($event)"
                                            v-model="fileRecordsIcon"
                                        ></VueFileAgent>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <p class="font-weight-bold font-monserrat">Imagen de fondo</p>
                                    </v-col>
                                    <v-col>
                                        <VueFileAgent
                                            ref="fondo"
                                            :theme="'list'"
                                            :multiple="false"
                                            :deletable="true"
                                            :meta="true"
                                            :accept="'image/*'"
                                            :maxSize="'10MB'"
                                            :maxFiles="1"
                                            :helpText="'Choose images or documents files'"
                                            :errorText="{
                                                type: 'Invalid file type. Only images or documents Allowed',
                                                size: 'Files should not exceed 10MB in size',
                                            }"
                                            @select="filesSelected($event)"
                                            @beforedelete="onBeforeDelete($event,'fondo')"
                                            @delete="fileDeleted($event)"
                                            v-model="fileRecordsFondo"
                                        ></VueFileAgent>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <p class="font-weight-bold font-monserrat">Imagen complementaria</p>
                                    </v-col>
                                    <v-col>
                                        <VueFileAgent
                                            ref="complemento"
                                            :theme="'list'"
                                            :multiple="false"
                                            :deletable="true"
                                            :meta="true"
                                            :accept="'image/*'"
                                            :maxSize="'10MB'"
                                            :maxFiles="1"
                                            :helpText="'Choose images or documents files'"
                                            :errorText="{
                                                type: 'Invalid file type. Only images or documents Allowed',
                                                size: 'Files should not exceed 10MB in size',
                                            }"
                                            @select="filesSelected($event)"
                                            @beforedelete="onBeforeDelete($event,'complemento')"
                                            @delete="fileDeleted($event)"
                                            v-model="fileRecordsComplemento"
                                        ></VueFileAgent>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-divider></v-divider>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="7">
                                <h1 class="font-weigth-bold font-monserrat font-size-18 mb-6">COLORES</h1>
                                <v-row>
                                    <v-col cols="12" class="">
                                        <p class="font-weight-bold font-monserrat">Color Primario</p>
                                        <div class="d-flex align-center">
                                            <div class="text-left">
                                                <v-menu top :close-on-content-click="false">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn :color="pagina.colorPrimario" dark v-bind="attrs" v-on="on"> Color</v-btn>
                                                    </template>

                                                    <v-list>
                                                        <v-list-item>
                                                            <v-color-picker v-model="pagina.colorPrimario" dot-size="25" mode="hexa" swatches-max-height="200"></v-color-picker>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                            <div>
                                                <v-text-field v-model="pagina.colorPrimario" class="ml-6" filled :rules="[rules.required]"></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" class="">
                                        <p class="font-weight-bold font-monserrat">Color Secundario</p>
                                        <div class="d-flex align-center">
                                            <div class="text-left">
                                                <v-menu top :close-on-content-click="false">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn :color="pagina.colorSecundario" dark v-bind="attrs" v-on="on"> Color</v-btn>
                                                    </template>

                                                    <v-list>
                                                        <v-list-item>
                                                            <v-color-picker v-model="pagina.colorSecundario" dot-size="25" mode="hexa" swatches-max-height="200"></v-color-picker>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                            <div>
                                                <v-text-field v-model="pagina.colorSecundario" class="ml-6" filled :rules="[rules.required]"></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" class="">
                                        <p class="font-weight-bold font-monserrat">Color Complementario</p>
                                        <div class="d-flex align-center">
                                            <div class="text-left">
                                                <v-menu top :close-on-content-click="false">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn :color="pagina.colorComplementario" dark v-bind="attrs" v-on="on"> Color</v-btn>
                                                    </template>

                                                    <v-list>
                                                        <v-list-item>
                                                            <v-color-picker v-model="pagina.colorComplementario" dot-size="25" mode="hexa" swatches-max-height="200"></v-color-picker>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                            <div>
                                                <v-text-field v-model="pagina.colorComplementario" class="ml-6" filled :rules="[rules.required]"></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <!--<v-col cols="7">
                                <p class="font-weight-bold font-monserrat">Color Secundario</p>
                                <v-row>
                                    <v-col class="d-flex justify-center">
                                        <v-color-picker v-model="colorSecundario" dot-size="25" hide-mode-switch mode="hexa" swatches-max-height="200"></v-color-picker>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="7">
                                <p class="font-weight-bold font-monserrat">Color Complementario</p>
                                <v-row>
                                    <v-col class="d-flex justify-center">
                                        <v-color-picker v-model="colorComplementario" dot-size="25" hide-mode-switch mode="hexa" swatches-max-height="200"></v-color-picker>
                                    </v-col>
                                </v-row>
                                <v-divider></v-divider>
                            </v-col>-->
                            
                            <v-col cols="7">
                                <h1 class="font-weigth-bold font-monserrat font-size-18 mb-6">FORMULARIO</h1>
                                <p class="font-weight-bold font-monserrat">Define tu formulario</p>
                                <v-row>
                                    <v-col class="" cols="6">
                                        <v-select v-model="pagina.formulario" filled label="Seleccione un formulario" class="rounded-lg" :rules="[rules.required]"></v-select>
                                    </v-col>
                                    <v-col>
                                        <router-link to="/formularios/create" class="decoration-none">
                                            <v-btn class="white--text text-none" rounded color="#BAD543">Crear formulario</v-btn>
                                        </router-link>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="7">
                                <v-row>
                                    <v-col>
                                        <v-btn class="text-none" color="#F2F2F2">
                                            <span class="font-weight-bold font-monserrat">Cancelar</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col>
                                        <v-btn class="text-none" color="#F2F2F2">
                                            <span class="font-weight-bold font-monserrat">Vista previa</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col>
                                        <v-btn class="text-none" color="#F2F2F2">
                                            <span class="font-weight-bold font-monserrat">Guardar borrador</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col>
                                        <v-btn class="text-none" color="#BAD543" type="submit">
                                            <span class="font-weight-bold font-monserrat white--text">Crear página</span>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            type: 'hex',
            closeOnClick: true,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
            pagina: {
                nombre: '',
                titulo: '',
                imgLogo: '',
                favicon: '',
                imgFondo: '',
                imgComplementaria: '',
                colorPrimario: '',
                colorSecundario: '',
                colorComplementario: '',
                formulario: 0
            },
            fileRecordsLogo: [],
            fileRecordsIcon: [],
            fileRecordsFondo: [],
            fileRecordsComplemento: [],
            fileRecordsForUpload: [], // maintain an upload queue
        }
    },
    computed: {
        showColor () {
            if (typeof this.color === 'string') return this.color

            if(this.color ){
                return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
                    color[key] = Number(this.color[key].toFixed(2))
                    return color
                }, {}), null, 2)
            }
        },
    },
    methods: {
        createPagina(){
            if(this.$refs.form.validate()){
                //sendform
            }
        },
        //file agent 
        uploadFiles: function () {
            // Using the default uploader. You may use another uploader instead.
            this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
            this.fileRecordsForUpload = [];
        },
        deleteUploadedFile: function (fileRecord) {
            // Using the default uploader. You may use another uploader instead.
            this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
        },
        filesSelected: function (fileRecordsNewlySelected) {
            var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
            this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
        },
        onBeforeDelete: function (fileRecord, type) {
            var i = this.fileRecordsForUpload.indexOf(fileRecord);
            if (i !== -1) {
                // queued file, not yet uploaded. Just remove from the arrays
                this.fileRecordsForUpload.splice(i, 1);
                if(type==='complemento'){
                    var k = this.fileRecordsComplemento.indexOf(fileRecord);
                }
                if(type==='fondo'){
                    var k = this.fileRecordsFondo.indexOf(fileRecord);
                }
                if(type==='icon'){
                    var k = this.fileRecordsIcon.indexOf(fileRecord);
                }
                if(type==='logo'){
                    var k = this.fileRecordsLogo.indexOf(fileRecord);
                }
                if (k !== -1) {
                    if(type==='complemento'){
                        //var k = this.fileRecordsComplemento.indexOf(fileRecord);
                        this.fileRecordsComplemento.splice(k, 1);
                    }
                    if(type==='fondo'){
                        //var k = this.fileRecordsFondo.indexOf(fileRecord);
                        this.fileRecordsFondo.splice(k, 1);
                    }
                    if(type==='icon'){
                        //var k = this.fileRecordsIcon.indexOf(fileRecord);
                        this.fileRecordsIcon.splice(k, 1);
                    }
                    if(type==='logo'){
                        //var k = this.fileRecordsLogo.indexOf(fileRecord);
                        this.fileRecordsLogo.splice(k, 1);
                    }
                    //this.fileRecords.splice(k, 1);
                }
            } else {
                if (confirm('Are you sure you want to delete?')) {
                    this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
                }
            }
        },
        fileDeleted: function (fileRecord) {
            var i = this.fileRecordsForUpload.indexOf(fileRecord);
            if (i !== -1) {
                this.fileRecordsForUpload.splice(i, 1);
            } else {
                this.deleteUploadedFile(fileRecord);
            }
        },
    }

}
</script>

<style>

</style>