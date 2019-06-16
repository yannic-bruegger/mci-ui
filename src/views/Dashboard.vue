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
          <v-layout justify-end>
            <v-textarea placeholder="Schreibe deinen Beitrag hier" solo v-model="newBeitrag"></v-textarea>
            <v-btn @click="post()" class="ml-1 my-0">Post</v-btn>
          </v-layout>
          <hr class="mb-3">
          <v-text-field solo placeholder="Beiträge durchsuchen" v-model="searchstring"></v-text-field>
          <v-card v-for="(beitrag, i) in filteredForumBeitraege" v-bind:key="i" class="mb-3">
            <v-card-title>Post von {{beitrag.autor}}</v-card-title>
            <v-card-text>{{beitrag.inhalt}}</v-card-text>
            <v-card-actions>
              <v-layout justify-end>
                <v-btn flat icon color="success" @click="beitrag.upvotes += 1"><v-icon>thumb_up</v-icon></v-btn>{{beitrag.upvotes}}&nbsp;&nbsp;
                <v-btn flat icon color="error" @click="beitrag.downvotes += 1"><v-icon>thumb_down</v-icon></v-btn>{{beitrag.downvotes}}
              </v-layout>
            </v-card-actions>
          </v-card>
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
      newBeitrag: "",
      searchstring: "",
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
      ],
      forumBeitraege: [
        {
          inhalt: "Heute Abend (21.06.2019 19:34) beginnt auf dem Campus das große Grillfestival der Fachschaft. <br>Eintritt für Studierende frei!",
          autor: "Hannah Heiter",
          datum: "vor 5 Minuten",
          upvotes: parseInt(Math.random()*100+1),
          downvotes: parseInt(Math.random()*5+0),
        },
        {
          inhalt: "Um den Studiengang wechseln zu können, gibt es einige Grundvoraussetzungen. Folgend sind diese Voraussetzunngen NICHT geschildert:",
          autor: "Fridolin Fröhlich",
          datum: "vor 5 Minuten",
          upvotes: parseInt(Math.random()*100+1),
          downvotes: parseInt(Math.random()*5+0)
        },
        {
          inhalt: "Heute Abend (21.06.2019 19:34) beginnt auf dem Campus das große Grillfestival der Fachschaft. <br>Eintritt für Studierende frei!",
          autor: "Hannah Heiter",
          datum: "vor 5 Minuten",
          upvotes: parseInt(Math.random()*100+1),
          downvotes: parseInt(Math.random()*5+0)
        },
      ]
    }
  },
  computed: {
    filteredForumBeitraege: function(){
      var context = this;
      if( this.searchstring == "" ) return this.forumBeitraege

      return this.forumBeitraege.filter(function(beitrag){
        return beitrag.inhalt.includes(context.searchstring) || beitrag.autor.includes(context.searchstring)
      })
    }
  },
  methods: {
    post:  function(){
      this.forumBeitraege.unshift({
        inhalt: this.newBeitrag,
        autor: "Max Mustermann",
        datum: "Gerade eben",
        upvotes: 0,
        downvotes: 0
      })
      this.newBeitrag = ""
      
    }
  }
};
</script>

<style>
</style>
