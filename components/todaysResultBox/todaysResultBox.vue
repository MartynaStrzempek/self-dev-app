<template>
  <div class="box">
    <div class="title">Select today's result</div>
    <div class="radio-buttons">
      <el-radio class="radio-button" v-model="todaysResult" label="done">Done</el-radio>
      <el-radio class="radio-button" v-model="todaysResult" label="subgoalDone">Subgoal done</el-radio>
      <el-radio class="radio-button" v-model="todaysResult" label="notDone">Not done</el-radio>
      <el-radio class="radio-button" v-model="todaysResult" label="unchecked">I don't remember</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todaysResult: ''
    }
  }
}
//ustawic watcha na todaysResult i po zmianie ma sie wykonac mutacja resulta konkretnego goal'a - ma go znalezc po id stworzonym z getDate() czyli dzis
</script>

<style scoped lang="scss">
.box {
  padding: 0;
  border: 1px solid #66b1ff;
  .title {
    height: 60px;
    background-color: #66b1ff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120%;
    font-weight: bold;
  }
  .radio-buttons {
    display: flex;
    flex-direction: column;
    padding: 40px;
    .radio-button {
      margin: 7px 0;
      font-size: 16px;
    }
  }
}
</style>
