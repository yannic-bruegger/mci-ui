<template>
  <v-container>
    <h1>{{moduleName}}</h1>
    <h4>{{prof}}</h4>
    <hr class="my-3">
    <h2>Informationen</h2>
    <v-card class="mb-3">
      <v-card-text>
        <p>Sie haben sich für die Informatik (INF/ITM/MI) entschieden und den Vorkurs absolviert oder auch nicht absolviert. Auf jeden Fall sind Sie wahrscheinlich einigermaßen gespannt, wie es denn nun in der "richtigen" Vorlesung zugeht.</p>
        <p>Dies wird sich am Mittwoch, 10.10.18, ab 09:00 in der ersten Vorlesung zwanglos aufklären. Aber wenn Sie bis dahin schon einige Vorab-Informationen haben wollen, hier einige Hinweise:<br>
        Dem aktuellen Stundenplan (Link in <a href="http://advbs06.gm.fh-koeln.de:8080/hops/stundenplan/">http://advbs06.gm.fh-koeln.de:8080/hops/stundenplan/</a> ) entnehmen Sie, dass das Modul für INF/ITM/MI aus 3V (Vorlesungen), 2Ü (Übung) und 1P (Praktikum) besteht. Im Praktikum werden Sie mit Maple und MathWeb arbeiten, eine Einführung hierzu findet am 
        Donnerstag, 18.10.18, 17:00-19:00 Uhr, R0.401/0.402 statt (Pflichttermin!). In den ersten beiden V-Wochen sind noch keine Einzel-Praktika.</p>
        <p>Am 09.10.18 und 10.10.18 gibt es noch keine Übung.</p>
        <p>Ab Di, den 16.10.18, beginnt dann der "reguläre" Übungsbetrieb.<br>
        Details zu den Übungsgruppen (wann/wo) finden Sie in Info-UebGruppen.pdf.</p>
      </v-card-text>
    </v-card>

    <h2>News zum Modul</h2>
    <v-card class="mb-3">
      <v-card-text>
        <v-timeline dense>
        <time-line-post
          v-for="(post, index) in posts"
          v-bind:key="index"
          :inhalt="post.inhalt"
          :autor="post.autor"
          :datum="post.datum"
          :modul="post.modul">
        </time-line-post>
      </v-timeline>
      </v-card-text>
    </v-card>
    <h2>Praktikum</h2>
    <v-card class="mb-3">
      <appointment-list :items="appointments"></appointment-list>
    </v-card>

    <h2>Prüfung</h2>
    <v-card class="mb-3">
      <exam-overview></exam-overview>
    </v-card>

    <h2>Dateien</h2>
    <v-card class="mb-3">
      <file-tree></file-tree>
    </v-card>
  </v-container>
</template>

<script>
import GradeList from "../components/GradeList.vue";
import Newscard from "../components/Newscard.vue";
import FileTree from "../components/FileTree.vue";
import ExamOverview from "../components/ExamOverview.vue";
import TimeLinePost from "../components/TimeLinePost.vue";
import AppointmentList from "../components/AppointmentList.vue";
export default {
  components: {
    GradeList,
    Newscard,
    FileTree,
    ExamOverview,
    TimeLinePost,
    AppointmentList
  },
  computed:{
    moduleName: function(){
      return this.$route.query.title
    },
    prof: function(){
      return this.$route.query.prof
    },
    posts: function(){
      return [
        {
          inhalt: this.moduleName + " macht Spaß!",
          autor: this.prof,
          datum: "vor 5 Minuten",
          modul: this.moduleName
        },
        {
          inhalt: "Die Vorlesung zu " + this.modulName + " findet heute leider nicht statt!",
          autor: "Ein wissenschaftlicher Mitarbeiter",
          datum: "12.12.2012",
          modul: this.moduleName
        },
      ]
    }
  },
  data() {
    return {
      appointments: [
          { header: 'Anstehend' },
          {
            title: 'Generischer Meilenstein I',
            subtitle: "12.12.2019 &mdash; (0815)",
            pflicht: true
          },
          {
            title: 'Generischer Beratungstermin I',
            subtitle: "13.12.2019 &mdash; (0816)",
            pflicht: false
          },
          {
            title: 'Generischer Meilenstein II',
            subtitle: "10.01.2020 &mdash; (0815)",
            pflicht: true
          }
      ]
    }
  },
  beforeUpdated: function(){
    
  }
};
</script>

<style>
</style>
