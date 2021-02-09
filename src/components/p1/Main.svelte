<!-- design at: https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media -->
<script lang="ts">
  import MainView from "./MainView.svelte";
  import SideBar from "./SideBar.svelte";
  import SideRight from "./SideRight.svelte";
  import Icons from "./Icons.svelte";
</script>

<Icons />
<div class="min-w-full min-h-screen bg-red-500 flex flex-row">
  <div class="w-24 bg-white shadow-sm pt-10">
    <SideBar />
  </div>
  <div class="flex-grow bg-gray-50"><MainView /></div>
  <div class="w-96 bg-white shadow-sm"><SideRight /></div>
</div>
