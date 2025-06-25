<template>
   <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <userBar />
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
              height="250"
              width="250"
            >
          
            <div class="d-flex flex-no-wrap justify-space-between">
         <v-sheet
          class="pa-1 ma-2 mt-10 me-auto"
          color="#6EDD9E"
        ></v-sheet>
                <div>
                  <v-card-subtitle class="text-h mt-7">
                    BAPTISMAL CLASS
                  </v-card-subtitle>
                  <v-icon size="3rem">mdi mdi-newspaper-variant-multiple-outline</v-icon> 
                  <br><br>
                   <v-card-subtitle>
                    Discover the significance
                  </v-card-subtitle>
                  <v-card-subtitle>
                    of attend now to learn more! 
                  </v-card-subtitle>
                  <v-card-subtitle>
                    Baptism in our class -
                  </v-card-subtitle>
                  <v-card-subtitle>
                    attend now to learn more! 
                  </v-card-subtitle>
                  </div>
              </div>
            </v-btn>
          </v-col>
           <v-col cols="1" sm="4">
            <v-btn
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="250"
              width="250"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
         <v-sheet
          class="pa-1 ma-2 mt-10 me-auto"
          color="#6EDD9E"
        ></v-sheet>
                <div>
                  <v-card-subtitle class="text-h mt-7">
                    BAPTISMAL EVENT
                  </v-card-subtitle> 
                  <v-icon size="3rem">mdi mdi-calendar-check</v-icon> 
                  <br><br>
                   <v-card-subtitle>
                    Ready to take the plunge? 
                  </v-card-subtitle>
                  <v-card-subtitle>
                    Sign up or fill out the form  
                  </v-card-subtitle>
                  <v-card-subtitle>
                   to participate in baptism event
                  </v-card-subtitle>
                  <v-card-subtitle>
                    and dive into a meaningful
                  </v-card-subtitle>
                  <v-card-subtitle>
                    journey of faith.
                  </v-card-subtitle>
                  </div>
              </div>
            </v-btn>
          </v-col>
          <v-col cols="1" sm="4">
            <v-btn
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="250"
              width="250"
            >
            <div class="d-flex flex-no-wrap justify-space-between">
         <v-sheet
          class="pa-1 ma-2 mt-10 me-auto"
          color="#6EDD9E"
        ></v-sheet>
                <div class="sheet">
                  <v-card-subtitle class="text-h mt-7">
                    CHURCH MEMBERS
                  </v-card-subtitle>  
                  <v-icon size="3rem">mdi mdi-application-edit-outline</v-icon> 
                  <br><br>
                   <v-card-subtitle>
                  Already baptized? Participate
                  </v-card-subtitle>
                  <v-card-subtitle>
                  in church events, even if you're
                  </v-card-subtitle>
                  <v-card-subtitle>
                  not undergoing baptism again!
                  </v-card-subtitle>
                 
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
