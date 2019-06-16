<template>
  <v-container>
    <h1>Modulname</h1>
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
      moduleName: ''
    };
  },
  beforeCreate: function(){
    if( this.$route.query.name ) this.moduleName = this.$route.query.name
  }
};
</script>

<style>
</style>
