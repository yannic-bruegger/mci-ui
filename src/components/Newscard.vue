<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
  
    <v-card-title>
      <v-icon
        large
        left
      >
        
      </v-icon>
      <span class="title font-weight-light"> {{ modul }}
         <br>
      <font size="-2"> {{ datum }} </font>
      </span>
    </v-card-title>

    <v-card-text style="text-align:center">
        {{ inhalt }}
     
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title> {{ autor }} </v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
        
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {

    data: () => ({
      //
    }),
    props : {
      inhalt: String,
      datum: String,
      autor: String,
      modul: String
    }
  
   
  }
</script>
content_copy


<style>

</style>
