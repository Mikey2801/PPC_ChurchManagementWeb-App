<template>
   <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.light.colors.primary }"
  >
    <SideBare />
     <v-main style="padding-top: 50px;">
    
   <v-sheet class="d-flex bg-primary">
  <v-sheet class="me-auto bg-primary">
    <v-row align-center="center">
      <v-col cols="1">
        <v-row align-center="center">
          <v-col cols="1">
            <v-icon prepend-icon="mdi mdi-magnify"></v-icon>
          </v-col>
          <v-col cols="5">
            <input type="text" v-model="input" prepend-inner-icon="mdi mdi-magnify" placeholder="Search here"/>
           
          </v-col>
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

      <v-container class="px-6 mt-n2" fluid>
        <h2 style="margin-bottom: 40px ;">Dashboard</h2>
        <v-row>
          <v-col cols="12" sm="3">
            
            <v-card
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="150"
            >
            
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-sheet
          class="pa-1 ma-2 mt-10"
          color="#6EDD9E"
        ></v-sheet>
                
                <div>
                  
                  <v-card-subtitle class="text-h mt-7">
                    Number of Churchgoers
                  </v-card-subtitle>
                  

                  <v-card-title class="text-h4 mt-5"> 86 </v-card-title>
                </div>
             
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="150"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-sheet
          class="pa-1 ma-2 mt-10"
          color="#6EDD9E"
        ></v-sheet>
                <div>
                  <v-card-subtitle class="text-h mt-7">
                    Total Church Members
                  </v-card-subtitle>

                  <v-card-title class="text-h4 mt-5">1,903</v-card-title>
                </div>
             
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card
             color="secondary"
              theme="light"
              class="rounded-xl"
              height="150"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                 <v-sheet
          class="pa-1 ma-2 mt-10"
          color="#6EDD9E"
        ></v-sheet>
                <div>
                  <v-card-subtitle class="text-h mt-7">
                     Number of Baptismal
                  </v-card-subtitle>
                   <v-card-subtitle>
                    Certificate Request
                  </v-card-subtitle>

                  <v-card-title class="text-h4 mt-5">1,005</v-card-title>
                 </div>
                
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card
              color="secondary"
              theme="light"
              class="rounded-xl"
              height="150"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                 <v-sheet
          class="pa-1 ma-2 mt-10"
          color="#6EDD9E"
        ></v-sheet>
                <div>
                  <v-card-subtitle class="text-h mt-7">
                    Person who apply as 
                  </v-card-subtitle>
                   <v-card-subtitle>
                    a ministry leader
                  </v-card-subtitle>

                  <v-card-title class="text-h4 mt-5">300</v-card-title>
                  </div>
               
              </div>
            </v-card>
          </v-col>

          <v-col>
            <v-card class="100%" height="450px">
              <v-card-item >
                <Doughnut />
                <v-card-subtitle align-center class="pt-4 text-center">
              <v-card-text class="py-0"> Numbers of Different Ages in  </v-card-text>
              <v-card-text class="py-0"> Church Members who are baptized </v-card-text>

                </v-card-subtitle>
              </v-card-item>
              <v-card-text class="py-0"> </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="8" class="mt-n4">
            <v-card class="mx-auto" height="350px">
              <v-card-item>
                <Bar />
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>                
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script setup>
import Bar from "@/components/Bar.vue";
import SideBare from "@/components/SideBare.vue";
import Doughnut from "@/components/Doughnut.vue";

</script>
<script>
export default {
  name: "BarChart",
  components: {
    SideBare,
    Bar,
    Doughnut,

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


</style>
