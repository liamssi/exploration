<script lang="ts">
  import CreditCard from "./CreditCard.svelte";
  import OrderMenu from "./OrderMenu.svelte";
  import Avatar from "./Avatar.svelte";
  import Notification from "./Notification.svelte";
  import { horizentalScroll } from "./utils/hscroll";
</script>

<div class="h-full flex flex-col p-4 justify-evenly space-y-5 bg-red-200 xsm:bg-green-500">
  <div class="flex flex-row items-center space-x-5 justify-end p-4">
    <!-- notification -->
    <Notification />

    <Avatar />
  </div>
  <div class="flex-none flex flex-row justify-around ">
    <div class="" use:horizentalScroll>
      <CreditCard />
    </div>
  </div>
  <div class="flex-grow"><OrderMenu /></div>

  <div
    class="flex-grow flex-shrink-0 bg-orange-400 hover:bg-orange-500 shadow text-white text-center
        py-3  rounded-full roboto cursor-pointer transition-colors"
  >
    Checkout
  </div>
</div>
