<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" scrollable max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" block>Neues Modul hinzufügen</v-btn>
      </template>
      <v-card>
        <v-card-title>Select Module</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-text-field v-model="term" solo label="Modul suchen"></v-text-field>
          <v-card
            v-for="(mod, index) in unsubscribedModules"
            v-bind:key="index"
            @click.native="addModule(index)"
            class="mb-2 clickable"
          >
            <v-card-text
              v-if="mod.title.indexOf(term)!=-1 || mod.prof.indexOf(term)!=-1"
              class="text-truncate"
            >
              <span :title="mod.title">{{mod.title}}</span>
              <br>
              <small class="mx-0">{{mod.prof}}</small>
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogm1: "",
      dialog: false,
      term: "",
    }
  },
  props: {
    modules: Array
  },
  methods:{
    addModule: function(index){
      this.unsubscribedModules[index].subscribed = true
    }
  },
  created: function(){
    console.log(this.modules)
  },
  computed: {
    unsubscribedModules: function(){
      return this.modules.filter(function(module){return !module.subscribed})
    }
  }
};
</script>

<style>
.clickable{
  cursor: pointer;
}
</style>
