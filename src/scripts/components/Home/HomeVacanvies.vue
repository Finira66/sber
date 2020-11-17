<template lang="pug">
  section.section.h-chill.h-chill--pt
    .container
      .h-chill__section
        a(href="#" @click.prevent="$router.history._startLocation == '/vacancy' ? $router.push('/') : $router.go(-1)").back-link
          img.back-link__arrow(src="~images/vacancy/arrow.svg")
          .back-link__text Назад
        .h-chill__container
          h2.title-h2.h-chill__title.h-chill__title--mb {{$t('home.vacancy.title')}}
          .h-chill__info
            img.h-chill__info-logo(src="~images/vacancy/logo.svg")
            .h-chill__info-date
              img.h-chill__info-icon(src="~images/vacancy/clock.svg")
              | 10 мин
          img.h-chill__preview(src="~images/vacancy/preview.png")
          .title.title--medium Цифровая экосистема Сбербанка
          .text Одной из целей принятой «Сбербанком» Стратегии 2020 заявлена реализация инициатив, которые позволят конкурировать с глобальными технологическими компаниями. Эта конкуренция разворачивается в плоскости формирования лучшего клиентского опыта, причем необязательно финансового.
          .h-chill__video-container
            .h-chill__overlay(v-if="!isPlayingVideo")
              img.h-chill__play(src="~images/vacancy/play.svg" @click="isPlayingVideo = true")
            video.h-chill__video(poster="~images/vacancy/video.png" v-if="!isPlayingVideo")
            iframe(v-if="isPlayingVideo" width="560" height="315" src="https://www.youtube.com/embed/K88vRG0KwMQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .text Представляя стратегию в Лондоне в конце 2017 года, Герман Греф обозначил три ключевых приоритета – и банка, и своих личных, как СЕО: персонал, клиенты и технологии. В нетехнологической компании только под неусыпным надзором CEO можно трансформировать технологии, пояснил он.

          .h-chill__box
            .title.title--medium Мега-экосистема
            .text Новая технологическая платформа должна повысить эффективность процессов и оперативность выведения на рынок новых продуктов – в том числе, внешних, партнерских. Ведь «платформа» - одно из двух самых трендовых слов последних лет, вместе с «экосистемой». Направляя этот тренд, в своем отчете Сбербанк заявляет о планах построения экосистемы за рамками традиционной для себя сферы. С целью сохранения долгосрочной конкурентоспособности планируется расширять предложение дополнительных, синергичных с финансовыми продуктами сервисов в таких сферах жизни, как покупки, дом, отдых, здоровье.
            img.h-chill__preview.h-chill__preview--eco(src="~images/vacancy/eco.png")
            .text Свою всеохватывающую экосистему Сбербанк развивает с 2016 года, постепенно выходя на новые для себя рынки. Вовлекаются как дочерние предприятия, так и независимые компании-партнеры. Ряд таких значимых внешних партнерств были заключены в 2017 году, и этот список продолжает пополняться в 2018-м.

          .h-chill__box
            .title.title--medium Мега-экосистема
            .text Новая технологическая платформа должна повысить эффективность процессов и оперативность выведения на рынок новых продуктов – в том числе, внешних, партнерских. Ведь «платформа» - одно из двух самых трендовых слов последних лет, вместе с «экосистемой». Направляя этот тренд, в своем отчете Сбербанк заявляет о планах построения экосистемы за рамками традиционной для себя сферы. С целью сохранения долгосрочной конкурентоспособности планируется расширять предложение дополнительных, синергичных с финансовыми продуктами сервисов в таких сферах жизни, как покупки, дом, отдых, здоровье.


      .title.title--big Похожие статьи
      .articles-list.articles-list--vacancy
        a.articles-list__item(href="#")
          img.articles-list__item-pic(src="~images/articles-list/background.png")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_1')}}
        a.articles-list__item(href="#")
          img.articles-list__item-pic(src="~images/articles-list/background.png")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/intel.svg")
          .articles-list__text {{$t('home.articles.articles_description_2')}}
        a.articles-list__item(href="#")
          img.articles-list__item-pic(src="~images/articles-list/background.png")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_3')}}
        a.articles-list__item(href="#")
          img.articles-list__item-pic(src="~images/articles-list/background.png")
          .articles-list__logo-box
            img.articles-list__logo(src="~images/articles-list/sber.svg")
          .articles-list__text {{$t('home.articles.articles_description_4')}}

</template>

<script>


export default {
  name: 'HomeArticles',

  data() {
    return {
      isPlayingVideo: false
    }
  }
}

</script>

<style lang="scss" scoped>

@import "~styles/mixins.scss";

.h-chill {
  padding-top: 100px;
  &--pt{
    padding-top: 65px;
    @include tablets(){
      padding-top: 40px;
    }
    @include phones(){
      padding-top: 30px;
    }
  }
  &__section{
    border-bottom: 1px solid #A0B3BC;
    margin-bottom: 100px;
    @include tablets(){
      margin-bottom: 80px;
    }
    @include phones(){
      margin-bottom: 60px;
    }
  }
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
  &__info{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  &__logo{
    width: 63px;
    height: 17px;
    object-fit: contain;
    display: block;
  }
  &__info-icon{
    width: 12px;
    height: 12px;
    object-fit: contain;
    margin-right: 8px;
  }
  &__info-date{
    font-size: 14px;
    line-height: 20px;
    color: #888B90;
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  &__preview{
    width: 100%;
    height: auto;
    margin-bottom: 80px;
    &--eco{
      margin: 30px 0;
    }
    @include phones(){
      margin-bottom: 60px;
    }
  }
  &__container{
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
    @include tablets() {
      max-width: 100%;
    }
    @include phones(){
      padding: 0;
    }
  }
  &__video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0;
    margin: 0;
  }
  &__video-container{
    position: relative;
    margin: 30px 0;
    height: 450px;

    iframe {
      width: 100%;
      height: 450px;
    }

    @include phones(){
      height: 165px;
    }
  }
  &__play{
    position: absolute;
    left: 50%;
    top: 50%;
    cursor: pointer;
    z-index: 5;
    @include phones(){
      width: 17px;
      height: 17px;
    }
  }
  &__overlay{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    background: rgba(#000, 0.4);
    width: 100%;
    height: 100%;
  }
  &__box{
    margin: 80px 0;
    @include phones(){
      margin: 60px 0;
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
    margin: 0 -30px -8px -30px;
  }
  @include phones(){
    margin: 0 !important;
  }
  &--vacancy{
    @include phones(){
      margin: 0 -8px -8px !important;
    }
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

    &-pic {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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
    z-index: 1;
    position: relative;
  }

  &__logo {
    object-fit: contain;
    z-index: 1;
    position: relative;
  }

  &__text {
    z-index: 1;
    position: relative;
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
  &--vacancy{
    margin: 0 -5px -8px!important;
  }
}
.back-link{
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  &__arrow{
    margin-right: 10px;
  }
  &__text{
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #00D7CC;
  }
}
.title{
  color: #1D2328;
  &--medium{
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 20px;
    text-transform: none;
    @include tablets(){
      font-size: 24px;
      line-height: 33px;
    }
    @include phones() {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 15px;
    }
  }
  &--big{
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    text-transform: none;
    margin-bottom: 30px;
    @include tablets(){
      font-size: 36px;
      line-height: 49px;
    }
    @include phones(){
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }
}
.text{

}

</style>