<template >
  <v-app>
    <SideBare />
    <v-main class="bg-secondary ">
      <v-sheet class="d-flex ma-7 bg-secondary">
        <v-sheet class="bg-secondary">
          <v-col>
            <h1>Churchgoer Record</h1>
          </v-col>
        </v-sheet>
        <v-sheet class="me-auto bg-secondary">
          <v-row align-content="center">
            <v-col cols="1">
              <v-row align-content="center">
                <v-col cols="1">
                  <v-icon prepend-icon="mdi mdi-magnify"></v-icon>
                </v-col>
                <v-col cols="5">
                  <input
                    type="text"
                    v-model="search"
                    prepend-inner-icon="mdi mdi-magnify"
                    placeholder="Search here"
                    class="input-field"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-sheet>
      </v-sheet>
      <v-sheet height="100%" width="100%" class="pa-5">
        <v-sheet >
          <!-- Filter dropdown -->
          <v-row align-content="center" justify="center" class="mb-2">
            <v-col cols="2"  >
              <v-select
                v-model="selectedFilter"
                :items="filterOptions"
                label="Filter by"
                hide-details
                class="bg-ft"
              ></v-select>
            </v-col>
            <v-spacer></v-spacer>
             <!-- Edit and Delete icons -->
             <v-col cols="auto">
            <v-col cols="auto" class="pa-1">
                  <v-icon @click="editItem(item)" class="bg-white pa-5 border"> mdi mdi-pencil-outline</v-icon>
                  <v-icon @click="deleteItem(item)" class="bg-trash pa-5"> mdi mdi-trash-can-outline</v-icon>
                </v-col>
                </v-col>
          </v-row>

          <v-table>
            <thead>
              <tr filter-by="['name', 'gender']" :sortable="true">
                <th v-for="field in tableFields" :key="field.key" class="text-left bg-th" filter-by="['name', 'gender']" :sortable="true">
                  {{ field.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredChurchgoers" :key="item.name">
                <td v-for="field in tableFields" :key="field.key">
                  {{ item[field.key] }}
                </td>
                
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import SideBare from "@/components/SideBare.vue";

export default {
  components: {
    SideBare,
  },
  data() {
    return {
     churchgoer: [
  { id: 1, applicationDate: '2022-02-14', name: 'John Doe', birthday: '1990-01-15', gender: 'Male', contactNo: '1234567890', streetBarangay: 'Sample St', townCity: 'Sample City', province: 'Sample Province' },
  { id: 2, applicationDate: '2022-02-15', name: 'Jane Smith', birthday: '1985-03-20', gender: 'Female', contactNo: '9876543210', streetBarangay: 'Test St', townCity: 'Test City', province: 'Test Province' },
  { id: 3, applicationDate: '2022-02-16', name: 'Bob Johnson', birthday: '1988-07-10', gender: 'Male', contactNo: '5556667777', streetBarangay: 'Main St', townCity: 'Big City', province: 'Great Province' },
  { id: 4, applicationDate: '2022-02-17', name: 'Alice Brown', birthday: '1992-12-25', gender: 'Female', contactNo: '9998887777', streetBarangay: 'Downtown St', townCity: 'Metropolis', province: 'Central Province' },
  { id: 5, applicationDate: '2022-02-18', name: 'Michael Green', birthday: '1982-05-18', gender: 'Male', contactNo: '3332221111', streetBarangay: 'Green St', townCity: 'Nature City', province: 'Eco Province' },
  { id: 6, applicationDate: '2022-02-19', name: 'Eva White', birthday: '1995-09-03', gender: 'Female', contactNo: '7778889999', streetBarangay: 'Sunset St', townCity: 'Sun City', province: 'Sunny Province' },
  { id: 7, applicationDate: '2022-02-20', name: 'Charlie Black', birthday: '1980-02-28', gender: 'Male', contactNo: '4445556666', streetBarangay: 'Shadow St', townCity: 'Moon City', province: 'Night Province' },
],
      tableFields: [
        { key: 'id', label: 'ID' },
        { key: 'applicationDate', label: 'Application Date' },
        { key: 'name', label: 'Name' },
        { key: 'birthday', label: 'Birthday' },
        { key: 'gender', label: 'Gender' },
        { key: 'contactNo', label: 'Contact No.' },
        { key: 'streetBarangay', label: 'Street/Barangay' },
        { key: 'townCity', label: 'Town/City' },
        { key: 'province', label: 'Province' },
      ],
      filterOptions: ['name', 'age', 'applicantDate'],
      selectedFilter: null,
    };
  },
  computed: {
    filteredChurchgoers() {
      // Implement your filtering logic based on selectedFilter
      return this.churchgoer;
    },
  },
  methods: {
    applyFilter() {
      // Implement logic to filter data based on selectedFilter
    },
    editItem(item) {
      // Implement logic to edit item
    },
    deleteItem(item) {
      // Implement logic to delete item
    },
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
</style>
