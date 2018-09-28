<template>
  <div class="textarea-wrapper">
    <p :class="message.class" class="message-text">{{ message.text }}</p>
    <textarea rows="4" cols="28" class="text-area" v-model="note"></textarea>
    <i class="fas fa-check-square icon" :class="{ green: isNoteSaved }" @click="saveNote"></i>
  </div>
</template>

<script>
import * as ACTIONS from "../../store/actionTypes";
export default {
  data() {
    return {
      message: { text: "Why haven't You done that today?", class: 'red'},
      note: "",
      isNoteSaved: false,
    }
  },
  computed: {
    goalId() {
      return this.$store.getters["getCurrentGoalId"];
    },
  },
  props: {
    resultId: String
  },
  methods: {
    async saveNote() {
      await this.$store.dispatch(ACTIONS.SET_NOTE, {
        goalId: this.goalId,
        resultId: this.resultId,
        note: this.note,
      });
      this.message = { text: "Note saved!", class: "green" };
      this.isNoteSaved = true;
    },
  }
}
</script>

<style scoped lang="scss">
.textarea-wrapper {
  font-size: 90%;
  position: relative;
  .icon {
    position: absolute;
    bottom: 5px;
    right: 0;
    color: #9fa5ad;
    font-size: 120%;
    &:hover {
      color: rgba(0, 255, 0, 0.4);
      cursor: pointer;
    }
  }
}
.message-text {
  font-size: 95%;
}
.green {
  color: rgba(0, 255, 0, 0.8);
}
.red {
  color: red;
}
</style>
