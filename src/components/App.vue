<!--
  prettier is conflicting with vue/max-attributes-per-line, and there's only 2
  ways to fix this, either configure prettier to wrap all atributes in one line
  up to 80 characters ruler

  https://github.com/prettier/eslint-plugin-prettier/issues/94#issuecomment-438781791

  or write these 2 special comments to disable prettier eslint integration for
  <template> tag

  https://github.com/vuejs/eslint-plugin-vue/issues/260#issuecomment-445791801
-->
<!-- eslint-disable prettier/prettier -->
<template>
  <div :class="['app ph3 ph4-ns', { noscroll: !isPageScrollable }]">
    <TheHero />
    <TheAbout />
    <TheSubscribe />
  </div>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';
  import TheHero from './TheHero';
  import TheAbout from './TheAbout';
  import TheSubscribe from './TheSubscribe';

  interface Data {
    isPageScrollable: boolean;
  }

  const data: Data = {
    isPageScrollable: true,
  };

  export default Vue.extend({
    components: {
      TheHero,
      TheAbout,
      TheSubscribe,
    },
    data() {
      return data;
    },
    mounted() {
      this.$evBus.$on('toggle-page-noscroll', () => {
        this.isPageScrollable = !this.isPageScrollable;
      });
    },
  });
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    min-width: 320px;
    height: 100%;
    color: $text-white;
    font-family: $font-lato;
  }

  .app {
    height: 100%;

    &.noscroll {
      overflow-y: hidden;
    }
  }
</style>
