<script lang="ts">
    import Icon from './Icon.svelte'
import Icons from './Icons.svelte';

</script>
<style>
.menu-item{
    @apply h-16 flex flex-col  justify-center items-center;

}
</style>

<div class="w-full flex flex-col">
    <div class="menu-item bg-blue-50 ">


    </div>
    <div class="menu-item ">
       <Icon name='home' size={30}></Icon>

    </div>
    <div class="menu-item ">
        <Icon name='chat' size={30}></Icon>

    </div>
    <div class="menu-item bg-blue-100">4</div>
    <div class="menu-item bg-blue-50">5</div>
</div>