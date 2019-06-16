<template>
  <v-timeline-item large>
    <template v-slot:icon>
      <v-avatar>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">
      </v-avatar>
    </template>
    <template v-slot:opposite>
      <span>{{autor}}</span>
    </template>
    <v-card class="mx-auto" max-width="1000">
      <v-card-title>
        <span class="title font-weight-light">
          {{ modul }}
          <br>
          <font size="-2">{{ autor }} {{ datum }}</font>
        </span>
      </v-card-title>
      <v-card-text style="text-align:start">{{ inhalt }}</v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  props: {
    inhalt: String,
    datum: String,
    autor: String,
    modul: String
  }
};
</script>


<style>
</style>



