<template>
  <v-data-table
    :headers="headers"
    :items="exams"
    class="elevation-1"
    hide-actions
  >
    <template v-slot:items="props">
      <td v-if="props.item.name == 'Gesamt'"><strong>{{ props.item.name }}</strong></td>
      <td v-else>{{ props.item.name }}</td>
      <td v-if="props.item.note=='3.14'" class="text-xs-right"> <strong>{{ props.item.note }}</strong></td>
      <td v-else class="text-xs-right"> {{ props.item.note }} </td>
      <td v-if="props.item.credits=='30'" class="text-xs-right"><strong>{{ props.item.credits }}</strong></td>
      <td v-else class="text-xs-right"> {{ props.item.credits }} </td>
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
              name: "Algorithmen und Programmierung 1",
              note: "3.3",
              credits: 8
          },
          {
              name: "Algorithmen und Programmierung 2",
              note: "4.0",
              credits: 7
          },
          {
              name: "Mensch-Computer-Interaktion",
              note: "1.0",
              credits: 5
          },
          {
            name: "Betriebswirtschaftslehre 2",
            note: "3.7",
            credits: 5
          },
          {
            name: "Einführung in Betriebssysteme und Rechnerarchitektur",
            note: "4.0",
            credits: 5
          },
          {
              name: "Gesamt",
              note: "3.14",
              credits: 30
          }
        ]
      }
    }
  }
</script>

<style>

</style>
