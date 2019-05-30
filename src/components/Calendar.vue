<template>
  <v-layout wrap>
    <v-flex xs12 class="mb-3">
      <v-sheet>
        <v-calendar ref="calendar" v-model="start" :type="type" :end="end" color="primary"></v-calendar>
      </v-sheet>
    </v-flex>
    <!--
    <v-flex sm4 xs12 class="text-sm-left text-xs-center">
      <v-btn @click="$refs.calendar.prev()">
        <v-icon dark left>keyboard_arrow_left</v-icon>
      </v-btn>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex sm4 xs12 class="text-sm-right text-xs-center">
      <v-btn @click="$refs.calendar.next()">
        <v-icon right dark>keyboard_arrow_right</v-icon>
      </v-btn>
    </v-flex>-->
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    type: "month",
    start: "2019-01-01",
    end: "2019-01-06",
  })
};
</script>