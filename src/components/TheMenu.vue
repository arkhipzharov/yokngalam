<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="
      menu
      absolute
      left-0
      top-0
      z-9999
      h-100
      w-100
      bg-black-90
      flex
      flex-column
      flex-auto
      overflow-y-auto
    "
    @click="emitCloseMenu"
  >
    <div class="menu__inner-wrap h-100 mv5 flex flex-column">
      <div
        class="
          menu__inner
          flex
          flex-column
          flex-auto
          items-center
          justify-center
          chunk-five
        "
      >
        <a
          class="pa2 mv3 f3 db center"
          href="#"
          @click.prevent.stop="emitCloseMenu"
        >
          Home
        </a>
        <a
          class="pa2 mv3 f3 db center"
          href="#"
          @click.prevent.stop
        >
          Destination
        </a>
        <a
          class="pa2 mv3 f3 db center"
          href="#"
          @click.prevent.stop
        >
          Review
        </a>
        <a
          class="pa2 mv3 f3 db center"
          href="#"
          @click.prevent.stop
        >
          Itinerary
        </a>
        <a
          class="pa2 mv3 f3 db center"
          href="#"
          @click.prevent.stop
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</template>
<!-- eslint-enable -->

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    methods: {
      emitCloseMenu() {
        this.$evBus.$emit('close-menu');
      },
    },
  });
</script>

<style lang="scss">
  .menu {
    transform: translateX(-100%);
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    will-change: transform;

    &.opened {
      transform: translateX(0%);
      opacity: 1;
      transition: opacity 0.5s, transform 0.5s;
      will-change: transform;
    }
  }
</style>
