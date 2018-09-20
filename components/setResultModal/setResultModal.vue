<template>
  <el-dialog :visible.sync="visibility">
    <div class="wrapper">
      <div class="title">Select result for this day:</div>
      <div class="radio-buttons">
        <el-radio class="radio-button" v-model="status" label="done">Done</el-radio>
        <el-radio class="radio-button" v-model="status" label="subgoalDone">Subgoal done</el-radio>
        <el-radio class="radio-button" v-model="status" label="notDone">Not done</el-radio>
        <el-radio class="radio-button" v-model="status" label="unchecked">I don't remember</el-radio>
      </div>
    </div>
    <p class="validation-text" :class="{ hidden: isMarked }">To Add the goal You must fill in name of the goal and name of the subgoal</p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">Cancel</el-button>
      <el-button type="primary" @click="save">Save</el-button>
    </span>
  </el-dialog>
</template>

<script>
import * as ACTIONS from "../../store/actionTypes";
export default {
  data() {
    return {
      status: "",
      isMarked: true,
    }
  },
  props: {
    visibility: Boolean,
    goalId: Number,
    resultId: String,
  },
  methods: {
    cancel() {
      this.$store.dispatch(ACTIONS.CLOSE_SET_RESULT_MODAL);
      this.status = "";
      this.isMarked = true;
    },
    async save() {
      if (this.status.length > 0) {
        this.isMarked = true;
        this.$store.dispatch(ACTIONS.CLOSE_SET_RESULT_MODAL);
        await this.$store.dispatch(ACTIONS.SET_STATUS, {
          goalId: this.goalId,
          resultId: this.resultId,
          status: this.status
        });
      } else {
        this.isMarked = false;
      }
      this.status = "";
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding-left: 20px;
  .title {
    font-weight: bold;
    font-size: 120%;
    margin-bottom: 20px;
  }
}
.validation-text {
  padding: 20px 0 0 20px;
  color: red;
}
.hidden {
  display: none;
}
</style>
