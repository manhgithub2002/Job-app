<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left-side-menu">

    <!-- LOGO -->
    <a href="index.html" class="logo text-center logo-light">
        <span class="logo-lg">
            <img src="assets/images/logo.png" alt="" height="16">
        </span>
      <span class="logo-sm">
            <img src="assets/images/logo_sm.png" alt="" height="16">
        </span>
    </a>

    <!-- LOGO -->
    <a href="index.html" class="logo text-center logo-dark">
        <span class="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="16">
        </span>
      <span class="logo-sm">
            <img src="assets/images/logo_sm_dark.png" alt="" height="16">
        </span>
    </a>

    <div class="h-100" id="left-side-menu-container" data-simplebar>

      <!--- Sidemenu -->
      <ul class="metismenu side-nav">

        <li class="side-nav-title side-nav-item">Navigation</li>

        <li class="side-nav-item">
          <router-link :to="{ name: 'admin.users'}">
            <a href="" class="side-nav-link" key="admin.users">
              <i class="uil-home-alt"></i>
                <span> User </span>
            </a>
          </router-link>
        </li>

        <li class="side-nav-title side-nav-item">Apps</li>

        <li class="side-nav-item">
          <router-link :to="{ name: 'admin.posts'}">
            <a href="" class="side-nav-link" key="admin.posts">
              <i class="uil-calender"></i>
                <span> Post </span>
            </a>
          </router-link>
        </li>
        <li class="side-nav-item">
          <router-link :to="{ name: 'admin.managements'}">
            <a class="side-nav-link" key="admin.managements">
              <i class="uil-server-network"></i>
              <span> Admin Management </span>
            </a>
          </router-link>
        </li>
        <li class="side-nav-item">
          <a href="apps-chat.html" class="side-nav-link">
            <i class="uil-comments-alt"></i>
            <span> Chat </span>
          </a>
        </li>
      </ul>

      <!-- End Sidebar -->

      <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->
  </div>
  <!-- Left Sidebar End -->
</template>