<template>
  <v-app id="inspire">
    <v-navigation-drawer app clipped fixed v-if="currentRoute != '/login' && currentRoute != '/'">
      <v-container>
        <modul-list></modul-list>
      </v-container>
    </v-navigation-drawer>
    <v-navigation-drawer fixed right clipped app width="340" v-if="currentRoute != '/login' && currentRoute != '/'">
      <v-container>
        <v-card>
          <v-card-title>Kalender</v-card-title>
          <v-card-text>
            <calendar></calendar>
            <appointment-list :items="appointments"></appointment-list>
          </v-card-text>
        </v-card>
        <v-card class="mt-2">
        </v-card>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar fixed app clipped-right v-if="currentRoute != '/login' && currentRoute != '/'">
      <v-toolbar-title><v-breadcrumbs :items="items" divider=">"></v-breadcrumbs></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="logout">
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
      appointments: [
        { header: 'Anstehend' },
        {
          title: 'DB1: Meilenstein I',
          subtitle: "12.12.2019 &mdash; (0815)",
          pflicht: true
        },
        {
          title: 'AP1: Praktikumsabgabe',
          subtitle: "12.12.2019 &mdash; (0815)",
          pflicht: true
        },
        {
          title: 'MA1: Maple Schulung',
          subtitle: "12.12.2019 &mdash; (0815)"
        }
      ]
  }),
  created: function(){
    console.log(this.currentRoute)
  },
  methods: {
    logout: function(){
      this.$router.push('login')
    }
  },
  props: {
    source: String
  },
  computed: {
    currentRoute: function(){
      return this.$route.fullPath
    },
    items: function(){
      if(this.currentRoute.startsWith('/modul'))
      {
      return [
        {
          text: 'Studi-Planer',
          href: '#/home',
          disabled: false,
        },
        {
          text: this.$route.query.title,
          to: 'modul',
          disabled: false,
        },
      ]
      }
      else {
      return [
        {
          text: 'Studi-Planer',
          disabled: false,
        }
      ]
      }
    }
  }
};
</script>