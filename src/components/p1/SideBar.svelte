<script lang="ts">
  import { toggleSide } from "./utils/hscroll";
  import Avatar from "./Avatar.svelte";
import Icon from "./Icon.svelte";
  import Icons from "./Icons.svelte";
</script>

<div
  id="side-bar"
  class="w-full h-full  flex flex-row justify-evenly items-center md:flex-col  md:space-y-4  md:pt-20 md:pb-10 overflow-auto"
>
  <div class="menu-item active ">
    <Icon name="home" class={"w-full h-full"} />
  </div>
  <div class="menu-item">
    <Icon name="chat" class={"w-full h-full"} />
  </div>
  <div class="menu-item">
    <Icon name="wallet" class={"w-full h-full"} />
  </div>
  <div class="menu-item">
    <Icon name="heart" class={"w-full h-full"} />
  </div>
  <div class="menu-item">
    <Icon name="doc" class={"w-full h-full"} />
  </div>
  <div class="menu-item">
    <Icon name="cog" class={"w-full h-full "} />
  </div>
  <div class='flex-auto hidden md:block'></div>
  <div class="menu-item hidden md:block">
    <Icon name="logout" class={"w-full h-full"} />
  </div>
  <div class="menu-item block md:hidden"  use:toggleSide>
    <Icon name="horizontal-dots" class={"w-full h-full"} />
  </div>

</div>

<style>
  .menu-item {  
    @apply w-14 h-14 flex-none p-4  container cursor-pointer rounded-full hover:bg-gray-100;
  }
  .menu-item.active {
    @apply bg-orange-400 hover:bg-orange-500 text-white;
    --tw-shadow: 0 4px 6px -1px rgba(235, 88, 9, 0.1),
      0 2px 4px -1px rgba(235, 88, 9, 0.2);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #eb5809),
      var(--tw-ring-shadow, 0 0 #eb5809), var(--tw-shadow);
  }
</style>
