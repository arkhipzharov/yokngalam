<!-- eslint-disable prettier/prettier -->
<template>
  <div class="about pv5 ph3 ph4-ns cf">
    <div class="about__left w5 pr3-l fl w-100 w-50-l flex justify-end-l">
      <div class="about__image-wrapper w-100">
        <img
          src="@/assets/img/near-text/city.png"
          alt="city"
          class="about__image w-100"
        >
      </div>
    </div>
    <div class="about__right pl3-l fl w-100 w-50-l">
      <h1 class="about__title mt4 chunk-five">
        City of <span class="blue-dark">Love</span>
      </h1>
      <p class="about__text lh-large measure-wide f4 grey">
        Malang is the second largest city in East Java province, Indonesia. It
        has a history dating back to the ancient Mataram Kingdom. The city is
        famous for its cool temperature. People in East Java sometimes call it
        "Paris of East Java.
      </p>
    </div>
  </div>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

<style lang="scss">
  .about {
    &__image-wrapper {
      max-width: rem(517);
    }

    &__image {
      max-width: rem(447);
    }

    &__title {
      color: $text-blue;
      font-size: rem(60);
    }
  }
</style>
