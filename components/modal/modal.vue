<template>
  <el-dialog :title="title" :visible.sync="visibility">
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.goalName" placeholder="Fill name of goal..." autofocus></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.subGoalName" placeholder="Fill name of subgoal..."></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.reward" placeholder="Fill name of reward..."></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.scoreForReward" placeholder="Fill score after which You want to get a reward..."></el-input>
      </el-form-item>
    </el-form>
    <p class="validation-text" :class="{ hidden: isFilled }">To Add the goal You must fill in name of the goal and name of the subgoal</p>
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
      form: {
        goalName: '',
        subGoalName: '',
        reward: '',
        scoreForReward: null
      },
      isFilled: true,
    }
  },
  props: {
    visibility: Boolean,
    title: String,
    editing: Boolean,
    editedGoal: Object
  },
  methods: {
    async save(){
      if (this.form.goalName.length > 0 && this.form.subGoalName.length > 0) {
        if (this.editing) await this.$store.dispatch(ACTIONS.EDIT_GOAL, {
          editedGoal: this.form,
          editedGoalId: this.editedGoal.id
        });
        else await this.$store.dispatch(ACTIONS.ADD_GOAL, this.form);

        this.$store.dispatch(ACTIONS.CLOSE_MODAL);
        this.isFilled = true;
        this.form = {
          goalName: '',
          subGoalName: '',
          reward: '',
          scoreForReward: null
        };
      }
      else {
        this.isFilled = false;
      }
    },
    cancel() {
      this.$store.dispatch(ACTIONS.CLOSE_MODAL);
      this.isFilled = true;
    }
  },
  watch: {
    editing: function () {
      console.log(this.editing)
      if (this.editing) {
        this.form = {
          goalName: this.editedGoal.goalName,
          subGoalName: this.editedGoal.subGoalName,
          reward: this.editedGoal.reward,
          scoreForReward: this.editedGoal.scoreForReward
        }
      } else {
        this.form = {
          goalName: '',
          subGoalName: '',
          reward: '',
          scoreForReward: null
        };
      }
    }
  },
  mounted() {
  }
}
//if edited -> fill in inputs with edited goal data and execute function which filter goals prop to edit current goal
</script>

<style scoped lang="scss">
.validation-text {
  color: red;
}
.hidden {
  display: none;
}
</style>
