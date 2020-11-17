<template lang="pug">
  section.preview.preview--pb
    .container
      .preview__link-container
        .preview__link {{$t('home.preview.link')}}
        .preview__link-separator
        .preview__link {{$t('home.preview.link')}}
</template>

<script>
export default {
  name: 'PreviewVacancy',
}
</script>

<style lang="scss" scoped>

@import "~styles/mixins.scss";

.preview {
  padding: 170px 0 57px 0;
  background: url("../../../images/preview/preview.png") center center / cover no-repeat;
  counter-reset: section;
  &--pb{
    padding-bottom: 30px;
  }
  &__link {
    font-size: 16px;
    line-height: 22px;
    color: #888B90;
  }

  &__link-separator {
    margin: 0 15px;
    width: 6px;
    height: 6px;
    border: 1px solid #888B90;
    border-radius: 100%;
  }

  &__link-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    font-weight: 700;
    color: #fff;
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 30px;
    @include phones() {
      font-size: 36px;
      line-height: 49px;
    }
    @include phones-small() {
      font-size: 24px;
      line-height: 33px;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    @include tablets() {
      flex-direction: column;
    }
  }

  &__item {
    padding: 30px 30px 30px 40px;
    background: #2D3942;
    border-radius: 15px;
    min-height: 157px;
    width: 33.33333%;
    margin-right: 19px;
    position: relative;
    z-index: 0;

    &:last-child {
      margin-right: 0;
    }

    &:before {
      counter-increment: section;
      content: "0" counter(section);
      font-size: 122px;
      font-weight: 700;
      line-height: 85px;
      position: absolute;
      right: 17px;
      bottom: 17px;
      z-index: -1;
      color: transparent;
      -webkit-text-stroke: 2px #415361;
      @include tablets() {
        right: 30px;
        bottom: initial;
        top: 50%;
        transform: translateY(-50%);
        font-size: 90px;
        line-height: 60px;
      }
      @include phones-small() {
        font-size: 50px !important;
        line-height: 50px !important;
      }
    }

    @include tablets() {
      width: 100%;
      margin: 0 0 16px 0;
      min-height: auto;
      padding: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    @include phones-small() {
      padding: 20px !important;
    }
  }

  &__item-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 5px;
    background: linear-gradient(90deg, #6CCFEB 0%, #35D331 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include tablets() {
      font-size: 24px;
      line-height: 33px;
    }
    @include phones-small() {
      font-size: 18px !important;
      line-height: 24px !important;
    }
  }

  &__item-text {
    font-size: 24px;
    line-height: 30px;
    color: #fff;
    @include tablets() {
      font-size: 18px;
      line-height: 24px;
    }
    @include phones-small() {
      font-size: 14px !important;
      line-height: 20px !important;
    }
  }
}
</style><template lang="pug">
  section.preview.preview--pb
    .container
      .preview__link-container
        .preview__link {{$t('home.preview.link')}}
        .preview__link-separator
        .preview__link {{$t('home.preview.link')}}
</template>

<script>
export default {
  name: 'PreviewVacancy',
}
</script>

<style lang="scss" scoped>

@import "~styles/mixins.scss";

.preview {
  padding: 170px 0 57px 0;
  background: url("../../../images/preview/preview.png") center center / cover no-repeat;
  counter-reset: section;
  @include phones-small(){
    padding: 0 0 60px 0;
  }
  &--pb{
    padding-bottom: 30px;
  }
  &__link {
    font-size: 16px;
    line-height: 22px;
    color: #888B90;
  }

  &__link-separator {
    margin: 0 15px;
    width: 6px;
    height: 6px;
    border: 1px solid #888B90;
    border-radius: 100%;
  }

  &__link-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @include phones-small{
      display: none;
    }
  }

  &__title {
    font-weight: 700;
    color: #fff;
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 30px;
    @include phones() {
      font-size: 36px;
      line-height: 49px;
    }
    @include phones-small() {
      font-size: 24px;
      line-height: 33px;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    @include tablets() {
      flex-direction: column;
    }
  }

  &__item {
    padding: 30px 30px 30px 40px;
    background: #2D3942;
    border-radius: 15px;
    min-height: 157px;
    width: 33.33333%;
    margin-right: 19px;
    position: relative;
    z-index: 0;

    &:last-child {
      margin-right: 0;
    }

    &:before {
      counter-increment: section;
      content: "0" counter(section);
      font-size: 122px;
      font-weight: 700;
      line-height: 85px;
      position: absolute;
      right: 17px;
      bottom: 17px;
      z-index: -1;
      color: transparent;
      -webkit-text-stroke: 2px #415361;
      @include tablets() {
        right: 30px;
        bottom: initial;
        top: 50%;
        transform: translateY(-50%);
        font-size: 90px;
        line-height: 60px;
      }
      @include phones-small() {
        font-size: 50px !important;
        line-height: 50px !important;
      }
    }

    @include tablets() {
      width: 100%;
      margin: 0 0 16px 0;
      min-height: auto;
      padding: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    @include phones-small() {
      padding: 20px !important;
    }
  }

  &__item-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 5px;
    background: linear-gradient(90deg, #6CCFEB 0%, #35D331 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include tablets() {
      font-size: 24px;
      line-height: 33px;
    }
    @include phones-small() {
      font-size: 18px !important;
      line-height: 24px !important;
    }
  }

  &__item-text {
    font-size: 24px;
    line-height: 30px;
    color: #fff;
    @include tablets() {
      font-size: 18px;
      line-height: 24px;
    }
    @include phones-small() {
      font-size: 14px !important;
      line-height: 20px !important;
    }
  }
}
</style>