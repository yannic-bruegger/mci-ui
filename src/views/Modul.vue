<template>
  <v-container>
    <h1>{{moduleName}}</h1>
    <h4>{{prof}}</h4>
    <h2>Informationen</h2>
    <p></p>

    <h2>News zum Modul</h2>
    <p></p>

    <h2>Praktikum</h2>
    <p></p>

    <h2>Prüfung</h2>
    <p></p>

    <h2>Dateien</h2>
    <p></p>
  </v-container>
</template>

<script>
import GradeList from "../components/GradeList.vue";
import Newscard from "../components/Newscard.vue";
export default {
  components: {
    GradeList,
    Newscard
  },
  data() {
    return {
      
    };
  },
  computed:{
    moduleName: function(){
      return this.$route.query.title
    },
    prof: function(){
      return this.$route.query.prof
    }
  },
  beforeUpdated: function(){
    
  }
};
</script>

<style>
</style>
