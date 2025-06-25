<template>
  <v-img src="sign-in-bg.png">
    <v-container class="fill-height d-flex justify-center align-center">
      <v-card class="w-50 " style="background-color: rgb(243, 238, 238, 0.3); padding: 20px; border: 1px solid #ccc; border-radius: 5%;">
        <v-card-title class="fill-height d-flex justify-center align-center pa-6">Login</v-card-title>
        <v-card-text>
          <v-select v-model="userType" :items="['Churchgoer', 'Admin']"></v-select>
          <v-text-field v-model="username" label="Username"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <div class="d-flex align-center justify-space-between">
            <v-checkbox v-model="rememberMe" label="Remember Me"></v-checkbox>
            <router-link to="#">Forget Password?</router-link>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="login" class="bg-black ml-5" style="width: 90%; height: 3rem; align-content: top; margin-top: -17%;">Login</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-card-actions class="ml-10" style="align-content: top; margin-top: -20%;">Don't have an Account?</v-card-actions>
          <router-link to="/register" class="custom-link">Register</router-link>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      userType: null,
      username: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    async login() {
      // Perform authentication logic here
      // For demonstration purposes, we'll simulate a delay to mimic an async operation
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating async operation
      if (this.username === 'admin' && this.password === 'admin') {
        // Redirect to admin dashboard
        this.$router.push('/dashboard');
        this.userType = 'Admin';
      } else if (this.username === 'user' && this.password === 'user') {
        // Redirect to user dashboard
        this.$router.push('/home');
        this.userType = 'Churchgoer';
      } else {
        // Handle invalid credentials
        console.error("Invalid username or password");
        // You can display an error message to the user, e.g., using a notification component
      }
    }
  }
};
</script>

<style scoped>
.fill-height {
  height: 100%;
}
.custom-link {
  color: black;
  font-weight: bolder;
  text-decoration: none;
  align-content: top;
  margin-top: -20%;
}
</style>
