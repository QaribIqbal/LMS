<script setup lang="ts">
  import Footer from '../components/AppFooter.vue';
</script>
<template>
  <v-card class="border-0 m-0 fill-height">
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          />
        </v-list>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item
            link
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            to="/home"
            value="myfiles"
          />
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Shared with me"
            value="shared"
          />
          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main class="smooth">
        <!-- <H1>Helloe</H1> -->
        <body class="smooth">
          <router-view />
        </body>
        <div class="">
          <Footer />
        </div></v-main>
    </v-layout>
  </v-card>
</template>
<style>

.smooth{
  overflow: hidden;
}
</style>
