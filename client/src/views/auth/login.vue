<template>
  <body class="authentication-bg pb-0" data-layout-config='{"darkMode":false}'>

  <div class="auth-fluid">
    <!--Auth fluid left content -->
    <div class="auth-fluid-form-box">
      <div class="align-items-center d-flex h-100">
        <div class="card-body">

          <!-- Logo -->
          <div class="auth-brand text-center text-lg-left">
            <a href="index.html" class="logo-dark">
              <span><img src="assets/images/logo-dark.png" alt="" height="18"></span>
            </a>
            <a href="index.html" class="logo-light">
              <span><img src="assets/images/logo.png" alt="" height="18"></span>
            </a>
          </div>

          <!-- title-->
          <h4 class="mt-0">Sign In</h4>
          <p class="text-muted mb-4">Enter your email address and password to access account.</p>

          <!-- form -->
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="emailaddress">Email address</label>
              <input v-model="users.email" class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" name="email">
            </div>
            <div class="form-group">
              <a href="" class="text-muted float-right"><small>Forgot your password?</small></a>
              <label for="password">Password</label>
              <input v-model="users.password" class="form-control" type="password" required="" id="password" placeholder="Enter your password" name="password">
            </div>
            <div class="form-group mb-3">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="checkbox-signin">
                <label class="custom-control-label" for="checkbox-signin">Remember me</label>
              </div>
            </div>
            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary btn-block" type="submit"><i class="mdi mdi-login"></i> Log In </button>
            </div>
          </form>
            <!-- Footer-->
            <footer class="footer footer-alt">
              <p class="text-muted">
                Don't have an account?
                <router-link :to="{ name: 'register'}">
                    <b class="text-muted ml-1">Sign Up</b>
                </router-link>
              </p>
            </footer>

        </div> <!-- end .card-body -->
      </div> <!-- end .align-items-center.d-flex.h-100-->
    </div>
    <!-- end auth-fluid-form-box-->

    <!-- Auth fluid right content -->
    <div class="auth-fluid-right text-center">
      <div class="auth-user-testimonial">
        <h2 class="mb-3">I love the color!</h2>
        <p class="lead"><i class="mdi mdi-format-quote-open"></i> It's a elegent templete. I love it very much! . <i class="mdi mdi-format-quote-close"></i>
        </p>
        <p>
        </p>
      </div> <!-- end auth-user-testimonial-->
    </div>
    <!-- end Auth fluid right content -->
  </div>
  <!-- end auth-fluid-->
  </body>
</template>

<script>
import { defineComponent, ref ,reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent ({
  setup() {
    const users = reactive({
      email: "",
      password: "",
    })

    const router = useRouter();
    const handleLogin = async () => {
      try {
        const result = await axios.post('http://web_moi_gioi_viec_lam.test/api/login', users)
        if (result.data.success === true ) {
          // localStorage.setItem('APP_DEMO_USER_TOKEN', result.data.token)
          await router.push({ name: "admin.users" })
          console.log("123");
        }
      } catch (e) {
          console.log('error');
      }
    }

    return {
      users,
      handleLogin,
    }
  },
});
</script>


