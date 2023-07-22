<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <router-link :to="{ name: 'admin.managements.create'}">
            <a class="btn btn-success" style="color: white">
              Create
            </a>
          </router-link>
        </div>
        <div class="card-body">
          <table class="table table-hover table-centered mb-0" id="table-data">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Info</th>
              <th>Position</th>
              <th>City</th>
              <th>Xóa/Sửa</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="each in users" :key="each.id">
                <td>{{ each.id }}</td>
                <td>{{ each.name }}</td>
                <td>{{ each.email }}</td>
                <td>{{ each.position }}</td>
                <td>{{ each.city }}</td>
                <td>
                  <router-link :to="{ name: 'admin.managements.edit', params: { id: each.id}}">
                    <a href="" class="action-icon float-right">
                      <i class="mdi mdi-pencil"></i>
                    </a>
                  </router-link>
<!--                  <router-link :to="{ name: 'admin.managements.destroy', params: { id:each.id }}">-->
                    <button @click="destroy(each.id)" class="action-icon border-0">
                      <i class="mdi mdi-delete"></i>
                    </button>
<!--                  </router-link>-->

                </td>
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
import {useRoute, useRouter} from "vue-router";

export default defineComponent ({
  setup() {
    const users = ref([]);
    const getAdmins = () => {
      axios.get("http://web_moi_gioi_viec_lam.test/api/admin")
          .then((response) => {
            users.value = response.data.data.data;
            console.log(users.value.data[0]);
          })
          .catch((error) => {
            // xử trí khi bị lỗi
            console.log(error);
          });
    }
    getAdmins();
    const route = useRoute();
    return {
      users,
    }
  },
  methods: {
    destroy(id) {
      const router = useRouter();
      axios.delete(`http://web_moi_gioi_viec_lam.test/api/admin/destroy/${id}`)
          .then((response) => {
            router.push({ name: "admin.managements" });
          })
          .catch((error) => {
            alert("123");
          })

    },
  },
});
</script>