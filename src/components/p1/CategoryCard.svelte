<script>
  import { getContext } from "svelte";
  import type { category } from "$state/p";
  import Icon from "./Icon.svelte";

  export let category: category;
  export let active: boolean = false;

  const setMenu: Function = getContext("setMenu");
</script>

<div
  class="card  flex flex-col items-center justify-evenly "
  class:active
  on:click={() => setMenu(category.menu)}
>
  <div class="icon emoji">
    {category.emoji}
  </div>
  <div class="name">
    {category.name}
  </div>
  <div class="button">
    <Icon name="chevron-right" size={28} strokeWidth={2} />
  </div>
</div>

<style>
  .card {
    @apply bg-white w-32 h-48 shadow-sm rounded-2xl cursor-pointer;
    /* some hover efect */
    @apply hover:shadow-md;
  }

  .card .icon {
    @apply text-4xl bg-white p-3 rounded-full;
  }
  .card .name {
    @apply font-semibold;
  }

  .card .button {
    @apply bg-orange-400 p-1 rounded-full text-white;
    /* hover */
    @apply hover:bg-orange-500;
  }
  .active .card,
  .card.active {
    @apply bg-orange-400;
  }

  .card.active .name {
    @apply text-white;
  }
  .card.active .button {
    @apply bg-white text-orange-400;
  }
  .card:hover .button {
    @apply shadow-md;
  }
</style>
