<script lang="ts">
    import { toggleSide } from "./utils/hscroll";
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
    <div class="flex flex-row space-x-2 items-center "
        >
        <Search />
 
        <span class='text-gray-500 cursor-pointer hover:bg-white hover:text-gray-600 hover:shadow-sm rounded-md' use:toggleSide>
        <Icon class='flex-none hidden md:block lg:hidden ' strokeWidth='{1.8}' size={25} name='menu'></Icon>
        </span>
    </div>
</div>
