<template lang="pug">
  section.section.h-chill
    .container
      h2.title-h2.h-chill__title.h-chill__title--mb {{$t('home.articles.title')}}

      .articles-list
        a.articles-list__item(href="#" style='background-image:url(#{require("src/images/articles-list/background.png")})')
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_1')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/intel.svg")
          .articles-list__text {{$t('home.articles.articles_description_2')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_3')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_4')}}

      .ch-card.ch-card_first.ch-card--indent
        .ch-card__inner.ch-card__inner--height.ch-card--robot.ch-card--mobile-height
          .ch-card__title.ch-card__title--pb {{$t('home.chill.future')}}
          .ch-card__text {{$t('home.chill.text')}}
          .ch-card__action
            a.btn.btn_bg.ch-card__btn.ch-card__btn--top(href="#") {{$t('home.chill.action')}}

      .articles-list
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_1')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/intel.svg")
          .articles-list__text {{$t('home.articles.articles_description_2')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_3')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_4')}}



      .ch-card.ch-card_first.ch-card--indent
        .ch-card__inner.ch-card__inner_first.ch-card__inner--height
          .ch-card__title {{$t('home.chill.make_selfie')}}
          .ch-card__action
            a.btn.btn_bg.ch-card__btn(href="#") {{$t('home.chill.action')}}

      .articles-list
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_1')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/intel.svg")
          .articles-list__text {{$t('home.articles.articles_description_2')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_3')}}
        a.articles-list__item(href="#")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_4')}}

</template>

<script>


export default {
  name: 'HomeArticles',
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

  &--pl {
    padding-left: 50px;
  }

  &__title {
    &--mb {
      margin-bottom: 40px;
      @include tablets() {
        margin-bottom: 27px;
      }
      @include phones-small(){
        margin-bottom: 20px;
      }
    }
  }
}

.ch-card {
  display: inline-block;
  //padding: 20px 10px 0;
  width: 50%;

  &__inner {
    position: relative;
    padding: 60px;
    background: #1D2328;
    border-radius: 20px;
    @include desktop() {
      padding: 55px 50px;
    }
    @include tablets() {
      padding: 30px !important;
    }
    @include phones-small() {
      padding: 23px 20px !important;
    }

    &_first {
      background: url("~images/home/chill-bg.jpg") center center / cover no-repeat;
    }

    &--height {
      min-height: 508px;
      display: flex;
      flex-direction: column;
      @include tablets() {
        min-height: 349px;
      }
      @include phones() {
        min-height: 347px;
      }
      @include phones-small() {
        min-height: 281px !important;
      }
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
    width: 50%;
    color: #fff;
    @include tablets() {
      font-size: 36px;
      line-height: 49px;
    }
    @include phones(){
      font-size: 25px;
      line-height: 35px;
    }
    @include phones-small() {
      width: 100%;
      font-size: 18px;
      line-height: 24px;
    }

    &_grad {
      display: inline-block;
      line-height: 66px;
      padding-bottom: 0;
      width: auto;
      background: linear-gradient(90deg, #6CCFEB 0%, #35D331 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--pb {
      padding-bottom: 0;
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
    background: url("~images/icon/link-arrow.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 48px;
    height: 48px;
  }

  &__text {
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    margin-top: 25px;
    @include tablets() {
      margin-top: 15px;
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__action {
    margin-top: auto;
  }

  &--robot {
    position: relative;
    overflow: hidden;
    z-index: 0;
    //background: url("~images/home/chill-bg.jpg") center center / cover no-repeat;
    &:after {
      content: '';
      background: url("~images/home/robot.png") no-repeat right /contain;
      position: absolute;
      width: 848px;
      height: 482px;
      right: 0;
      bottom: 0;
      z-index: -1;
      @include desktop() {
        width: 810px;
        height: 460px;
      }
      @include tablets(){
        height: 318px !important;
        width: 520px !important;
        bottom: -12px;
      }
      @include phones-small(){
        width: 500px !important;
        height: 290px !important;
        right: -180px;
        bottom: -4px;
      }
    }
  }

  &--mobile-height {
    @include phones-small(){
      height: 454px !important;
      .ch-card__action {
        margin-top: 30px;
      }
    }
  }

  &--indent {
    margin: 100px 0;
    @include desktop(){
      margin: 80px 0;
    }
    @include tablets(){
      margin: 50px 0 !important;
    }
  }
}

.articles-list {
  display: flex;
  justify-content: center;
  align-items: center;
  @include desktop() {
    flex-wrap: wrap;
    margin: 0 -40px -20px;
  }
  @include tablets() {
    margin: 0 -30px -8px -30px !important;
  }
  @include phones(){
    margin: 0 !important;
  }

  &__item {
    width: 25%;
    padding: 30px;
    border-radius: 20px;
    margin: 0 10px;
    min-height: 400px;
    display: flex;
    align-items: start;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(29, 35, 40, 0) 0%, #1D2328 100%);
      border-radius: 20px;
      z-index: -1;
    }

    @include desktop() {
      width: 45%;
      margin-bottom: 20px;
      min-height: 240px;
    }
    @include tablets() {
      margin: 0 8px 8px 8px;
      min-height: 266px;
    }
    @include phones(){
      width: 100% !important;
      margin: 0 0 10px 0;
      padding: 20px !important;
      &:last-child {
        margin-bottom: 0;
      }
    }

  }

  &__logo-box {
    padding: 7px;
    background: #fff;
    border-radius: 5px;
  }

  &__logo {
    object-fit: contain;
  }

  &__text {
    margin-top: auto;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #fff;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    @include phones-small() {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>