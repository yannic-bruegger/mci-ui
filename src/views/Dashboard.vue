<template>
<div>
  <v-tabs>
    <v-tab>News</v-tab>
    <v-tab>Forum</v-tab>
    <v-tab>Noten</v-tab>
    <v-tab>Stundenplan</v-tab>
  </v-tabs>
<v-container>
<grade-list> 

</grade-list>
</v-container>


</div>
</template>

<script>
import GradeList from "../components/GradeList.vue"
export default {
  components:{
    GradeList
  }

}
</script>

<style>

</style>
