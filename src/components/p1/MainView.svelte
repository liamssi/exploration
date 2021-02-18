<script lang="ts">
  import Banner from "./Banner.svelte";
  import FoodMenu from "./FoodMenu.svelte";
  import TopBar from "./TopBar.svelte";
</script>

<div class="view noscrollbar flex flex-col py-6 space-y-10 ">
  <div class="flex-none px-6"><TopBar /></div>
  <div class="flex-auto px-6">
    <Banner />
  </div>

  <div class="">
    <FoodMenu />
  </div>
</div>

<style>
  .view {
    @apply overflow-y-auto overflow-x-hidden;
  }
</style>
