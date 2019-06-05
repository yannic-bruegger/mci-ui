<template>
<div>
  <v-tabs>
    <v-tab 
      v-for ="i in 4"
      :key = "i"
      ripple>
      {{ tabs[i-1] }}
      </v-tab>
      <v-tab-item
      v-for ="i in 4"
      :key= "i"
      >
      <v-container>
      <Grade-list v-if="i-1==2"></grade-list>
      </v-container>

      </v-tab-item>
  </v-tabs>



</div>
</template>

<script>
import GradeList from "../components/GradeList.vue";
export default {
  components:{
    GradeList
  },


data () {
  return {
    tabs: [
      "News",
      "Forum",
      "Noten",
      "Stundenplan",
      
    ]

  }
}
}
</script>

<style>

</style>
