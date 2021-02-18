<script lang='ts'>

import {
    user
} from "$state/p";
import BannerImg from "./BannerImg.svelte";


let hover=false; 
</script>
<div class='relative h-52 flex-col justify-end items-end '>
<div class="banner transition-colors  bg-orange-200 hover:bg-orange-300 {hover ?'bg-orange-300':''} shadow-sm hover:shadow  rounded-2xl mt-4 h-48 relative z-0 cursor-pointer transition-color flex flex-col items-center justify-center">
<div class=' flex flex-col justify-center'>
  <div class='half-circle'></div>
  <div class='half-circle'></div>
  <div class='half-circle'></div>
  <div class='half-circle'></div> 
  <div class='half-circle'></div>
  <div class='half-circle'></div>
 
</div>



</div>

<div class='absolute top-1/4  left-45 z-50 flex flex-col space-y-2'>
  <div class=''>
    <div class=' text-2xl roboto font-bold text-gray-700'>
     Hello {user.fisrtName},
    </div>
    <div class='text-md roboto font-light text-gray-500'>
      Get free delivery evert <span class='text-orange-500 font-semibold'>$20</span> purchase
    </div>
  </div>
  <span class='transition-colors w-36 flex-none bg-orange-400 hover:bg-white text-white  hover:text-orange-400 hover:shadow-sm  p-2 text-center rounded-full cursor-pointer'>Learn more</span>
</div>

<div id='chokchok' class=" h-full absolute -bottom-1 -left-7 overflow-hidden cursor-pointer" on:mouseover="{()=>{hover=true}}" on:mouseleave="{()=>{hover=false}}">
  <div class='img h-full transform  img  flex flex-col '>
    
    <BannerImg></BannerImg>
  
  </div>

</div>

</div>
<style>
  .left-45{
    left:45%
  }
.img{
  transform: scaleY(1.15);
  width:25rem
}

  .banner {
    border-radius: 25px;
    
  }

  .banner:after{
    @apply absolute  w-32 h-32   rounded-full border-green-500 opacity-90  z-10;
    top:-45%;
    right:7rem;
    border-width: 2rem; 
    content:'';
  }
  .banner:before{
    @apply absolute  w-32 h-32  right-16  rounded-full border-blue-500  opacity-90 z-10;
    bottom:-45%;
    border-width: 2rem;
    content:'';
  }

  .half-circle{
    @apply absolute top-0 w-32 h-16 z-20 opacity-80  shadow-none;
    border-width: 2rem; 
    border-radius: 50% 50% 0 0 / 100% 100% 0 0; 
    border-bottom: 0;}
    .half-circle:nth-child(1){
      @apply border-blue-800 transform rotate-45;
      right:-2%;
      top:-30%;
    }
    .half-circle:nth-child(2){
      @apply  border-yellow-500 transform ;
      transform:rotate(-135deg);
      right:-3%;
      top:37%

    }
    .half-circle:nth-child(3){
      @apply   transform ;
      transform:rotate(135deg);
      left:-5%;
   

    }
    .half-circle:nth-child(4){
      @apply transform ;
      left:10%;
      top:80%;

    }
    .half-circle:nth-child(5){
      @apply  hidden md:block transform ;
      left:50%;
      transform:rotate(135deg);
      top:95%;

    }
    .half-circle:nth-child(6){
      @apply  hidden md:block transform ;
      left:40%;
      transform:rotate(-85deg);
      top:-25%;

    }
    .half-circle:nth-child(3),.half-circle:nth-child(4),.half-circle:nth-child(5),.half-circle:nth-child(6){
      @apply  border-orange-400 opacity-30 }

</style>
