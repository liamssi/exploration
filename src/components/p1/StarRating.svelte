<script lang="ts">
import Icon from "./Icon.svelte";


export let rate:number=3;
export let editable:boolean=true;

function setRate(r:number){

    if (editable){ rate =r}

}
</script>

<div class='w-full flex flex-row space-x-1 text-orange-500'>
    <div on:click={()=>setRate(1)}><Icon name='star' fill="{rate>0 ? 'currentColor':'none'}"  ></Icon></div>
    <div on:click={()=>setRate(2)}><Icon name='star' fill="{rate>1 ? 'currentColor':'none'}"  ></Icon></div>
    <div on:click={()=>setRate(3)}><Icon name='star' fill="{rate>2 ? 'currentColor':'none'}"  ></Icon></div>
    <div on:click={()=>setRate(4)}><Icon name='star' fill="{rate>3 ? 'currentColor':'none'}"  ></Icon></div>
    <div on:click={()=>setRate(5)}><Icon name='star' fill="{rate>4 ? 'currentColor':'none'}"  ></Icon></div>

</div>