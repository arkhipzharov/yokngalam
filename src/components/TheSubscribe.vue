<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="subscribe pv5 ph3 ph4-ns"
  >
    <div
      class="
        subscribe__inner
        center
        mw-page
        h-100
        flex
        flex-column
        flex-row-l
        flex-shrink-1
        items-center-l
      "
    >
      <div
        class="subscribe__left mb4 mb0-l pr3-l w-100 w-50-l flex justify-end-l"
      >
        <div class="subscribe__left-message w-100">
          <h1 class="subscribe__title chunk-five ma0 mb1">Keep in Touch</h1>
          <p class="subscribe__text f4 lh-large">
            We Will Give you latest information about Malang
          </p>
        </div>
      </div>
      <div class="subscribe__right pl3-l w-100 w-50-l flex justify-end-l">
        <div
          class="
            subscribe__input-field
            w-100
            flex
            flex-column
            flex-row-ns
          "
        >
          <input
            type="email"
            class="
              subscribe__input
              pa4
              mb3
              mb0-ns
              flex-auto
              grey
              ba
              br-0-ns
              b--green
              br3
              br--left-ns
              f4
            "
            placeholder="Type Email Here for Subscribe"
          >
          <button
            class="
              subscribe__input-send-button
              pa4
              flex
              items-center
              justify-center
              ba
              bl-0-ns
              b--green
              br-pill
              br3-ns
              br--right-ns
              f3
            "
          >
            <span class="dn-ns">Send</span>
            <VIcon
              class="w1 w2-ns pa1 dn db-ns"
              :href="'chevron-right'"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

<style lang="scss">
  .subscribe {
    background-color: $bg-green;

    &__left-message {
      max-width: rem(570);
    }

    &__title {
      font-size: rem(67);
    }

    &__input-field {
      max-width: rem(520);
    }

    &__input {
      &::placeholder {
        color: $text-grey-light;
        font-style: italic;
      }
    }

    &__input-send-button {
      background-color: $bg-blue;
    }
  }
</style>
