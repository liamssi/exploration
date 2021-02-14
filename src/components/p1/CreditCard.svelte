<script lang="ts">
import Icon from './Icon.svelte'


let total =52
</script>
<div class="relative w-80 h-48  ">

    <div class=" absolute bg-card bg-orange-400 transform rotate-6 ">
        <div class=" absolute bg-card bg-orange-400 transform rotate-6 "></div>
    
    </div>
    <div class=" absolute  crd-card bg-orange-200 opacity-50  border-1 border-orange-900">

    </div>
    <!-- <div class=" absolute  crd-card  bg-orange-300  opaci "> 

    </div>-->
  
</div>
<style>
    .crd-card{
        @apply top-3 left-3  rounded-2xl z-50 ;
        
        width:83%;
        height:83%;
        filter: blur(0.9px);
    }
    .bg-card{
        @apply top-3 left-3  rounded-2xl  ;
        
        width:82%;
        height:82%; 
        filter: blur(1px);
    }
    
    .crd-card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(15px);
}

    
    </style>