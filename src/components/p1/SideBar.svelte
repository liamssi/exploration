<script lang="ts">
  import Icon from "./Icon.svelte";
</script>

<div id='side-bar'class="h-full flex flex-col justify-between items-center pt-10 pb-4">


  <div class="grid grid-cols-1 gap-y-4 sidebar-grid">
    <div
      id="home"
      class="active"
    >
      <Icon name="home" size={25} />

  </div>
  <div class="">
    <Icon name="chat" size={30} />
  </div>
  <div class=" ">
    <Icon name="wallet" size={23} />
  </div>
  <div class="">
    <Icon name="heart" size={28} />
  </div>
  <div class=" ">
    <Icon name="doc" size={25} />
  </div>
  <div class=" ">
    <Icon name="cog" size={28} />
  </div>
</div>
  <div class="menu-item">
    <Icon name="logout" size={28} />
  </div>

</div>

<style>
 .sidebar-grid *,.menu-item {
   /* base style  */
  @apply  w-12 h-12 rounded-full flex justify-center items-center  text-gray-600 cursor-pointer;
/* hover style */
  @apply hover:bg-gray-50 hover:text-gray-900;
}

.sidebar-grid *.active{
    @apply text-white bg-orange-500 opacity-90;
    filter: drop-shadow(0 4mm 2mm rgba(231, 143, 52, 0.1));
  }




</style>
