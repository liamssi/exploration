<script>
  import type { food } from "$state/p";

  import Icon from "./Icon.svelte";
  import StarRating from "./StarRating.svelte";

  export let food: food;
</script>

<div class="relative card flex flex-col items-center  ">
  {#if food.tag === "fire"}
    <!-- content here -->

    <div
      class="absolute right-0 rounded-full w-12 h-12 bg-red-100 emoji flex flex-row items-center justify-center text-2xl"
    >
      🔥
    </div>
  {:else if food.tag === "fav"}
    <div
      class="absolute right-0 rounded-full w-12 h-12 bg-yellow-100 emoji flex flex-row items-center justify-center text-2xl"
    >
      ⭐
    </div>
  {:else}
    <div
      class="absolute right-0 rounded-full w-12 h-12 bg-red-200 emoji flex flex-row items-center justify-center text-2xl text-center"
    >
      ❤
    </div>
  {/if}

  <img class="img" src={food.imgUrl} alt="" />
  <div class="content flex flex-col justify-evenly">
    <div class="pb-2">
      {food.name}
    </div>
    <div class="">
      <StarRating />
    </div>
    <div class="flex flex-row items-center justify-between py-2">
      <div>
        <span class="text-orange-300 text-sm">$</span>
        <span>{food.price}</span>
      </div>

      <Icon
        name="plus"
        class="btn bg-orange-400 hover:bg-orange-500 hover:shadow-md text-white rounded-full  "
        size={35}
        strokeWidth={2}
      />
    </div>
  </div>
</div>

<style>
  .card {
    @apply w-72 h-72  px-4  rounded-2xl cursor-pointer relative;
    /* some hover efect */
  }

  .card .img {
    @apply text-4xl w-44 h-44   rounded-full z-20;
  }
  .content {
    @apply bg-white shadow-sm w-full h-2/3 rounded-xl absolute bottom-1 z-10 px-3 pb-2  pt-24 font-semibold;
  }

  .card:hover > * {
    @apply shadow-md;
  }
</style>
