<script lang="ts">
  import Icon from "./Icon.svelte";

  let visible = true;
</script>

<div />
<div
  class="bg-red-500 bg-opacity-80  transition-all text-white text-center  flex flex-row justify-around  shadow text-lg px-6 py-4 relative"
  class:hidden={!visible}
>
  <p>
    IMPORTANT: This work is based on the Exploration design from the tallented
    <a
      class="underline hover:text-blue-800"
      href="https://dribbble.com/AndikaWP">"Andika Wiraputra"</a
    >
    , the original design can be found
    <a
      class="underline hover:text-blue-800"
      href="https://dribbble.com/shots/15082603-Food-Delivery-Dashboard">Here</a
    >
    .
  </p>
  <div
    on:click={() => {
      visible = false;
    }}
  >
    <Icon
      name="x"
      size="25"
      class="my-2   flex-none rounded-full cursor-pointer hover:bg-white hover:text-red-500 absolute right-2 bottom-2 sm:static"
    />
  </div>
</div>

<style>
  .ad {
    z-index: 60;
  }
</style>
