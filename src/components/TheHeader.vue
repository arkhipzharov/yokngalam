<!-- eslint-disable prettier/prettier -->
<template>
  <header class="header pv4">
    <div
      class="header__inner mw-page center flex items-center justify-between f6"
    >
      <a
        href="#"
        class="header__logo ph2 f3"
        @click.prevent
      >
        Yok<span class="b">Ngalam</span>
      </a>
      <div class="header__right dn flex-l">
        <ul class="header__menu list flex items-center">
          <li class="header__menu-item mr3 pr2">
            <a
              href="#"
              class="header__menu-go-home-button pa3 ba bw2 br-pill b grow"
              @click.prevent
            >
              <span class="ph2">Home</span>
            </a>
          </li>
          <li class="header__menu-item mh3">
            <a
              href="#"
              class=" flex items-center dim"
              @click.prevent
            >
              Destination
            </a>
          </li>
          <li class="header__menu-item ml4 mr3">
            <a
              href="#"
              class=" flex items-center dim"
              @click.prevent
            >
              Review
            </a>
          </li>
          <li class="header__menu-item ml4 mr3">
            <a
              href="#"
              class=" flex items-center dim"
              @click.prevent
            >
              Itinerary
            </a>
          </li>
          <li class="header__menu-item ml4 mr3">
            <a
              href="#"
              class=" flex items-center dim"
              @click.prevent
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="header__user pl2 ml3 relative flex items-center">
          <button class="header__user-dropdown-button pr3">
            <div
              class="header__user-avatar pt4 pr3 pb3 pl4 br-100"
            ></div>
          </button>
          <VIcon
            class="header__user-dropdown-icon absolute"
            :href="'arrow-drop-down'"
          />
        </div>
      </div>
      <button
        class="
          header__toggle-menu-btn
          flex
          dn-l
          pa2
          items-center
          justify-center
        "
        @click="openMenu"
      >
        <VIcon
          class="w2"
          :href="'menu'"
        />
      </button>
    </div>
    <TheMenu :class="{ opened: isMenuOpened }" />
  </header>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';
  import TheMenu from './TheMenu';

  interface Data {
    isMenuOpened: boolean;
  }

  const data: Data = {
    isMenuOpened: false,
  };

  export default Vue.extend({
    components: {
      TheMenu,
    },
    data() {
      return data;
    },
    mounted() {
      this.$evBus.$on('close-menu', () => {
        this.toggleMenu();
        this.$evBus.$emit('toggle-page-noscroll');
      });
    },
    methods: {
      openMenu() {
        this.$evBus.$emit('toggle-page-noscroll');
        this.toggleMenu();
      },
      toggleMenu() {
        this.isMenuOpened = !this.isMenuOpened;
      },
    },
  });
</script>

<style lang="scss">
  .header {
    font-family: $font-monsterrat;

    &__user-avatar {
      background-image: url('~@/assets/img/demo/avatar.jpg');
    }

    &__user-dropdown-icon {
      top: 50%;
      right: rem(2);
      width: rem(7);
      height: rem(7);
      transform: translateY(-50%);
    }
  }
</style>
