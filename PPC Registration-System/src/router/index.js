
// Import necessary components and Vue Router functions
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ChurchgoerRecord from '../views/ChurchgoerRecord.vue';
import Attendance from '../views/Attendance.vue';
import BaptismalClassList from '../views/BaptismalClassList.vue';
import BaptismalApplication from '../views/BaptismalApplication.vue';
import ChurchMemberProfile from '../views/ChurchMemberProfile.vue';
import CertificationRequest from '../views/CertificationRequest.vue';
import MinistryRoster from '../views/MinistryRoster.vue';
import SundaySchool from '../views/SundaySchool.vue';
import Login from '../components/sign/Login.vue';
import Register from '../components/sign/Register.vue';
import Next from '../components/sign/Next.vue';
import Home from '../views/churchgoer/Home.vue';
import Service from '../views/churchgoer/Service.vue';
import Donation from '../views/churchgoer/Donation.vue';
import Profile from '../views/churchgoer/Profile.vue';
import Donate from '../views/Donate.vue';
import Baptism_Class from '../views/Attendance/Baptism_Class.vue';
import Mass_Schedule from '../views/Attendance/Mass_Schedule.vue';
import Ministry_Attendance from '../views/Attendance/Ministry_Attendance.vue';

// Define your routes
const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/churchgoer-record', component: ChurchgoerRecord },
  { path: '/baptismal-class-list', component: BaptismalClassList },
  { path: '/baptismal-application', component: BaptismalApplication },
  { path: '/church-member-profile', component: ChurchMemberProfile },
  { path: '/certification-request', component: CertificationRequest },
  { path: '/ministry-roster', component: MinistryRoster },
  { path: '/sunday-school', component: SundaySchool },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/next', component: Next },
  { path: '/home', component: Home },
  { path: '/service', component: Service },
  { path: '/donation', component: Donation },
  { path: '/profile', component: Profile },
  { path: '/donate', component: Donate },
  { path: '/attendance', component: Attendance },
  { path: '/baptism_class', component: Baptism_Class },
  { path: '/mass_schedule', component: Mass_Schedule },
  { path: '/ministry_attendance', component: Ministry_Attendance },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Export the router instance
export default router;