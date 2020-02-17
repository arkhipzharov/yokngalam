<!-- eslint-disable prettier/prettier -->
<template>
  <div class="hero min-vh-100 ph3 ph4-ns">
    <TheHeader />
    <div class="hero__content pb6 pb7-ns mt4 mt7-m mt6-l">
      <h1 class="hero__title mb3 mt0 tc chunk-five f1 f5-ns lh-solid">
        LETS GET <span class="blue-dark">LOST</span>
      </h1>
      <p class="hero__text mb5 tc lh-large f4">
        Malang will never dissapointed you. <br>
        From every step you took you will be amazed and suddenly fallin love
        with Malang
      </p>
      <button
        class="hero__set-itinerary-button pa4 center br-pill black b grow"
      >
        <span class="ph2">SET ITINERARY NOW</span>
      </button>
    </div>
  </div>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';
  import TheHeader from './TheHeader';

  export default Vue.extend({
    components: {
      TheHeader,
    },
  });
</script>

<style lang="scss">
  .hero {
    background-color: $bg-blue-grey;
    background-image: linear-gradient(
        to bottom,
        rgba(47, 42, 50, 0.32) 0,
        rgba(85, 0, 85, 0.01) 134.8px,
        rgba(0, 0, 0, 0.01) 1348px
      ),
      url('~@/assets/img/bg/mountains.png');
    background-repeat: no-repeat;
    background-position: 0 0, 0 -12%;
    background-size: cover;

    &__title {
      font-size: rem(80);
    }

    &__set-itinerary-button {
      background-color: $bg-yellow;
    }
  }
</style>
