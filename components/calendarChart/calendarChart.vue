<template>
  <div class="container">
    <table id="table">
      <tr v-for="(dayId, rowId) in dayIds" :key="rowId" class="row">
        <td v-if="day.dayId === rowId" v-for="(day, colId) in days" :key="colId" class="col">{{ day.displayDay }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      dayIds: [0, 1, 2, 3, 4, 5, 6],
      days: []
//      days: [{ dayId: 0, day: 1}, { dayId: 1, day: 2}, { dayId: 2, day: 3}, { dayId: 3, day: 4}, { dayId: 4, day: 5},
//        { dayId: 5, day: 6}, { dayId: 6, day: 7}, { dayId: 0, day: 8}, { dayId: 1, day: 9}, { dayId: 2, day: 10},
//        { dayId: 3, day: 11}, { dayId: 4, day: 12}, { dayId: 5, day: 13}, { dayId: 6, day: 14}, { dayId: 0, day: 15},
//        { dayId: 1, day: 16}, { dayId: 2, day: 17}, { dayId: 3, day: 18}, { dayId: 4, day: 19}, { dayId: 5, day: 20},
//        { dayId: 6, day: 21}, { dayId: 0, day: 22}, { dayId: 1, day: 23}, { dayId: 2, day: 24}, { dayId: 3, day: 25}]
    }
  },
  props: {

  },
  methods: {
    getMonths() {
      const today = new Date();
      let dayBefore, day, month, year, id, dayId, displayDay, displayDate, amount = 180;

      for (let i = 1; i <= 6; i++) {
        if (this.dayNames.indexOf(new Date(today - 86400000 * amount).toString().substr(0, 3)) !== 0) {
          amount++
        }
      }

      for (let i = amount; i >= 0; i--) {
        dayBefore = new Date(today - 86400000 * i);

        if (dayBefore.getDate().toString().length < 2) day = `0${dayBefore.getDate()}`;
        else day = dayBefore.getDate();

        if (dayBefore.getMonth().toString().length < 2) month = `0${dayBefore.getMonth() + 1}`;
        else month = dayBefore.getMonth() + 1;

        year = dayBefore.getFullYear();

        id = `${day}-${month}-${year}`;
        dayId = this.dayNames.indexOf(dayBefore.toString().substr(0, 3));
        displayDay = dayBefore.getDate();
        displayDate = `${dayBefore.getDate()} ${this.monthNames[dayBefore.getMonth()]} ${dayBefore.getFullYear()}`;

        this.days.push({id, dayId, displayDay, displayDate});
      }
    }
  },
  mounted() {
    this.getMonths();
  }
}
</script>

<style scoped lang="scss">
.container {
  /*width: 60%;*/
  table {
    td {
      min-width: 30px;
      max-width: 30px;
      padding: 0;
      background-color: #fafafa;
      margin: 2px;
      text-align: center;
      color: #7f828b;
    }
  }
}
</style>
