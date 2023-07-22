<template>
  <div class="wrapper">
    <Sidebar />
    <div class="content-page">
      <div class="content">
        <Header />
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="page-title-box">
                <h4 class="page-title">Posts</h4>
              </div>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Sidebar from "@/components/sidebar.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Footer,
    Sidebar,
    Header
  }
}
</script>