<!-- design at: https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media -->
<script lang="ts">
  import MainView from "./MainView.svelte";
  import SideBar from "./SideBar.svelte";
  import SideRight from "./SideRight.svelte";
  import Icons from "./Icons.svelte";
  import { showRightSide } from "$state/p";
  import CopyrightBanner from "./CopyrightBanner.svelte";
</script>

<Icons />
<div class="absolute top-0 w-full z-50">
  <CopyrightBanner />
</div>
<div
  class="flex  flex-col-reverse   h-screen relative  md:flex-row bg-red-200 overflow-hidden overscroll-contain noscrollbar"
>
  <div
    class="flex-initial w-full h-16  md:h-full md:w-24  lg:w-36 shadow-sm bg-white noscrollbar "
  >
    <SideBar />
  </div>
  <div class="flex-grow h-full  bg-gray-50 overflow-scroll ">
    <MainView />
  </div>
  <div
    id="side-right"
    class="flex-shrink-0 flex-grow-0 w-96  absolute  block  lg:static  h-screen lg:h-full   {$showRightSide
      ? 'right-0'
      : '-right-full'}  bg-white z-40 transition-all duration-500 "
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
