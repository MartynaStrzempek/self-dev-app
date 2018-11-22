<template>
  <el-dialog :visible.sync="visibility">
    <div class="wrapper">
      <div class="title">Select result for this day:</div>
      <div class="radio-buttons">
        <el-radio class="radio-button" v-model="status" label="done">Sukces</el-radio>
        <el-radio class="radio-button" v-model="status" label="partiallyDone">Cel awaryjny</el-radio>
        <el-radio class="radio-button" v-model="status" label="notDone">Porażka</el-radio>
        <el-radio class="radio-button" v-model="status" label="unchecked">Nie pamiętam</el-radio>
      </div>
    </div>
    <p class="validation-text" :class="{ hidden: isMarked }">Aby dodać status musisz zaznaczyć jedną z opcji!</p>
    <div class="textarea-wrapper" :class="{ hidden: isGoalDone }">
      <p class="question">Dlaczego dziś się nie udało?</p>
      <textarea class="textarea" v-model="note" cols="77" rows="5"></textarea>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">Zamknij</el-button>
      <el-button type="primary" @click="save">Zapisz</el-button>
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
      isGoalDone: true,
      note: null
    }
  },
  props: {
    visibility: Boolean,
    goalId: Number,
    resultDate: String,
  },
  computed: {
    goal() {
      return this.$store.getters["getTargetGoal"](this.goalId);
    },
    targetResult() {
      const result = this.goal.Results.find(result => result.date === this.resultDate);
      return result ? result : null;
    }
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
        if (this.targetResult) {
          await this.$store.dispatch(ACTIONS.UPDATE_RESULT, {
            goalId: this.goalId,
            resultId: this.targetResult.id,
            updatedResult: {
              status: this.status,
              note: this.note
            }
          });
        }
        else {
          await this.$store.dispatch(ACTIONS.SET_RESULT, {
            goalId: this.goalId,
            resultDate: this.resultDate,
            status: this.status,
            note: this.note
          });
        }
        if (this.status === "notDone" && this.note.length === 0) {
          this.$message({
            message: 'You can add note later!',
            type: 'warning'
          });
        }
        this.note = null;
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
