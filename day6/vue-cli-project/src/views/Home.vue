<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Header/> -->
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Header from "@/components/Header.vue";
import Search from "../components/Search.vue";

export default {
  name: "home",
  components: {
    // Header,
    Search
    // HelloWorld
  }
};
</script>
