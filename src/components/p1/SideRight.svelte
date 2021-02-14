<script lang="ts">
  import CreditCard from './CreditCard.svelte';

import OrderMenu from './OrderMenu.svelte';

import Avatar from './Avatar.svelte';

import Notification from './Notification.svelte';

import Icon from './Icon.svelte'
</script>

<div class=" h-full  flex flex-col p-4 justify-evenly space-y-5">

    <div class="flex flex-row items-center space-x-5 justify-end p-4">

        <!-- notification -->
        <Notification></Notification>

        <Avatar></Avatar>
    </div>
<div class='flex-none'>
<CreditCard></CreditCard>
</div>
    <div class='flex-grow'> <OrderMenu></OrderMenu></div>

    <div class=' bg-orange-400 hover:bg-orange-500 shadow text-white text-center
        py-3 rounded-full roboto cursor-pointer transition-colors'>
        Checkout

    </div>

</div>
