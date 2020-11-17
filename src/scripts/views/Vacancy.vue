<template lang="pug">
  div
    Header
    PreviewVacancy
    HomeVacanvies
</template>

<script>
  import Header from '../components/layout/Header'
  import PreviewVacancy from '../components/Preview/PreviewVacancy'
  import HomeVacanvies from '../components/Home/HomeVacanvies'

  export default {
    name: 'Vacancy',
    components: {HomeVacanvies, PreviewVacancy, Header},
  }
</script>

<style scoped>

</style>
