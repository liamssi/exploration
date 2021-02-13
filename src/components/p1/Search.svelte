<script>
  import Icon from "./Icon.svelte";
</script>

<div
  class="flex flex-row  bg-white  py-2 px-3 rounded-full text-gray-400 focus-within:text-gray-500  cursor-pointer"
>
  <input
    class="flex-grow text-md truncate  focus:outline-none focus:placeholder-gray-300"
    type="text"
    placeholder="Search food by name"
  />
  <div class="flex-shrink-0"><Icon name="search" strokeWidth={2} /></div>
</div>
