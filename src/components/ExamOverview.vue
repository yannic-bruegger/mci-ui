<template>
  <div style="display: block;">
    <v-list>
      <v-list-tile v-for="(exam, i) in exams" v-bind:key="i">
        <v-list-tile-title>{{exam.name}}</v-list-tile-title>
        <v-list-tile-action>
          <v-btn v-if="!exam.attend" @click="exam.attend = true">Anmelden</v-btn>
          <v-btn color="success" v-else @click="exam.attend = false">Abmelden</v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      exams:[
        {name: "Sommer 2019", attend: Math.random() < 0.5},
        {name: "Winter 2019", attend: Math.random() > 0.5},
        {name: "Sommer 2020", attend: Math.random() > 0.5}
      ]
    }
  }
}
</script>

<style>

</style>
