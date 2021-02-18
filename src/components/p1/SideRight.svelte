<script lang="ts">
  import CreditCard from "./CreditCard.svelte";
  import OrderMenu from "./OrderMenu.svelte";
  import Avatar from "./Avatar.svelte";
  import Notification from "./Notification.svelte";
  import { horizentalScroll,toggleSide } from "./utils/hscroll";

import Icon from "./Icon.svelte";
</script>

<div class="h-full flex flex-col p-4 justify-evenly space-y-5  xsm:bg-green-500 relative">
  <div class="flex-none flex flex-row items-center space-x-5 justify-end ">
    <!-- notification -->
    <div  use:toggleSide>
    <Icon name='x'  size='25' class='lg:hidden text-gray-500 rounded-full hover:bg-orange-300 hover:text-white cursor-pointer transition-colors' strokeWidth='{1.5}' ></Icon>
    </div>
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
