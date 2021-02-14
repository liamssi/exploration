<script lang="ts">
import type {Order} from '$state/p'
import Icon from './Icon.svelte'
import Icons from './Icons.svelte';


let colors=['orange','blue','green']

export let order:Order;
export let color='red';

</script>

 <div class="flex-none flex flex-row bg-white  space-x-2 items-center shadow-sm rounded-md hover:shadow-md cursor-pointer transition-shadow p-2">

    
        <div class='bg-{color}-100 w-14 h-14 p-2 rounded-xl flex items-center'>
            <img class="img" src={order.item.imgUrl} alt="" />
        </div>
        <div class="flex flex-col w-full">
            <div class="font-bold text-gray-600">
                {order.item.name}
            </div>
            <div class="w-full flex flex-row justify-between">
            <div class='inline-flex flex-row items-center'>
                <Icon name='x' size='15' class='text-orange-400' strokeWidth='{3}'/>
                <span class='font-semibold text-sm roboto'>{order.quantity}</span>
            </div>   

            <div class='inline-flex flex-row items-center space-x-1'>
              
               <span class='font-bold roboto text-orange-400' style='font-size:0.65rem'>$ </span>
               <span class='font-semibold text-md roboto text-gray-800'> {order.quantity*order.item.price}</span>
            </div>   
        </div>
        </div>
</div>

