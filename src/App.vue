<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped fixed>
      <v-container>
        <modul-list></modul-list>
      </v-container>
    </v-navigation-drawer>
    <v-navigation-drawer fixed right clipped app width="340">
      <v-container>
        <v-card>
          <v-card-title>Kalender</v-card-title>
          <v-card-text>
            <calendar></calendar>
            <appointment-list></appointment-list>
          </v-card-text>
        </v-card>
        <v-card class="mt-2">
        </v-card>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar fixed app clipped-right>
      <v-toolbar-title><v-breadcrumbs :items="items" divider=">"></v-breadcrumbs></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="primary">
        <v-icon class="mr-2">face</v-icon>
        <span>Max Mustermann</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-navigation-drawer v-model="right" right temporary fixed></v-navigation-drawer>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar.vue";
import AppointmentList from "./components/AppointmentList.vue";
import ModulList from "./components/ModulList.vue";
export default {
  components: {
    Calendar,
    AppointmentList,
    ModulList
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    items: [
        {
          text: 'Studi-Planer',
          disabled: false,
        },
        {
          text: 'AP1',
          disabled: false,
        },
      ]
  }),
  props: {
    source: String
  }
};
</script>