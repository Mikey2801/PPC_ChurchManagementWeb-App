<template>
  <v-navigation-drawer v-model="drawer" color="#FAF8F8"  width="250">
    <v-sheet color="#FAF8F8" class="pa-10 rounded-te-xl text-center">
      <v-progress-circular
        model-value="100"
        color="#FAF8F8"
        :size="100"
        :width="2"
        class=""
      >
        <v-avatar size="85">
          <v-img src="3.jpg" alt="John"></v-img>
        </v-avatar>
      </v-progress-circular>

      <div class="mt-4">
      <v-sheet class="mb-6 text-caption justify-center bg-primary">
      <v-col cols="9" class="ml-6">
        <v-select v-model="userType" :items="['Churchgoer', 'Admin']">Churchgoer</v-select>
      </v-col>
        </v-sheet>
      </div>
    </v-sheet>

    <router-view>
      <v-list style="margin-top: -20%;" :transition="false">
        <!-- Render churchgoer links dynamically -->
        <router-link v-for="(item, i) in churchgoerLinks" :key="i" :to="item.route" class="text-decoration-none" ripple="false">
          <v-list-item :ripple="false" :class="{ 'active-link': $route.path === item.route }"> 
            <template v-if="$route.path === item.route" v-slot:prepend> 
              <v-icon :icon="item.icon"> </v-icon>
            </template>
            <v-list-item-title :class="{ 'inactive-link': $route.path !== item.route }" v-text="item.text"></v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </router-view>

    <v-row align-content="center" justify="center">
      <!-- Logout Button -->
      <v-btn color="#6EDD9E" prepend-icon="mdi mdi-power" class="pa-3 ma-10" style="margin-top: 20%;" @click="logout">Log out</v-btn>
    </v-row>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

// Define churchgoer links
const churchgoerLinks = [
  { text: "Home", icon: "mdi mdi-home", route: "/home" },
  { text: "Services", icon: "mdi mdi-view-dashboard-outline", route: "/service" },
  { text: "Donation", icon: "mdi mdi-view-dashboard-outline", route: "/donation" },
  { text: "Profile", icon: "mdi mdi-view-dashboard-outline", route: "/profile" },

  // Add more churchgoer links here
  
];
 const logout = () => {
  // Redirect to the login page
  router.push('/login');
};
</script>

<style scoped>
/* Styles for ChurchgoerNavigationDrawer */
.text-decoration-none {
  text-decoration: none;
  color: inherit;
}
.active-link {
  background-color: #E6FDD7; /* Change this to the desired active link background color */
  color: #000000; /* Change this to the desired active link text color */
  font-weight: bolder; /* Make the active text bolder */
}
.inactive-link {
  text-align: left; /* Align the inactive link text to the top of the active link */
  margin-left: 56px;
}
</style>
