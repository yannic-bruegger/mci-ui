<template>
<div>
  <v-text-field v-model="term" solo label="Modul suchen"></v-text-field>
  <browse-modules-modal :modules="modules"></browse-modules-modal>
  <a v-on:click="openModule">
  <v-card @click.native="openModule" v-for="(mod, index) in modules" v-bind:key="index" class="mb-2">
    <v-card-text v-if="mod.subscribed && (mod.title.indexOf(term)!=-1 || mod.prof.indexOf(term)!=-1)" class="text-truncate"><span :title="mod.title">{{mod.title}}</span><br><small class="mx-0">{{mod.prof}}</small></v-card-text>
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
    openModule: function(){
      this.$router.push('modul')
    }
  }
};
</script>

<style>
</style>
