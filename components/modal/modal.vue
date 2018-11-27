<template>
  <el-dialog :title="title" :visible.sync="visibility">
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.goalName" placeholder="Wprowadź nazwę celu..." autofocus></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.subGoalName" placeholder="Wprowadź nazwę celu awaryjnego..."></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.reward" placeholder="Wprowadź nazwę nagrody..."></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.scoreForReward" placeholder="Wprowadź liczbę punktów, po której chcesz uzyskać nagrodę..."></el-input>
      </el-form-item>
    </el-form>
    <p class="validation-text" :class="{ hidden: isFilled }">Aby dodać lub edytować cel musisz wprowadzić nazwę celu głównego oraz celu awaryjnego</p>
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
      isFilled: true,
    }
  },
  computed: {
    prise() {
      return this.$store.getters["getTargetPrise"](this.editedGoal.id);
    },
    form() {
      return this.editing
        ? {
          goalName: this.editedGoal.goalName,
          subGoalName: this.editedGoal.subgoalName,
          reward: this.prise.description,
          scoreForReward: this.prise.score
        }
        : {
          goalName: '',
          subGoalName: '',
          reward: '',
          scoreForReward: null
        }
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
        this.$store.dispatch(ACTIONS.CLOSE_MODAL);
        if (this.editing) await this.$store.dispatch(ACTIONS.UPDATE_GOAL, {
          editedGoal: {
            description: this.form.reward,
            score: this.form.scoreForReward,
            goalName: this.form.goalName,
            subgoalName: this.form.subGoalName
          },
          goalId: this.editedGoal.id,
          priseId: this.editedGoal.PriseId
        });
        else await this.$store.dispatch(ACTIONS.ADD_GOAL, this.form);
        this.isFilled = true;
      }
      else {
        this.isFilled = false;
      }
    },
    cancel() {
      this.$store.dispatch(ACTIONS.CLOSE_MODAL);
      this.isFilled = true;
    }
  }
}
</script>

<style scoped lang="scss">
.validation-text {
  color: red;
}
.hidden {
  display: none;
}
</style>
