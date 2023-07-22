<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <form  class="form-horizontal" id="form-filter">
            <div class="form-group">
              <label for="Role">Role</label>
              <div class="col-3">
                <select class="form-control select-filter" name="role" id="role">
                  <option selected>All</option>
                  <option v-for="each in roles" value="{{ each }}">
                    {{ each }}
                  </option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="card-body">
          <table class="table table-hover table-centered mb-0">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Info</th>
              <th>Role</th>
              <th>Position</th>
              <th>City</th>
              <th>Company Name</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="each in users" :key="each.id">
                <td>{{ each.id }}</td>
                <td>{{ each.name }}</td>
                <td>{{ each.email }}</td>
                <td>{{ each.role }}</td>
                <td>{{ each.position }}</td>
                <td>{{ each.city }}</td>
                <td>{{ each.company.name }}</td>
                <td>
                  <button @click="destroy(each.id)" class="action-icon border-0">
                    <i class="mdi mdi-delete"></i>
                  </button>

                </td>
              </tr>
            </tbody>
          </table>
          <br>
          <nav>
            <ul class="pagination pagination-rounded mb-0">
<!--              {{ $data->links() }}-->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { defineComponent, ref } from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineComponent ({
  setup() {
    const users = ref([]);
    const roles = ref([]);
    const getAdmins = () => {
      axios.get("http://web_moi_gioi_viec_lam.test/api/users")
          .then((response) => {
            console.log(response.data.data.roles);
            users.value = response.data.data.data;
            roles.value = response.data.data.roles;
          })
          .catch((error) => {
            // xử trí khi bị lỗi
            console.log(error);
          });
    }
    getAdmins();
    return {
      users,
      roles,
    }
  },
  methods: {
    destroy(id) {
      const router = useRouter();
      axios.delete(`http://web_moi_gioi_viec_lam.test/api/admin/destroy/${id}`)
          .then((response) => {
            router.push({ name: "admin.users" });
          })
          .catch((error) => {
            alert("123");
          })

    },
  }
});
</script>