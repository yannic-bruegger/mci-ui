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
      <v-container v-if="i-1==2">
      <Grade-list v-if="i-1==2"></grade-list>
      </v-container>
      
      <v-container v-if="i-1==0"
      >
      <newscard v-if="i-1==0" v-bind:inhalt="'Veranstaltung am 24.12 fällt auf Grund von Weihnachten aus'"
      v-bind:autor="'Heide Faeskorn Woyke'"
      v-bind:datum="'Gestern, 16:05'"
      v-bind:modul="'Datenbanken I'"
      ></newscard>
      </v-container>
      <v-container v-if="i-1==0">
      <newscard v-if="i-1==0" v-bind:inhalt="'Die Übung in der kommenden Woche fällt auf Grund mangelnder Nachfrage aus.' "
      v-bind:autor="'Stefan Karsch'"
      v-bind:datum="'03.06.2019, 14:35'"
      v-bind:modul="'Einführung Betriebssysteme und Rechnerarchitektur'"
      ></newscard>
      </v-container><v-container v-if="i-1==0">
      <newscard v-if="i-1==0" v-bind:inhalt="'Mathe macht Spaß!'"
      v-bind:autor="'Wolfgang Konen'"
      v-bind:datum="'vor 5 Minuten'"
      v-bind:modul="'Mathematik I'"
      ></newscard>
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
