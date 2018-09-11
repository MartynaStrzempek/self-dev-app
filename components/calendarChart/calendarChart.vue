<template>
  <div class="container">
    <table id="table">
      <tr v-for="(dayId, rowId) in dayIds" :key="rowId" class="row">
        <td v-if="day.dayId === rowId" v-for="(day, colId) in days" :key="colId" class="col">{{ day.day }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dayIds: [0, 1, 2, 3, 4, 5, 6],
      days: [{ dayId: 0, day: 1}, { dayId: 1, day: 2}, { dayId: 2, day: 3}, { dayId: 3, day: 4}, { dayId: 4, day: 5},
        { dayId: 5, day: 6}, { dayId: 6, day: 7}, { dayId: 0, day: 8}, { dayId: 1, day: 9}, { dayId: 2, day: 10},
        { dayId: 3, day: 11}, { dayId: 4, day: 12}, { dayId: 5, day: 13}, { dayId: 6, day: 14}, { dayId: 0, day: 15},
        { dayId: 1, day: 16}, { dayId: 2, day: 17}, { dayId: 3, day: 18}, { dayId: 4, day: 19}, { dayId: 5, day: 20},
        { dayId: 6, day: 21}, { dayId: 0, day: 22}, { dayId: 1, day: 23}, { dayId: 2, day: 24}, { dayId: 3, day: 25}]
    }
  },
  props: {

  }
}
</script>

<style scoped lang="scss">
.container {
  width: 60%;
  table {
    border-collapse: collapse;
    border: 1px solid lightgray;
    width: 100%;
    td {
      border: 1px solid lightgray;
    }
  }
}
</style>
