<!-- design at: https://dribbble.com/shots/15082603-Food-Delivery-Dashboard/attachments/6812686?mode=media -->
<script lang="ts">
import MainView from './MainView.svelte';
import SideBar from './SideBar.svelte';
import SideRight from './SideRight.svelte'
</script>

<div class="min-w-full min-h-screen bg-red-50 flex flex-row">
    <div class="w-16 bg-white shadow-sm"><SideBar></SideBar></div>
    <div class="flex-grow bg-gray-50"> <MainView></MainView></div>
    <div class="w-96 bg-white shadow-sm"><SideRight></SideRight></div>

</div>
