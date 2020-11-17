<template lang="pug">
  header.header
    .container
      .header__container
        .longword
          p.longword__item Speech analytics
          p.longword__item Automated decision
          p.longword__item Support & scoring
          p.longword__item Natural language processing
          p.longword__item Computer vision
        .header__menu(:class="{'header__menu_active': showMenu}")
          nav.menu
            .menu__container
              .menu__header
                img.logo.menu__logo(src="../../../images/header/logo.svg", alt="logo")
                p.menu__language En
                .menu__close(@click="toggleMenu")
              ul.menu__list
                li.menu__item
                  router-link.menu__title(to="/stream")
                    | {{ $t('header.menu.stream') }}
                li.menu__item
                  router-link.menu__title(to="/schedule")
                    | {{ $t('header.menu.program') }}
                li.menu__item
                  router-link.menu__title(to="/exhibition")
                    | {{ $t('header.menu.expo') }}
                li.menu__item
                  router-link.menu__title(to="/career")
                    | {{ $t('header.menu.career') }}
                li.menu__item
                  router-link.menu__title(to="/chillout")
                    | {{ $t('header.menu.chillout') }}
                template(v-if="isAuth")
                  li.menu__item
                    router-link.menu__title.menu__title_acc(to="/lk")
                      | {{ $t('header.my.account') }}
                  li.menu__item
                    router-link.menu__title(to="/lk/schedule")
                      | {{ $t('header.my.timetable') }}
                  button.button.menu__button
                    | {{ $t('header.unauth') }}
                template(v-else)
                  button.button.menu__button
                    | {{ $t('header.auth') }}
        .header__logo
          img.logo(src="../../../images/header/logo.svg", alt="logo")
        nav.header__navigation
          ul.navigation
            li
              router-link.navigation__item(to="/stream")
                | {{ $t('header.menu.stream') }}
            li
              router-link.navigation__item(to="/schedule")
                | {{ $t('header.menu.program') }}
            li
              router-link.navigation__item(to="/exhibition")
                | {{ $t('header.menu.expo') }}
            li
              router-link.navigation__item(to="/career")
                | {{ $t('header.menu.career') }}
            li
              router-link.navigation__item(to="/chillout")
                | {{ $t('header.menu.chillout') }}
        .header__right
          .auth-section
            template(v-if="!isAuth")
              button.button
                | {{ $t('header.auth') }}
            template(v-else)
              a.auth-section__timetable(href="#")
                | {{ $t('header.my.timetable') }}
              a.auth-section__account(href="#")
                | {{ $t('header.my.account') }}
          p.language(href="#") En
          .menu-mobile(@click.prevent="toggleMenu")
            span
            span

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isAuth: true,
      showMenu: false,
    }
  },
  mounted() {
  },
  methods: {
    words() {

    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins.scss';

.header {
  position: absolute;
  padding-top: 14px;
  background-color: #1D2328;
  top: 0;
  left: 0;
  right: 0;

  @include phones {
    padding-top: 19px;
  }

  &__container {
    display: flex;
    align-items: center;
    font-family: 'Aeroport', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
    position: relative;
  }

  &__menu {
    font-size: 24px;
    line-height: 33px;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .8);
    z-index: 20;
    justify-content: flex-end;
    display: none;

    @include phones {
      font-size: 18px;
      line-height: 25px;
    }

    &_active {
      display: flex;
    }
  }

  &__navigation {
    margin-left: 55px;
    width: 437px;

    @include tablets {
      display: none;
    }
  }
}

.longword {
  writing-mode: vertical-rl;
  text-transform: uppercase;
  white-space: nowrap;
  transform: rotate(180deg);
  position: fixed;
  margin-left: -4px;
  top: 70px;
  display: flex;
  flex-direction: row;
  z-index: 2;

  &__item {
    color: #00D7CC;
    font-weight: normal;
    margin-top: 25px;
  }
}

.menu {
  background-color: #1D2328;
  z-index: 0;
  width: 304px;

  @include phones {
    width: 100%;
  }

  &__logo {
    display: none;

    @include phones {
      display: block;
      margin-right: auto;
    }
  }

  &__container {
    height: 100%;
    width: 100%;
    padding: 29px 44px 0 40px;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      background-image: url("~images/header/bg.png");
      background-size: 300%;
      transform: translateY(-25px);
      background-position: bottom;
      width: 100%;
      height: 100%;

      left: 0;
      z-index: -1;
      background-repeat: no-repeat;

      @include phones {
        transform: translateY(50px);
      }

    }

    @include phones {
      //background-position: 42% 140%;
    }
  }


  &__nav {
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 48px;
    align-self: center;

    @include phones {
      margin-bottom: 32px;
    }
  }

  &__language {
    font-size: 14px;
    line-height: 20px;
    color: #888B90;
    margin-right: 34px;
  }

  &__close {
    background-image: url("~images/header/close.svg");
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &__item {
    margin-bottom: 25px;

    &:nth-of-type(5n) {
      margin-bottom: 40px;
    }

    @include phones {
      margin-bottom: 18px;
      &:nth-of-type(5n) {
        margin-bottom: 25px;
      }
    }
  }

  &__button {
    @include phones {
      margin-top: 5px;
    }
  }

  &__title {
    text-decoration: none;

    &_acc {
      display: flex;
      align-self: center;
      border-top: 1px solid #596675;
      padding-top: 37px;

      @include phones {
        padding-top: 26px;
      }

      &::before {
        content: "";
        display: inline-block;
        height: 33px;
        width: 33px;
        margin-right: 12px;
        background-image: url("~images/header/account-logo.svg");
        background-size: 33px 33px;
        background-repeat: no-repeat;

        @include phones {
          height: 21px;
          width: 21px;
          background-size: 21px 21px;
        }
      }
    }
  }
}


.logo {
  width: 92px;
  height: 70px;

  //@include desktopHd {
  //  width: 72px;
  //  height: 55px;
  //}

  @include tablets {
    width: 79px;
    height: 60px;
  }

  @include phones {
    width: 72px !important;
    height: 55px !important;
  }
}


.navigation {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.header__right {
  display: flex;
  margin-left: auto;
  align-items: center;
  //width: 285px;
  //justify-content: space-between;
}

.auth-section {
  display: flex;

  @include tablets {
    display: none;
  }

  &__account {
    display: flex;
    align-self: center;

    &::before {
      content: "";
      display: inline-block;
      height: 19px;
      width: 19px;
      margin-right: 11px;
      background-image: url("~images/header/account-logo.svg");
      background-size: 19px 19px;
      background-repeat: no-repeat;
    }
  }
}

.auth-section__timetable, .auth-section__account, .language {
  margin-left: 30px;
}

.language {
  color: #888B90;
}

.navigation__item, .auth-section__account, .auth-section__timetable {
  text-decoration: none;

  &:hover {
    color: #00D7CC;
  }
}

.button {
  padding: 14px 25px;
  background-color: transparent;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #596675;
  font-family: 'Aeroport', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  margin-right: 30px;
  outline: none;
}

.menu-mobile {
  width: 30px;
  height: 10px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  cursor: pointer;
  display: none;

  @include tablets {
    display: flex;
  }
}

.menu-mobile span {
  display: block;
  background-image: url("~images/header/menu-mobile.svg");
  width: 100%;
  height: 2px;
}
</style>
