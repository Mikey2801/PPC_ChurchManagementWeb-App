<template>
  <v-navigation-drawer v-model="drawer" color="#FAF8F8" class="rounded-e-xl" width="320">
    <v-sheet color="#FAF8F8" class="pa-10 rounded-te-xl text-center">
      <v-progress-circular
        model-value="100"
        color="#FAF8F8"
        :size="100"
        :width="2"
        class=""
      >
        <v-avatar size="85">
          <v-img src="1.jpg" alt="John"></v-img>
        </v-avatar>
      </v-progress-circular>

      <div class="">  
        <!-- <v-select v-model="userType" :items="['Churchgoer', 'Admin']">Admin</v-select>
       -->
      </div>
    </v-sheet>

    <router-view>
      <v-list class="pa-5" :transition="false">
        <!-- Render admin links dynamically -->
        <router-link v-for="(item, i) in adminLinks" :key="i" :to="item.route" class="text-decoration-none" ripple="false">
          <v-list-item :ripple="false" :class="{ 'active-link': $route.path === item.route }">
            <template v-if="$route.path === item.route" v-slot:prepend> 
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title :class="{ 'inactive-link': $route.path !== item.route }" v-text="item.text"></v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </router-view>

    <v-row align-content="center" justify="center">
      <!-- Logout Button -->
      <v-btn color="#6EDD9E" prepend-icon="mdi mdi-power" class="pa-3 ma-10">Log out</v-btn>
    </v-row>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

// Define admin links
const adminLinks = [
  { text: "Dashboard", icon: "mdi mdi-view-dashboard-outline", route: "/dashboard" },
  { text: "Churchgoer Record", icon: "mdi mdi-list-box-outline", route: "/churchgoer-record" },
  { text: "Baptismal Class List", icon: "mdi mdi-newspaper-variant-multiple-outline", route: "/baptismal-class-list" },
  { text: "Baptismal Application", icon: "mdi mdi-calendar-check", route: "/baptismal-application" },
  { text: "Church Member Profile", icon: "mdi mdi-application-edit-outline", route: "/church-member-profile" },
  { text: "Certification Request", icon: "mdi mdi-file-account", route: "/certification-request" },
  { text: "Ministry Roster", icon: "mdi mdi-account-check-outline", route: "/ministry-roster" },
  { text: "Sunday School", icon: "mdi mdi-heart-outline", route: "/sunday-school" },
  { text: "Donation", icon: "mdi mdi-heart-outline", route: "/donate" },
  { text: "Attendance Monitoring", icon: "mdi mdi-calendar", route: "/attendance" },
];
</script>

<style scoped>
/* Styles for AdminNavigationDrawer */
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