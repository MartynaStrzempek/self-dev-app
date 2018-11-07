<template>
  <div class="container">
    <set-result-modal
      :visibility="setResultModalVisibility"
      :goal-id="goal.id"
      :result-id="clickedDayId"/>
    <table id="table">
      <tr v-for="(dayId, rowId) in dayIds" :key="rowId" class="row">
        <td
          v-if="day.dayId === rowId"
          v-for="(day, colId) in days"
          :key="colId"
          class="col"
          @click="openModal(day.id)"
          :style="style(day.id)">
          {{ day.displayDay }}
          <span class="date-popup">{{ day.displayDate }}</span>
          <span class="note-popup" v-if="getTargetNote(goal.id, day.id) !== null">{{ getTargetNote(goal.id, day.id) }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import SetResultModal from "../../components/setResultModal/setResultModal.vue";
import * as ACTIONS from "../../store/actionTypes";
export default {
  data() {
    return {
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      dayIds: [0, 1, 2, 3, 4, 5, 6],
      days: [],
      clickedDayId: null,
    }
  },
  computed: {
    setResultModalVisibility() {
      return this.$store.getters["getSetResultModalVisibility"];
    },
  },
  props: {
    goal: Object,
    dayAmount: Number
  },
  components: {
    SetResultModal,
  },
  methods: {
    getTargetNote(goalId, resultId) {
      return this.$store.getters["getTargetNote"](goalId, resultId);
    },
    openModal(dayId){
      this.clickedDayId = dayId;
      this.$store.dispatch(ACTIONS.OPEN_SET_RESULT_MODAL);
    },
    style(id) {
      let bg;
      let result = this.goal.Results.find(result => result.date === id);
      if (result) {
        let statusId = result.StatusId;
        if (statusId === 3) bg = "#eee";
        else if (statusId === 2) bg = "rgba(254, 92, 92, 0.9)";
        else if (statusId === 4) bg = "rgba(255, 165, 0, 0.6)";
        else if (statusId === 1) bg = "rgba(0, 255, 0, 0.4)";
      }
      else bg = '#eee';

      return `background-color: ${bg}`;
    },
    getMonths() {
      const today = new Date();
      let dayBefore, day, month, year, id, dayId, displayDay, displayDate, amount = this.dayAmount;
      for (let i = 1; i <= 6; i++) {
        if (this.dayNames.indexOf(new Date(today - 86400000 * amount).toString().substr(0, 3)) !== 0) {
          amount++
        }
      }

      for (let i = amount; i >= 0; i--) {
        dayBefore = new Date(today - 86400000 * i);
        month = dayBefore.getMonth() + 1;
        day = dayBefore.getDate();

        if (day.toString().length < 2) day = `0${day}`;
        if (month.toString().length < 2) month = `0${month}`;

        year = dayBefore.getFullYear();

        id = `${year}-${month}-${day}`;

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
  table {
    td {
      min-width: 30px;
      max-width: 30px;
      min-height: 30px;
      padding: 0;
      background-color: #eee;
      margin: 2px;
      color: white;
      font-size: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &:hover {
        cursor: pointer;
      }
      &:hover .date-popup {
        display: block;
      }
      &:hover .note-popup {
        display: block;
      }
      .date-popup {
        position: absolute;
        bottom: 65%;
        left: 70%;
        width: 110px;
        text-align: center;
        display: none;
        padding: 10px 5px;
        z-index: 1;
        background-color: rgba(122, 122, 122, 0.7);
      }
      .note-popup {
        position: absolute;
        top: 65%;
        left: 70%;
        width: 180px;
        text-align: center;
        display: none;
        padding: 10px 5px;
        z-index: 1;
        background-color: rgba(254, 92, 92, 0.6);
      }
    }
  }
}
</style>
