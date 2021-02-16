<!-- design at: https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media -->
<script lang="ts">
  import MainView from "./MainView.svelte";
  import SideBar from "./SideBar.svelte";
  import SideRight from "./SideRight.svelte";
  import Icons from "./Icons.svelte";
</script>

<Icons />
<div class="flex flex-col-reverse  md:flex-row h-screen">
  <div
    class="flex-shrink w-full h-16  md:h-full md:w-24  lg:w-36 shadow-sm bg-white "
  >
    <SideBar />
  </div>
  <div class="flex-auto h-full  bg-gray-50 overflow-scroll ">
    <MainView />
  </div>
  <!--make responsive -->
  <div
    class="flex-shrink-0 flex-grow-0 lg:flex-grow  hidden md:block  md:absolute md:right-0  md:h-full lg:static lg:w-96 lg:h-full bg-white z-50 "
  >
    <SideRight />
  </div>
</div>

<style global>
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
