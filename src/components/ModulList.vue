<template>
<div>
  <v-text-field v-model="term" solo label="Deine Module durchsuchen"></v-text-field>
  <browse-modules-modal :modules="modules"></browse-modules-modal>
  <a v-for="(mod, index) in modules" v-bind:key="index" v-on:click="openModule(mod.title, mod.prof)">
    <v-card class="mb-2">
      <v-card-text v-if="mod.subscribed && (mod.title.indexOf(term)!=-1 || mod.prof.indexOf(term)!=-1)" class="text-truncate">
        <v-layout>
          <span :title="mod.title" class="text-truncate">{{mod.title}}</span>
          <span><v-btn right fixed icon small class="mr-3" @click="mod.subscribed = false"><v-icon>close</v-icon></v-btn><br></span>
        </v-layout>
        <small class="mx-0">{{mod.prof}}</small>
      </v-card-text>
    </v-card>
  </a>
</div>
</template>

<script>
import BrowseModulesModal from '@/components/BrowseModulesModal.vue'
export default {
  components:{
    BrowseModulesModal
  },
  data(){
    return{
      term: "",
      modules: [
          {
            title: 'Datenbanken 1',
            prof: "Heide Faeskorn-Woyke",
            subscribed: true
          },
          {
            title: 'Mathematik 1',
            prof: "Wolfgang Konen",
            subscribed: true
          },
          {
            title: 'Einführung Betriebssysteme und Rechnerarchitektur',
            prof: "Stefan Karsch",
            subscribed: true
          },
          {
            title: 'Softwaretechnik I',
            prof: "Stefan Bente",
            subscribed: false
          },
          {
            title: 'Softwaretechnik II',
            prof: "Stefan Bente",
            subscribed: false
          },
          {
            title: 'Prozedurale generierung virtueller Welten',
            prof: "Dennis Buderus",
            subscribed: false
          },
        ]
    }
  },
  methods: {
    openModule: function(moduleName, prof){
      this.$router.push({ name: 'modul', query: { title: moduleName, prof: prof } })
    }
  }
};
</script>

<style>
</style>
