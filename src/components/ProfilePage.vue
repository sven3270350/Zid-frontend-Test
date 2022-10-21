<template lang="">
  <form @submit.prevent="onSubmit">
    <!-- First and Last Name Row -->
    <div class="mt-5">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="">Name:</label><input class="form-control" placeholder="Enter name" type="text" v-model="v$.form.name.$model">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="">Gender:</label>
          <select class="form-control" placeholder="Select Gender" v-model="v$.form.gender.$model">
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.gender.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="">DOB:</label>
          <input class="form-control" placeholder="Enter DOB" type="date" v-model="v$.form.dob.$model">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.dob.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>
      <!-- Submit Button -->
      <div class="buttons-w">
        <button class="btn btn-primary" :disabled="v$.form.$invalid">Signup</button>
      </div>
    </div>
  </form>
</template>
<script>
  import useVuelidate from '@vuelidate/core'
  import { required } from '@vuelidate/validators'

  export default {

    setup () {
      return { v$: useVuelidate() }
    },

    data() {
      return {
        form: {
          name: '',
          gender: '',
          DOB: ''
        }
      }
    },

    validations() {
      return {
        form: {
          name: { 
            required
          },
          gender: { 
            required
          },
          dob: { 
            required
          }
        },
      }
    },
  }
</script>
<style scoped>
  form {
    padding-left: 350px;
  }
  .form-group > * {
    margin-bottom: 10px;
  }
  .error-msg {
    color: red;
  }
</style>