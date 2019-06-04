<template>
  <v-data-table
    :headers="headers"
    :items="exams"
    class="elevation-1"
    hide-actions
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.note }}</td>
      <td class="text-xs-right">{{ props.item.credits }}</td>
      
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Modul',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Note', value: 'grade', align: 'left', sortable: false },
          { text: 'CP', value: 'credits', align: 'left', sortable: false }
         
        ],
        exams: [
          {
              name: "irgendwasS",
              note: 3.3,
              credits: 8
          },
          {
              name: "AP2",
              note: 4.0,
              credits: 7
          },
          {
              name: "MCI",
              note: 1.0,
              credits: 9001
          },
          {
              name: "Gesamt",
              note: 2.76,
              credits: 9016
          }
        ]
      }
    }
  }
</script>

<style>

</style>
