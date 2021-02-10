<!-- design at: https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media -->
<script lang="ts">
  import MainView from "./MainView.svelte";
  import SideBar from "./SideBar.svelte";
  import SideRight from "./SideRight.svelte";
  import Icons from "./Icons.svelte";
</script>

<Icons />
<div class="min-w-full min-h-screen bg-red-500 flex flex-row">
  <div class="md:w-24 sm:w-16 bg-white shadow-sm">
    <SideBar />
  </div>
  <div class='flex-grow flex flex-row  '>
    <div class="md:w-3/4 sm:w-full bg-gray-50"><MainView /></div>
  <div class=" md:w-1/4 sm:w-0 bg-white"><SideRight /></div>
  </div>
  
</div>
<style global>
* {
  @apply font-sans;
}
.title-1{
  @apply text-xl font-bold text-gray-700
}
</style>