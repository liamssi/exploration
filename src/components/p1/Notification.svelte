<script lang="ts">
  import Icon from "./Icon.svelte";
  import { notifications } from "$state/p";
  import { slide } from "svelte/transition";
  let visible = false;

  function clearNotification(index) {
    let tmp = $notifications;
    tmp.splice(index, 1);
    $notifications = tmp;
    if (!$notifications.length) toggle();
    //   console.log($notifications.length, $notifications)
  }

  function toggle() {
    if ($notifications.length) visible = !visible;
  }
</script>

<div class="relative hover:shadow-sm rounded-full" on:click={toggle}>
  <Icon
    name="bell"
    strokeWidth={1.4}
    class="w-11 h-11  p-2 rounded-full bg-gray-50 hover:bg-white {visible
      ? 'bg-blue-50'
      : ''}  text-gray-600 hover:text-gray-800 cursor-pointer"
  />
  {#if $notifications.length}
    <div
      class="absolute top-1 right-1 bg-orange-400 text-white font-mono text-xs w-5 h-5 flex flex-col items-center justify-center   rounded-full "
    >
      {$notifications.length}
    </div>
  {/if}
</div>

{#if visible}
  <div
    class="absolute top-24  z-50 w-72 text-gray-700   rounded-md  shadow-md bg-white "
  >
    {#each $notifications as notification, index (notification)}
      {#if notification}
        <div
          transition:slide
          class="shadow-sm px-2 py-1 cursor-pointer transition-all hover:bg-gray-50 flex flex-row justify-between items-center"
        >
          <div>
            <div class="font-semibold  turncate">{notification.title}</div>
            <div class="text-gray-600 text-sm  truncate">
              {notification.content}
            </div>
          </div>
          <span
            class="hover:bg-white p-1 rounded-full"
            on:click={() => clearNotification(index)}
          >
            <Icon name="x" strokeWidth={1.5} />
          </span>
        </div>
      {/if}
    {/each}
  </div>
{/if}
