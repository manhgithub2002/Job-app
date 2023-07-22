<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <router-link :to=" { name: 'admin.posts.create'}">
            <a class="btn btn-success"  style="color: white">
              Create
            </a>
          </router-link>
        </div>
        <div class="card-body">
          <table  class="table table-striped" id="table-data" >
            <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Remotable</th>
              <th>Is Part-time</th>
              <th>Range Salary</th>
              <th>Date Range</th>
              <th>Status</th>
              <th>Is Pinned</th>
              <th>Created At</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="each in users" :key="each.id">
                <td>{{ each.id }}</td>
                <td>{{ each.job_title }}</td>
                <td>{{ each.location }}</td>
                <td>{{ each.remotable }}</td>
                <td>{{ each.is_partime }}</td>
                <td>{{ each.range_salary }}</td>
                <td>{{ each.range_date }}</td>
                <td>{{ each.status }}</td>
                <td>{{ each.is_pinned}}</td>
                <td>{{ each.created_at}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent ({
  setup() {
    const users = ref([]);
    const getUsers = () => {
      axios.get("http://web_moi_gioi_viec_lam.test/api/posts")
          .then((response) => {
            users.value = response.data.data;
            console.log(users.value[0].company_id);
          })
          .catch((error) => {
            // xử trí khi bị lỗi
            console.log(error);
          });
    }
    getUsers();
    return {
      users
    }
  },
});
</script>