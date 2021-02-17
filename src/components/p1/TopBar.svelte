<script lang="ts">
import Search from "./Search.svelte";
import Icon from './Icon.svelte'
</script>

<div
    class="relative sm:relative flex flex-row justify-between items-center w-full "
    >
    <div class="title-1">
        <span class="pr-1 "> Today Menu</span>

        <span class="emoji"> 😋 </span>
    </div>
    <div class="flex flex-row space-x-2 items-baseline "
        >
        <Search />
 
        
        <Icon class='flex-none' name='home'></Icon>
    </div>
</div>
