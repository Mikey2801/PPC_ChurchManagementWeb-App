<template>
   <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <userBar />
     <v-main style="padding-top: 10px;" class="bg-secondary">
    
   <v-sheet class="d-flex bg-secondary">
  <v-sheet class="me-auto bg-secondary">
    
  </v-sheet>

  <v-sheet class="bg-secondary mb-4">
    <v-col >
      <v-btn icon>
        <v-icon>mdi mdi-message-text-outline</v-icon>
      </v-btn>
    </v-col>
  </v-sheet>

  <v-sheet class="bg-secondary mb-4">
    <v-col >
      <v-btn icon>
        <v-icon>mdi mdi-bell-outline</v-icon>
      </v-btn>
    </v-col>
  </v-sheet>

    <v-sheet class="bg-secondary mb-4">
      <v-col>
   <v-expansion-panels>
    <v-expansion-panel title="Account" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
     
    </v-expansion-panel>
  </v-expansion-panels>
</v-col>
  </v-sheet>
</v-sheet>

    
   
     <v-sheet class="bg-white rounded-ts-xl" height="100%" width="100%">

      <v-container class="px-6 mt-n2" fluid>
        <h1 style="text-align: center; margin-bottom: 15px; margin-top: 7px;">PROFILE INFORMATION</h1>
        <h4 class="ml-4">Personal Information</h4>   
        <v-row class="pa-4">
          <v-col cols="3">
            <v-text-field v-model="lastname" label="Last Name" required></v-text-field>
            <v-text-field v-model="birthdate" label="Date of Birth" required></v-text-field>
            
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="firstname" label="First Name" required></v-text-field>
            <v-text-field v-model="age" label="Age" required></v-text-field>
           
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="middlename" label="Middle Name" required></v-text-field>
            <v-text-field v-model="phonenumber" label="Phone Number" required></v-text-field>
          </v-col>
           <v-col cols="3">
            <v-select :items="genderItems" v-model="gender" label="Gender" required></v-select>
            <v-text-field v-model="email" label="Email Address" required></v-text-field>
           
          </v-col>
          <v-col  cols=12>
          <h4 class="ml-2" style="margin-top: -3%">Address</h4>  
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="street" label="Street/Barangay" required></v-text-field>
             
          </v-col>
          <v-col cols="3">
           
             <v-text-field v-model="town" label="Town/City" required></v-text-field>
             
          </v-col>
          <v-col cols="3">
           
             <v-text-field v-model="province" label="Province" required></v-text-field>
          </v-col>
          <v-col  cols=12>
          <h4 class="ml-2" style="margin-top: -3%">Account Information</h4>  
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="username" label="Username" required></v-text-field>
          </v-col>
          <v-col cols="3">
           
             <v-text-field v-model="password" label="Password" required></v-text-field>
             
          </v-col>
         
        </v-row>
      <v-card-actions class="mt-n10">
  <v-spacer></v-spacer>
  <v-btn class="bg-black mr-1" @click="nextPage">Next</v-btn>
</v-card-actions>
      
      </v-container>                
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script setup>

import userBar from "@/components/userBar.vue";


</script>
<script>
export default {
  name: "userBar",
  components: {
    userBar,
  },
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
      email: "",
      username: "",
      password: ""
    }
  }
};
</script>
<style scoped>

</style>
  