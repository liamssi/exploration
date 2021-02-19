<script lang="ts">
  import { setContext } from "svelte";

  import { horizentalScroll } from "./utils/hscroll";
  import Icon from "./Icon.svelte";
  import CategoryCard from "./CategoryCard.svelte";
  import { categories } from "$state/p";
  import FoodCard from "./FoodCard.svelte";
  import type { food } from "$state/p";
  let currentMenu: food[];

  function setMenu(menu) {
    // alert("hi");
    //console.log("menu", menu);
    currentMenu = menu;
  }
  let active = 0;
  setMenu(categories[0].menu);
  setContext("setMenu", setMenu);
</script>

<div class="flex flex-col justify-evenly">
  <div class="w-full flex flex-row  justify-between px-6">
    <div class="title-1">Menu Category</div>
    <div
      class="text-orange-400 flex flex-row  space-x-2 items-center cursor-pointer hover:underline "
    >
      <span>View All</span>

      <div class="bg-orange-400 rounded text-white">
        <Icon name="chevron-right" size="15" strokeWidth={2} />
      </div>
    </div>
  </div>

  <div
    class="noscrollbar w-full horizental-view overflow-scroll noscrollbar flex flex-row  space-x-6 lg:justify-between flex-nowrap  px-6 mb-8"
    use:horizentalScroll
  >
    {#each categories as category, index}
      <div
        class="snapable flex-none p-2 active"
        on:click={() => (active = index)}
      >
        <CategoryCard {category} active={index == active} />
      </div>
    {/each}
  </div>

  <div
    class=" w-full horizental-view flex flex-row overflow-scroll noscrollbar space-x-6 lg:justify-between flex-nowrap px-6 "
    use:horizentalScroll
  >
    {#each currentMenu as food}
      <div class="snapable flex-none py-2">
        <FoodCard {food} />
      </div>
    {/each}
  </div>
</div>

<style>
  .horizental-view {
    scroll-snap-type: y mandatory;
  }

  .snapable {
    scroll-snap-align: start;
  }
</style>
