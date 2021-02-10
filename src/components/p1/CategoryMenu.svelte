<script>
  import Icon from "./Icon.svelte";
  import CategoryCard from "./CategoryCard.svelte";
  import { categories } from "$state/p";
</script>

<div class="w-full h-full flex flex-col space-y-6">
  <div class="flex flex-row  justify-between">
    <div class="title-1">Menu Category</div>
    <div
      class="text-orange-400 inline-flex flew-row space-x-2 items-center cursor-pointer hover:underline "
    >
      <span>View All</span>
      <div class="bg-orange-400 rounded text-white">
        <Icon name="chevron-right" size="15" stroke={2} />
      </div>
    </div>
  </div>
  <div
    class="menu w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 "
  >
    {#each categories as category}
      <!-- content here -->
      <CategoryCard {category} />
    {/each}
  </div>
</div>
