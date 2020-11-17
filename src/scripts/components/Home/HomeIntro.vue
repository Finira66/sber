<template lang="pug">
  div
    .home-intro
      .container
        .h-intro__wrapper
          h1.title.h-intro__title {{$t('home.intro.title_row_1')}}
            br
            span.title_outline {{$t('home.intro.title_row_2')}}
          .h-intro__item
            .h-intro__label {{$t('home.intro.day_label')}}

</template>

<script>
export default {
  name: 'HomeIntro',
}
</script>

<style lang="scss" scoped>

@import "~styles/mixins.scss";

.home-intro {
  background: url("~images/home/intro-bg.jpg") center center / cover no-repeat;
  padding: 320px 0 80px;
}

.h-intro {

  &__wrapper {
    display: flex;
    align-items: flex-end;
  }

  &__title {
    width: 50%;
  }

  &__item {
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }

  &__label {
    font-size: 36px;
    line-height: 49px;
    color: #172435;
    padding: 16px 30px 14px;
    background: linear-gradient(90deg, #6CCFEB 0%, #35D331 100%);
    border-radius: 25px;
    height: fit-content;
  }
}

</style>