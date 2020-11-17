<template lang="pug">
  section.section.h-chill
    .container
      h2.title-h2.h-chill__title {{$t('home.chill.title')}}

      .h-chill__list
        .ch-card.ch-card_first
          .ch-card__inner.ch-card__inner_first
            .ch-card__title {{$t('home.chill.make_selfie')}}
            .ch-card__action
              a.btn.btn_bg.ch-card__btn(href="#") {{$t('home.chill.action')}}

        .ch-card
          .ch-card__inner
            .ch-card__title.ch-card__title_grad {{$t('home.chill.read')}}
            .ch-card__desc {{$t('home.chill.interesting_articles')}}
            a.ch-card__link(href="#")

        .ch-card
          .ch-card__inner
            .ch-card__title.ch-card__title_grad {{$t('home.chill.take_test')}}
            .ch-card__desc {{$t('home.chill.win_prizes')}}
            a.ch-card__link(href="#")

</template>

<script>
  export default {
    name: "HomeChill",
  }

</script>

<style lang="scss" scoped>


  @import "~styles/mixins.scss";

  .h-chill {
    padding-top: 100px;

    &__list {
      display: flex;
      flex-wrap: wrap;
      padding-top: 30px;
      margin: 0 -10px;
    }
  }

  .ch-card {
    display: inline-block;
    padding: 20px 10px 0;
    width: 50%;

    &__inner {
      position: relative;
      padding: 50px 40px;
      background: #1D2328;
      border-radius: 20px;

      &_first {
        padding: 60px 61px;
        background: url("../../../images/home/chill-bg.jpg") center center / cover no-repeat;
      }
    }

    &_first {
      width: 100%;
      padding-top: 0;
    }

    &__title {
      font-weight: bold;
      font-size: 48px;
      line-height: 55px;
      padding-bottom: 175px;
      width: 50%;
      color: #fff;

      &_grad {
        display: inline-block;
        line-height: 66px;
        padding-bottom: 0;
        width: auto;
        background: linear-gradient(90deg, #6CCFEB 0%, #35D331 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

    }

    &__desc {
      font-size: 24px;
      line-height: 30px;
      color: #FFFFFF;
      padding-top: 6px;
    }

    &__link {
      position: absolute;
      right: 40px;
      bottom: 59px;
      background: url("../../../images/icon/link-arrow.svg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 48px;
      height: 48px;
    }
  }
</style>