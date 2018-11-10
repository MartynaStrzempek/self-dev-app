<template>
  <el-dialog :visible.sync="visibility">
    <div class="textarea-wrapper">
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
import * as ACTIONS from "../../store/actionTypes.js";
export default {
  data() {
    return {
      note: null
    }
  },
  props: {
    visibility: Boolean,
    goalId: Number,
    resultId: Number,
  },
  methods: {
    cancel() {
      this.$message({
        message: 'You can add note later!',
        type: 'warning'
      });
      this.$store.dispatch(ACTIONS.CLOSE_NOTE_MODAL);
      this.note = "";
    },
    async save() {
      if (this.note.length > 0) {
        this.$store.dispatch(ACTIONS.UPDATE_RESULT, {
          goalId: this.goalId,
          resultId: this.resultId,
          updatedResult: { note: this.note }
        });
        this.$message({
          message: 'Note saved!',
          type: 'success'
        });
      }
      else {
        this.$message({
          message: 'You can add note later!',
          type: 'warning'
        });
      }
      this.$store.dispatch(ACTIONS.CLOSE_NOTE_MODAL);
      this.note = null
    }
  }
}
</script>

<style scoped lang="scss">
.textarea-wrapper {
  margin-top: 20px;
  margin-left: 20px;
  .question {
    color: red;
  }
}
</style>
