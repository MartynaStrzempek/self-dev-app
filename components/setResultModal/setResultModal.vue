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
    <div class="textarea-wrapper" :class="{ hidden: isGoalDone }">
      <p class="question">Why haven't You done that today?</p>
      <textarea class="textarea" v-model="note" cols="77" rows="5"></textarea>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">Cancel</el-button>
      <el-button type="primary" @click="save">Save</el-button>
    </span>
  </el-dialog>
</template>

<script>
import * as ACTIONS from "../../store/actionTypes";
import NoteTextarea from "../../components/noteTextarea/noteTextarea.vue";
export default {
  data() {
    return {
      status: "",
      isMarked: true,
      isGoalDone: true,
      note: ""
    }
  },
  props: {
    visibility: Boolean,
    goalId: Number,
    resultId: String,
  },
  components: {
    NoteTextarea,
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
        this.$store.dispatch(ACTIONS.SET_NOTE, {
          goalId: this.goalId,
          resultId: this.resultId,
          note: this.note,
        })
      } else {
        this.isMarked = false;
      }
      this.status = "";
    }
  },
  watch: {
    status() {
      this.isGoalDone = this.status !== "notDone";
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
.textarea-wrapper {
  margin-top: 20px;
  margin-left: 20px;
  .question {
    color: red;
  }
}
.hidden {
  display: none;
}
</style>
