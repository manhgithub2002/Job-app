<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Create</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="createUsers()">
            <div class="form-group">
              <label>Admin name</label>
              <input type="text" class="form-control" name="name" v-model="name">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" name="email" v-model="email">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="password" v-model="password">
            </div>
            <div class="form-row">
              <div class="form-group col-4">
                <div class="mt-3 form-inline">
                  <div class="custom-control custom-radio mr-3">
                    <input type="radio" id="customRadio1" name="gender" class="custom-control-input" value="0" checked v-model="gender">
                    <label class="custom-control-label" for="customRadio1">Nam</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="gender" class="custom-control-input" value="1" v-model="gender">
                    <label class="custom-control-label" for="customRadio2">Nữ</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" class="form-control" name="phone" v-model="phone">
            </div>

            <div class="form-group">
<!--              <router-link :to="{ name: 'admin.managements'}">-->
                <button class="btn btn-success ">
                  Create
                </button>
<!--              </router-link>-->

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref ,reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent ({
  setup() {
    const users = reactive({
      name: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
    })

    const router = useRouter();
    const createUsers = () => {
      axios.post("http://web_moi_gioi_viec_lam.test/api/admin/store", users)
          .then((response) => {
            router.push({ name: "admin.managements" });
            console.log(response);
          })
          .catch((error) => {

          })
    }

    return {
      ...toRefs(users),
      createUsers
    }
  },
});
</script>