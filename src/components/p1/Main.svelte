<!-- design at: https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media -->
<script lang="ts">
import MainView from "./MainView.svelte";
import SideBar from "./SideBar.svelte";
import SideRight from "./SideRight.svelte";
import Icons from "./Icons.svelte";
import {
    showRightSide
} from "$state/p";
</script>

<Icons />
<div class="flex flex-row h-screen">

  <div class="flex  flex-col-reverse  md:flex-row ">
   <div
     class="flex-grow w-full h-16  md:h-full md:w-24  lg:w-36 shadow-sm bg-white "
    >
    <SideBar />
  </div>
  <div class="flex-auto h-full  bg-gray-50 overflow-scroll ">
    <MainView />
  </div>
</div>
  <!--make responsive -->
  <div id='side-right'
    class="flex-shrink-0 flex-grow-0 w-80  lg:flex-grow  absolute  block  lg:static  h-screen lg:h-full   {$showRightSide ? 'right-0' : '-right-full' }  bg-white z-50 transition-all duration-500 "
  >
    <SideRight />
  </div>
</div>

<style>
* {
    @apply font-sans;
}

.title-1 {
    @apply text-xl font-bold text-gray-700;
}

.full-h {
    min-height: -webkit-fill-available;
}

.app {
    @apply h-screen w-screen border-yellow-600 border-4;
}
</style>
