<template>

  <v-img src="sign-in-bg.png">
    <v-container class="fill-height d-flex justify-center align-center">
      <v-card class="w-75" style="background-color: rgba(243, 238, 238, 0.3); padding: 20px; border: 1px solid #ccc; border-radius: 5%;">
        <v-card-title>Registration Form</v-card-title>
        <v-card-subtitle class="pb-7">
          Please fill out the following information to register.
        </v-card-subtitle>
        
        <v-card-subtitle class="sub">
          Step 1 of 2
        </v-card-subtitle>
        <v-subheader class="ml-3">
          Personal information
        </v-subheader>
        <v-divider class="divi"></v-divider>
        
        <v-row class="pa-4">
          <v-col cols="4">
            <v-text-field v-model="lastname" label="Last Name" required></v-text-field>
            <v-text-field v-model="birthdate" label="Date of Birth" required></v-text-field>
            <v-text-field v-model="street" label="Street/Barangay" required></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="firstname" label="First Name" required></v-text-field>
            <v-select :items="genderItems" v-model="gender" label="Gender" required></v-select>
            <v-text-field v-model="town" label="Town/City" required></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="middlename" label="Middle Name" required></v-text-field>
            <v-text-field v-model="phonenumber" label="Phone Number" required></v-text-field>
            <v-text-field v-model="province" label="Province" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="email" label="Email" required></v-text-field>
          </v-col>
        </v-row>
        
         <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="bg-black mr-1 mt-4" @click="nextPage">Next</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      gender: null,
      genderItems: ['Male', 'Female', 'Prefer not to say'],
      lastname: "",
      firstname: "",
      middlename: "",
      birthdate: new Date().toISOString().substr(0, 10),
      street: "",
      town: "",
      province: "",
      phonenumber: "",
      email: ""
    };
  },
  methods: {
    nextPage() {
      this.$router.push('/next');
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
