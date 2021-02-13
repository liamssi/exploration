<script lang="ts">
  import Search from "./Search.svelte";
</script>

<div
  class="relative sm:relative flex flex-row justify-between items-center w-full "
>
  <div class="title-1">
    <span class="pr-1 "> Today Menu</span>

    <span class="emoji"> 😋 </span>
  </div>
  <div
    class="absolute right-0 sm:relative  w-2/5 focus-within:w-full  sm:focus-within:w-3/4 transition-all z-50"
  >
    <Search />
  </div>
</div>
