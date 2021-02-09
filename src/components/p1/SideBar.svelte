<script lang="ts">
  import Icon from "./Icon.svelte";
  import Icons from "./Icons.svelte";
</script>

<div class="w-full flex flex-col">
  <div class="menu-item ">
    <div
      id="home"
      class="h-12 w-12 rounded-full via-orange-50 text-white bg-orange-400 flex flex-col  justify-center items-center"
    >
      <Icon name="home" size={22} />
    </div>
  </div>
  <div class="menu-item ">
    <Icon name="chat" size={30} />
  </div>
  <div class="menu-item ">
    <Icon name="wallet" size={23} />
  </div>
  <div class="menu-item ">
    <Icon name="heart" size={28} />
  </div>
  <div class="menu-item ">
    <Icon name="doc" size={25} />
  </div>
  <div class="menu-item ">
    <Icon name="cog" size={28} />
  </div>
  <div class="menu-item ">
    <Icon name="logout" size={28} />
  </div>
</div>

<style>
  .menu-item {
    @apply h-16 flex flex-col  justify-center items-center;
  }
  #home {
    filter: drop-shadow(0 3mm 4mm rgba(231, 143, 52, 0.5));
  }
</style>
