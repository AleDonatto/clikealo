<template>
    <v-main class="bg-login">
        <v-container>
            <v-row justify="center">
                <v-col cols="7" class="mt-16">
                    <v-card elevation="2" class="rounded-xl">
                        <v-form @submit.prevent="loginUser" ref="form">
                            <v-row justify="center">
                                <v-col cols="12">
                                    <v-img src="@/assets/Clikealo_Mesa.png" contain max-height="210"></v-img>
                                </v-col>
                                <v-col cols="10">
                                    <p class="font-monserrat font-szie-18 font-weight-bold ml-3">Usuario</p>
                                    <v-text-field v-model="loginForm.username" label="Nombre de usuario o correo electrónico" rounded outlined filled type="text"
                                    :rules="[rules.required]"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <p class="font-monserrat font-szie-18 font-weight-bold ml-3">Contraseña</p>
                                    <v-text-field v-model="loginForm.password" label="Contraseña" rounded outlined filled
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                                    :rules="[rules.required, rules.min]"
                                    @click:append="show1 = !show1"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <v-btn rounded block class="font-monserrat font-weight-bold white--text py-7" color="#BAD543" type="submit">Login</v-btn>
                                </v-col>
                                <v-col cols="10" align="end">
                                    <router-link to="" class="green-text" >
                                        <span class="green-text font-weight-bold font-size-18 font-monserrat">No recuerdo mi contraseña</span>
                                    </router-link>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    name: 'LoginView',
    data(){
        return {
            show1: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
            loginForm: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        loginUser(){
            //console.log(this.$refs.form.validate())
            if(this.$refs.form.validate()){
                this.$store.dispatch('loginUser', this.loginForm)
            }
        }
    }

}
</script>

<style scoped>
.bg-login{
    background-image: url('../assets/login/bg-login.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
}

.gray-color{
    background-color: #D9D9D9;
}
</style>