<template>
  <v-app>
    <!--&& currentUser-->
    <v-app-bar app height="135" dark v-if="(this.$route.path !== '/login' || this.$route.path !== '/registro') && currentUser ">
      <v-row justify="center" class="size-width">
        <v-col cols="10" align-self="center" class="mt-0 green-color size-width">
          <div class="d-flex align-center">
            <!--<v-img src="@/assets/logoclikealo-appbar.png" contain max-height="40" class="shrink mr-2"></v-img>-->
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo-appbar.png"
              transition="scale-transition"
              height="40"
              width="120"
            />

            <!--<v-img
              alt="Vuetify Name"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="100"
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
              width="100"
            />-->
          </div>
        </v-col>
        <v-col cols="2" align="end" class="mt-0 py-2 green-color">
          <!--<v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>-->
          <v-list-item>
            <v-menu bottom min-width="200px" rounded offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon small v-on="on">
                  <v-avatar color="black" size="40">
                    <span class="white--text text-h5">{{ currentUser.name.slice(0,2) }}</span>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <!--<v-avatar color="brown">
                      <span class="white--text text-h5">{{ currentUser.name }}</span>
                    </v-avatar>
                    <h3>{{ currentUser.name }}</h3>
                    <p class="text-caption mt-1">
                      {{ currentUser.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text>Edit Account</v-btn>
                    <v-divider class="my-3"></v-divider>-->
                    <v-btn depressed rounded text @click="Logout">Cerrar Sesion</v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
          </v-list-item>
        </v-col>

        <v-col cols="11" class="">
          <v-tabs ref="tab" dark>
            <v-tabs-slider color></v-tabs-slider>
            <v-tab class="" to="/paginas" active-class="green-text">Paginas</v-tab>
            <v-tab class="" to="/formularios" active-class="">Formularios</v-tab>
            <v-tab class="" to="/terminos-uso" active-class="">Terminos de Uso</v-tab>
            <v-tab class="" to="/codigos" active-class="">Codigos</v-tab>
            <v-tab class="" to="/reportes" active-class="">Reporte</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    ...mapActions(['Logout'])
  }

};
</script>
<style scoped>
.size-width{
  width: 100%;
}
</style>

