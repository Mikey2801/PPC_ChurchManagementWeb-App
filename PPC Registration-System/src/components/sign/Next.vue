<template>
  <v-img src="sign-in-bg.png">
    <v-container class="fill-height d-flex justify-center align-center pa-10">
      <v-card class="w-75" style="background-color: rgba(243, 238, 238, 0.3); padding: 20px; border: 1px solid #ccc; border-radius: 5%;">
        <v-card-title>Registration Form</v-card-title>
        <v-card-subtitle class="pb-7">
          Please fill out the following information to register.
        </v-card-subtitle>
        
        <v-card-subtitle class="sub">
          Step 2 of 2
        </v-card-subtitle>
        <v-subheader class="ml-3">
          Create an Account
        </v-subheader>
        <v-divider class="divi"></v-divider>
        
        <v-row class="pa-4">
          <v-col cols="16">
            <v-text-field v-model="username" label="Username" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password"></v-text-field>
            <v-text-field v-model="confirm" label="Confirm Password" type="password"></v-text-field>
            <v-select v-model="userType" :items="['Churchgoer', 'Admin']" label="Account Type"></v-select>
          </v-col>
        </v-row>
        
        <v-card-actions>
          <v-btn class="bg-black mr-1" @click="previous">Previous</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="bg-black mr-1" @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirm: "",
      userType: null
    }
  },
  methods: {
    previous() {
      this.$router.push('/register');
    },
    submit() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.sub {
  font-weight: bolder;
}
.divi {
  margin-bottom: 30px;
  margin-top: 15px;
  font-weight: bold;
}
</style>
