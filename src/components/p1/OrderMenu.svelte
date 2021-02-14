<script lang="ts">
import OrderCard from './OrderCard.svelte';

import {
    orders
} from '$state/p'

import Icon from './Icon.svelte'

let colors = ['orange', 'blue', 'green']
</script>

<div class="w-full h-full flex flex-col ">
    <div class="w-full flex flex-row  justify-between px-1 flex-none">
        <div class="font-bold text-gray-700">Order Menu</div>
        <div
            class=" text-orange-400 flex flex-row  space-x-2 items-center cursor-pointer hover:underline "
            >
            <span>View All</span>

            <div class="bg-orange-400 rounded text-white ">
                <Icon name="chevron-right" size="15" strokeWidth={2} />
            </div>
        </div>
    </div>
    <div class='noscrollbar flex flex-col space-y-5 p-2  overflow-y-scroll'>
        {#each $orders as order,index}
      
        <OrderCard order={order} color='{colors[index%colors.length]}'></OrderCard>

        {/each}
    </div>
    
</div>
