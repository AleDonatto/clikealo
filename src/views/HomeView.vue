<template>
  <v-main class="bg-home">
    <v-container>
      <v-row justify="center" class="mt-16">
        <v-col cols="7" class="mt-16">
          <v-card elevation="2" class="rounded-xl">
            <v-row justify="center">
              <v-col cols="10" class="mt-10">
                <v-img src="@/assets/Clikealo_Mesa.png" contain max-height="210"></v-img>
              </v-col>
              <v-col cols="8" class="mt-10">
                <router-link to="/login" class="decoration-none">
                  <v-btn class="text-none py-6" rounded block color="#BAD543">
                    <span class="white--text font-weight-bold font-monserrat ">Login</span>
                  </v-btn>
                </router-link>
              </v-col>
              <v-col cols="8" class="mb-10">
                <router-link to="/registro" class="decoration-none">
                  <v-btn class="text-none py-6" rounded block color="#000000">
                    <span class="white--text font-weight-bold font-monserrat ">Registrarse</span>
                  </v-btn>
                </router-link>
              </v-col>
              <v-col cols="8"></v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
    },
  }
</script>
<style scoped>
.bg-home{
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
