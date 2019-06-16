<template>
  <div>
    <v-tabs>
      <v-tab v-for="(tab, i) in tabs" :key="i" ripple>{{ tab }}</v-tab>
      <v-tab-item v-for="(tab, i) in tabs" :key="i">
        <!-- NOTEN -->
        <v-container v-if="tab == 'Noten'">
          <grade-list></grade-list>
        </v-container>

        <!-- NEWS -->
        <v-container v-if="tab == 'News'">
          <v-timeline dense>
            <time-line-post
              v-for="(post, index) in posts"
              v-bind:key="index"
              :inhalt="post.inhalt"
              :autor="post.autor"
              :datum="post.datum"
              :modul="post.modul"
            ></time-line-post>
          </v-timeline>
        </v-container>

        <!-- FORUM -->
        <v-container v-if="tab == 'Forum'">
          
        </v-container>

        <!-- STUNDENPLAN -->
        <schedule v-if="tab == 'Stundenplan'"></schedule>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import GradeList from "../components/GradeList.vue";
import Newscard from "../components/Newscard.vue";
import TimeLinePost from "../components/TimeLinePost.vue";
import Schedule from "../components/Schedule.vue";
export default {
  components: {
    GradeList,
    Newscard,
    TimeLinePost,
    Schedule,
  },

  data() {
    return {
      tabs: ["News", "Forum", "Noten", "Stundenplan"],
      posts: [
        {
          inhalt: "Mathe macht Spaß!",
          autor: "Wolfgang Konen",
          datum: "vor 5 Minuten",
          modul: "Mathematik I"
        },
        {
          inhalt: "Veranstaltung am 24.12 fällt auf Grund von Weihnachten aus",
          autor: "Heide Faeskorn Woyke",
          datum: "Gestern, 16:05",
          modul: "Datenbanken I"
        },
        {
          inhalt: "Die Übung in der kommenden Woche fällt auf Grund mangelnder Nachfrage aus.",
          autor: "Stefan Karsch",
          datum: "03.06.2019, 14:35",
          modul: "Einführung Betriebssysteme und Rechnerarchitektur"
        },
      ]
    };
  }
};
</script>

<style>
</style>
