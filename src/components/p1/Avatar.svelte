<script lang="ts">
  import {
    slide
} from 'svelte/transition'
import {
    user
} from '$state/p';

import Icon from './Icon.svelte'
let visible = false
//just mocking data */
let menu=[
'item1', 'item2','item3','item4','item5'
]

export let extended=true;

function toggle() {

    visible = !visible
}
</script>
{#if extended}
<div class='card flex flex-row items-center space-x-3 hover:shadow-sm rounded-full bg-white {visible ? 'bg-blue-50':''}' on:click="{toggle}">
    <div class="avater w-14 h-14 rounded-full  flex justify-center items-center cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all">
        <img class='transition-transform w-11 hover:w-12 hover:absolute hover:rotate-6' alt='avatar' src="{user.avatarUrl}">

    </div>
   
    <div class='cursor-pointer' >
        <div class='font-bold text-lg text-gray-600 hover:underline'>{user.username}</div>
        <div class=' text-gray-500'>{user.type}</div>
    </div>
    <div>

        <Icon name='chevron-down' class='w-7 cursor-pointer text-gray-500 hover:text-gray-700'  strokeWidth={2} on:click={toggle}></Icon>
    </div>
    
</div>

{#if visible}

<div class='absolute top-24  z-50 w-60 text-gray-700   rounded-md  shadow-md bg-white '>
    {#each  menu as item }
   
    <div transition:slide class='shadow-sm px-2 py-1 cursor-pointer transition-all hover:bg-gray-50 flex flex-row justify-between items-center' >

        <div>
            <div class="font-semibold p-1 turncate">{item}</div>
        
        </div>
        <!-- <span class='hover:bg-white p-1 rounded-full'>
            <Icon name='x' strokeWidth={1.5} ></Icon>
        </span> -->

    </div>

    {/each}

</div>
{/if}
{:else}
<div class="avater w-full h-full rounded-full bg-blue-100 hover:bg-blue-300 transition-all  p-1">
    <img class='transition-all transform hover:rotate-6' alt='avatar' src="{user.avatarUrl}">

</div>
{/if}



<style>
  .card:hover .avatar {
    @apply hover:shadow-sm;
  }
</style>