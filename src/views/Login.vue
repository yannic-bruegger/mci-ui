<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md3>
            <v-form action="#" @submit.prevent="login" v-model="valid" id="login-form">
              <v-card elevation="3" loading>
                <v-progress-linear v-show="authenticationRunning" :indeterminate="authenticationRunning" color="primary"></v-progress-linear>
                <v-card-title primary-title>
                  <img src="@/assets/logo-th.png" style="width: 100px;">
                  <h1 class="ml-5 font-weight-light">{{title}}</h1>
                </v-card-title>
                <v-card-text>
                  <v-text-field v-model="username" label="GMID" required :disabled="authenticationRunning"></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    :disabled="authenticationRunning"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    @click:append="showPassword = !showPassword"
                    required>
                  </v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn form="login-form" type="submit" flat color="primary" :disabled="authenticationRunning">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar v-model="snackbar" :bottom="false" :left="false" :right="false" :top="true" :multi-line="false" :timeout="2000" :vertical="false">
      Unable to login!
      <v-btn color="primary" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    </v-content>
    <v-footer height="auto">
      <v-layout justify-center row wrap>
        <a class="text-sm-left ma-3 ml-4 grey--text text--darken-1">TH Köln</a>
        <a class="text-sm-left ma-3 grey--text text--darken-2">Campus GM</a>
        <a class="text-sm-left ma-3 grey--text text--darken-2">ADV-Labor</a>
        <a class="text-sm-left ma-3 grey--text text--darken-2">GMID Portal</a>
        <a class="text-sm-left ma-3 grey--text text--darken-2">Impressum</a>
        <v-spacer></v-spacer>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "login",
  components: {},
  data() {
    return {
      title: "MCI Prototype",
      snackbar: false,
      currentRoute: window.location.pathname,
      showPassword: false,
      authenticationRunning: false,
      username: "",
      password: "",
      valid: false
    };
  },
  methods:{
    login: function(){
      var context = this;
      this.authenticationRunning = true
      setTimeout(function(){
        context.$router.push('home')
      },1200);
    }
  }
};
</script>