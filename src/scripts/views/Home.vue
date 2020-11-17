<template lang="pug">
  div
    Header
    HomeIntro
    HomeChill
</template>

<script>
  import HomeIntro from "../components/Home/HomeIntro";
  import HomeChill from "../components/Home/HomeChill";
  import Header from '../components/layout/Header'

  export default {
    name: 'Home',
    components: {Header, HomeChill, HomeIntro},
  }
</script>

<style scoped>

</style>
