<template>
  <v-container>
    <h1>{{moduleName}}</h1>
    <h4>{{prof}}</h4>
    <hr class="my-3">
    <h2>Informationen</h2>
    <v-card class="mb-3">
      <v-card-text>
        <p>Sie haben sich für die Informatik (INF/ITM/MI) entschieden und den Vorkurs absolviert oder auch nicht absolviert. Auf jeden Fall sind Sie wahrscheinlich einigermaßen gespannt, wie es denn nun in der "richtigen" Vorlesung zugeht.</p>
        <p>
          Ab Di, den 16.10.18, beginnt dann der "reguläre" Übungsbetrieb.
          <br>Übungen finden wöchentlich jeden Montag und Mittwoch statt. (Abgesehen von Feiertagen)
        </p>
        <p>
          <span class="font-weight-bold">Credit Points: </span><span>5</span><br>
          <span class="font-weight-bold">Zeitaufwand: </span><span>150 h</span><br>
          <span class="font-weight-bold">Voraussetzungen: </span><span>Bestandenes Grundstudium</span><br>
        </p>
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
            :modul="post.modul"
          ></time-line-post>
        </v-timeline>
      </v-card-text>
    </v-card>
    
    <h2>Praktikum</h2>
    <v-card class="mb-3">
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Pflichtpraktikum</v-list-tile-title>
          <v-list-tile-action>
            <v-btn v-if="!participate" @click="togglePraktikum()">Anmelden</v-btn>
            <v-btn color="success" v-else @click="togglePraktikum">Abmelden</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <appointment-list v-if="participate" :items="appointments"></appointment-list>
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
  computed: {
    moduleName: function() {
      return this.$route.query.title;
    },
    prof: function() {
      return this.$route.query.prof;
    },
    posts: function() {
       var posts = [
        {
          inhalt: "Die Vorlesung zu " + this.moduleName + " findet morgen leider nicht statt!",
          autor: this.prof,
          datum: "vor 5 Minuten",
          modul: this.moduleName,
          participate: false
        },
        {
          autor: "Ein wissenschaftlicher Mitarbeiter",
          inhalt: this.moduleName + " macht Spaß!",
          datum: "12.12.2012",
          modul: this.moduleName
        }
      ];
      if( this.moduleName == "Datenbanken 1" ){
        posts.unshift({
          inhalt: "Klausureingrenzung für die folgende Klausurphase: ERD, EERD, DQL, DDL, DML",
          autor: this.prof,
          modul: this.moduleName,
          datum: "Gestern um 12:25",
        })
      }
      return posts
    }
  },
  data() {
    return {
      appointments: [
        { header: "Anstehend" },
        {
          title: "Generischer Meilenstein I",
          subtitle: "12.12.2019 &mdash; (0815)",
          pflicht: true
        },
        {
          title: "Generischer Beratungstermin I",
          subtitle: "13.12.2019 &mdash; (0816)",
          pflicht: false
        },
        {
          title: "Generischer Meilenstein II",
          subtitle: "10.01.2020 &mdash; (0815)",
          pflicht: true
        }
      ],
      participate: false
    }
  },
  methods:{
    togglePraktikum: function(){
      this.participate = !this.participate
    }
  },
  beforeUpdated: function() {}
};
</script>

<style>
</style>
