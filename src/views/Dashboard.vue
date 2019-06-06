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
      
      <newscard v-if="i-1==0" v-bind:inhalt="'Veranstaltung am 24.12 fällt auf Grund von Weihnachten aus'"
      v-bind:autor="'Professor X'"
      v-bind:datum="'Gestern, 16:05'"
      v-bind:modul="'Datenbanken I'"></newscard>
    
      </v-container>

      </v-tab-item>
  </v-tabs>



</div>
</template>

<script>
import GradeList from "../components/GradeList.vue";
import Newscard from "../components/Newscard.vue"
export default {
  components:{
    GradeList,
    Newscard
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
