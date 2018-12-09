<template>
  <el-dialog :visible.sync="visibility">
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.password" placeholder="Wpisz aktualne hasło..." autofocus></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-if="isPasswordChange" v-model="form.newPassword" placeholder="Wpisz nowe hasło..."></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-if="!isPasswordChange" v-model="form.newEmail" placeholder="Wpisz nowy email..."></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">Zamknij</el-button>
      <el-button type="primary" @click="save">Zapisz</el-button>
    </span>
  </el-dialog>
</template>

<script>
import * as MUTATIONS from "../../store/mutationTypes";
import * as ACTIONS from "../../store/actionTypes";
import CryptoJS from 'crypto-js';
export default {
  data() {
    return {
      form: {
        password: "",
        newPassword: "",
        newEmail: ""
      }
    }
  },
  props: {
    isPasswordChange: Boolean,
    visibility: Boolean
  },
  methods: {
    cancel() {
      this.$store.commit(MUTATIONS.CLOSE_CHANGE_USER_DATA_MODAL);
    },
    save() {
      this.$store.commit(MUTATIONS.CLOSE_CHANGE_USER_DATA_MODAL);
      if (this.isPasswordChange) {
        this.$store.dispatch(ACTIONS.UPDATE_USER, {
          password: CryptoJS.SHA256(this.form.password).toString(CryptoJS.enc.Base64),
          newPassword: CryptoJS.SHA256(this.form.newPassword).toString(CryptoJS.enc.Base64),
        })
      } else {
        this.$store.dispatch(ACTIONS.UPDATE_USER, {
          password: CryptoJS.SHA256(this.form.password).toString(CryptoJS.enc.Base64),
          newEmail: this.form.newEmail
        })
      }
    }
  }
}
</script>
