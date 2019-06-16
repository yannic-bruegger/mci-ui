<template>
  <v-list two-line dense>
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
      <v-list-tile v-else :key="item.title" avatar @click="{}">
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon :color="item.pflicht ? 'error' : '#dddddd'" :title="item.pflicht ? 'Pflichttermin' : ''">priority_high</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider v-if="!item.header" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    items: Array
  }
};
</script>

<style>
</style>
