<template>
  <v-container>
    <v-treeview
      v-model="tree"
      :open="open"
      :items="items"
      activatable
      item-key="name"
      open-on-click
      @click="downloadFile"
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">{{ open ? 'folder_open' : 'folder' }}</v-icon>
        <v-icon v-else>{{ files[item.file] }}</v-icon>
      </template>
      <template v-slot:append="{ item, open }">
        <v-icon @click="downloadFile" v-if="item.file" color="gray">cloud_download</v-icon>
      </template>
    </v-treeview>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    open: ["public"],
    files: {
      html: "description",
      js: "description",
      json: "description",
      md: "description",
      pdf: "description",
      png: "description",
      txt: "description",
      xls: "description"
    },
    tree: [],
    items: [
      {
        name: "vorlesung",
        children: [
          {
            name: "foliensatz1.pdf",
            file: "pdf"
          },
          {
            name: "foliensatz2.pdf",
            file: "pdf"
          },
          {
            name: "foliensatz3.pdf",
            file: "pdf"
          }
        ]
      },
      {
        name: "praktikum",
        children: [
          {
            name: "praktikumsaufgaben_aktuell.pdf",
            file: "pdf"
          },
          {
            name: "praktikumsaufgaben_2013.pdf",
            file: "pdf"
          },
          {
            name: "praktikumsaufgaben_2014.pdf",
            file: "pdf"
          }
        ]
      }
    ]
  }),
  methods: {
    downloadFile: function() {
      console.log("TEST");
      alert("Download started");
    }
  }
};
</script>

<style>
</style>
