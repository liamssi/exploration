<script>
import Icon from "./Icon.svelte";
import {categories} from "../../state/p1"
</script>
<div class="w-full h-full">


    <div class="flex flex-row  justify-between">
        <div class='title-1'>Menu Category </div>
        <div class='text-orange-400 inline-flex flew-row space-x-2 items-center cursor-pointer hover:underline '>
            <span>View All</span>
            <div class='bg-orange-400 rounded text-white'>
                 <Icon name='chevron-right' size='15' stroke={2}></Icon>
            </div>

        </div>

    </div>

    <div  class='menu'>
        
    </div>
</div>