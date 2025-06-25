<template>
   <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <SideBare />
     <v-main class="bg-secondary ">
      <v-sheet class="d-flex ma-7 bg-secondary">
        <v-sheet class="me-auto bg-secondary">
        </v-sheet>

        <v-sheet class="bg-secondary">
       <v-col>
       <v-btn icon>
        <v-icon>mdi mdi-message-text-outline</v-icon>
      </v-btn>
    </v-col>
  </v-sheet>
  <v-sheet class="bg-secondary">
    <v-col >
      <v-btn icon>
        <v-icon>mdi mdi-bell-outline</v-icon>
      </v-btn>
    </v-col>
  </v-sheet>
  <v-sheet class="bg-secondary">
      <v-col>
   <v-expansion-panels>
    <v-expansion-panel  img="1.jpg" title="Account" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
    </v-expansion-panel>
  </v-expansion-panels>
</v-col>
  </v-sheet>
</v-sheet>
       
        <v-sheet height="100%" width="100%"  class="pa-5" >
          <p class="text">
          <h1>ONLINE SERVICES OFFERED</h1> <br>
        <h2>Select your registration form preference</h2>
       </p>
       <v-row>
        
       <v-row class="pa-1 ma-2 mt-10 ml-15">
           <v-col cols="1" sm="4">
            <v-btn
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="350"
              width="250"
            >
          
            <div class="d-flex flex-no-wrap justify-space-between">
        
                <div>
                  <v-card-subtitle class="text-h mt-3 mb-15">
                    <h2>Music Team</h2>
                  </v-card-subtitle>
                    <v-btn class="bg-primary mt-15">Click Here</v-btn>
                 
                  </div>
              </div>
            </v-btn>
          </v-col>
           <v-col cols="1" sm="4">
            <v-btn
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="350"
              width="250"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
         
                <div>
                    <v-card-subtitle class="text-h mt-3 mb-15">
                    <h3>Children Ministry</h3>
                    <h3>Teacher</h3>
                  </v-card-subtitle> 
                   <v-btn class="bg-primary mt-15">Click Here</v-btn>
                  </div>
              </div>
            </v-btn>
          </v-col>
          <v-col cols="1" sm="4">
            <v-btn
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="350"
              width="250"
            >
            <div class="d-flex flex-no-wrap justify-space-between">
         
                <div class="sheet">
                  <v-card-subtitle class="text-h mt-3 mb-15">
                    <h2>Food Team</h2>
                  </v-card-subtitle>  
                   <v-btn class="bg-primary mt-15">Click Here</v-btn>
                 
                  </div>
              </div>
            </v-btn>
          </v-col>
        </v-row>
   </v-row>
      </v-sheet> 
    </v-main>
  </v-app>
</template>
<script setup>

import SideBare from "@/components/SideBare.vue";


</script>
<script>
export default {
  name: "SideBare",
  components: {
    SideBare,
  },
};
</script>

<style scoped>
.input-field {
  display: flex;
  width: 710px;
  height: 40px;
  margin: 10px 10px;
  padding: 0 65px;
  background: white;
  font-size: 16px;
  border-radius: 100px;
  box-shadow: rgba(249, 249, 249, 0.25) 0px 2px 5px -1px, rgba(247, 247, 247, 0.3) 0px 1px 3px -1px;
}

.text{
  text-align: center;
  margin-top: 10px;
}
.sheet{
  padding-right: 20%;
}
</style>
