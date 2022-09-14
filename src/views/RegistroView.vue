<template>
    <v-main class="bg-registro">
        <v-container>
            <v-row justify="center">
                <v-col cols="7" class="mt-10 mb-10">
                    <v-card elevation="2" class="rounded-xl">
                        <v-form>
                            <v-row justify="center">
                                <v-col cols="12">
                                    <v-img src="@/assets/Clikealo_Mesa.png" contain max-height="190"></v-img>
                                </v-col>
                                <v-col cols="10">
                                    <p class="font-monserrat font-szie-18 font-weight-bold ml-3">Nombre de Usuario</p>
                                    <v-text-field label="Nombre de usuario" rounded outlined filled type="text"
                                    :rules="[rules.required]"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <p class="font-monserrat font-szie-18 font-weight-bold ml-3">Email</p>
                                    <v-text-field label="example@example.com" rounded outlined filled type="email"
                                    :rules="[rules.required, rules.emailMatch]"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <p class="font-monserrat font-szie-18 font-weight-bold ml-3">Contraseña</p>
                                    <v-text-field label="Contraseña" rounded outlined filled
                                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"
                                    @click:append="show2 = !show2"
                                    :rules="[rules.required, rules.min]"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <p class="font-monserrat font-szie-18 font-weight-bold ml-3">Confirma tu contraseña</p>
                                    <v-text-field label="Confirma tu contraseña" rounded outlined filled 
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                                    @click:append="show1 = !show1"
                                    :rules="[rules.required, rules.min]"></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <v-btn rounded block class="font-monserrat font-weight-bold white--text py-7" color="#BAD543" type="submit">Registrarse</v-btn>
                                </v-col>
                                <v-col cols="10" class="mb-10">
                                    <router-link to="/login" class="decoration-none">
                                        <v-btn rounded block class="font-monserrat font-weight-bold white--text py-7" color="#000000">Login</v-btn>
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
    name: 'RegistroView',
    data(){
        return {
            show1: false,
            show2: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    }
}
</script>

<style scoped>
.bg-registro{
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