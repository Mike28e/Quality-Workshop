<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <v-text-field
      v-model="account"
      label="Account Type"
      disabled
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Import image"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Option"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Apply
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
</template>

<script>
  export default {
    props: ['UserFullName','UserEmail','UserType'],
    data: function() {
      return {
        name: this.UserFullName,
        valid: true,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 30) || 'Name must be less than 30 characters',
        ],
        email: this.UserEmail,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        account: this.UserType,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        checkbox: false,
      }
    },

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>