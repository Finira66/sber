<template lang="pug">
  div
    Header
    Preview
    HomeArticles
</template>

<script>
  import Header from '../components/layout/Header'
  import Preview from '../components/Preview/Preview'
  import HomeArticles from '../components/Home/HomeArticles'

  export default {
    name: 'Chillout',
    components: {HomeArticles, Preview, Header},
  }
</script>

<style scoped>

</style>
