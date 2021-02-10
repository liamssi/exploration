<script lang='ts'>
import Banner from './Banner.svelte';
import CategoryMenu from './CategoryMenu.svelte';
import TopBar from './TopBar.svelte'
</script>
<div class="container h-full flex flex-col px-10 py-6 space-y-8">
    <div class='sm:h-3/6 md:h-2/5 flex flex-col  space-y-8 justify-between'>
        <div class='pb-4'> <TopBar></TopBar></div>
       
        <div class='flex-grow'>
            <Banner></Banner>
        </div>
    </div>
    <div class='sm:h-3/6  md:h-2/5 flex-grow flex flex-col  space-y-8 justify-between'>
   <CategoryMenu ></CategoryMenu >
    </div>

    
</div>
