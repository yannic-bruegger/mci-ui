<template>
<div>
  <v-text-field v-model="term" solo label="Modul suchen"></v-text-field>
  <v-card @click="{}" v-for="(mod, index) in modules" v-bind:key="index" class="mb-2">
    <v-card-text v-if="mod.title.indexOf(term)!=-1 || mod.prof.indexOf(term)!=-1" class="text-truncate"><span :title="mod.title">{{mod.title}}</span><br><small class="mx-0">{{mod.prof}}</small></v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  data(){
    return{
      term: "",
      modules: [
          {
            title: 'Datenbanken 1',
            prof: "Heide Faeskorn-Woyke",
          },
          {
            title: 'Mathematik 1',
            prof: "Wolfgang Konen",
          },
          {
            title: 'Einführung Betriebssysteme und Rechnerarchitektur',
            prof: "Stefan Karsch",
          },
        ]
    }
  }
};
</script>

<style>
</style>
