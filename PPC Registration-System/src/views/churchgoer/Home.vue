<template>
   <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <userBar />
    <v-main style="padding-top: 50px;">
    
   <v-sheet class="d-flex bg-primary">
  <v-sheet class="me-auto bg-primary">
    <v-row align-center="center">
      <v-col cols="1">
        <v-row align-center="center">
          <v-col cols="1">
            <v-icon prepend-icon="mdi mdi-magnify"></v-icon>
          </v-col>
          <!-- <v-col cols="5">
            <input type="text" v-model="input" prepend-inner-icon="mdi mdi-magnify" placeholder="Search here"/>
           
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>

  <v-sheet class="bg-primary">
    <v-col>
      <v-btn icon>
        <v-icon>mdi mdi-message-text-outline</v-icon>
      </v-btn>
    </v-col>
  </v-sheet>

  <v-sheet class="bg-primary">
    <v-col >
      <v-btn icon>
        <v-icon>mdi mdi-bell-outline</v-icon>
      </v-btn>
    </v-col>
  </v-sheet>

    <v-sheet class="bg-primary">
      <v-col>
   <v-expansion-panels>
    <v-expansion-panel  img="1.jpg" title="Account" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
     
    </v-expansion-panel>
  </v-expansion-panels>
</v-col>
  </v-sheet>
</v-sheet>
     <v-sheet class="mx-6 pa-7 bg-white rounded-ts-xl"
            height="100%"
            width="100%"
          >
         
      <v-container class=" bg-image" fluid  >
        <p class="text">
          <h3>Brethren, welcome to</h3><br>
          <h1>Pamukid Presbyterian Church</h1><br>
          <h3>Transforming Lives, Restoring Hope,</h3><br>
          <h3>You were made for more!</h3>
          <v-btn class="bg-primary mt-15"> Learn More</v-btn>
        </p>
        
       
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
};
</script>
<style scoped>

input {
  display: flex;
  width: 650px;
  height:  50px;
 margin: 10px 10px ;
  padding: 0 65px;
  background: white;

  font-size: 16px;
  border-radius: 100px;
  box-shadow: rgba(249, 249, 249, 0.25) 0px 2px 5px -1px,
    rgba(247, 247, 247, 0.3) 0px 1px 3px -1px;
}

.bg-image {
  position: relative; /* Ensures background stays behind content */
  background-image: url("sign-in-bg.png"); /* Replace with your image path */
  background-size:cover; /* Fills the container */
  background-repeat: no-repeat; /* Prevents image tiling */
  height: 100%; /* Adjust height as needed */
  border-radius: 15px;
}

.text{
  text-align: center;
  margin-top: 150px;
}

</style>