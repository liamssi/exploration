<script>
    import type { food } from "$state/p";
    import Icon from "./Icon.svelte";
import StarRating from "./StarRating.svelte";
  
    export let food: food;
    export let active: boolean = false;
  </script>

  <div class="card flex flex-col items-center  " class:active>
    <div class="img">
      <img src={food.imgUrl} alt="">
    </div>

    <div class="c flex flex-col">

        <div class="name">
            {food.name}
          </div>
          <div>
              <StarRating></StarRating>
          </div>
          <div class="button">
            <Icon name="chevron-right" size={28} strokeWidth={2} />
          </div>
    </div>
   
  </div>
  
  <style>
    .card {
      @apply  w-72 h-72 bg-red-300 rounded-2xl cursor-pointer relative;
      /* some hover efect */
     
    }
    .card:hover .img{
        @apply shadow-md ;
    }
    .card .img {
      @apply text-4xl w-44 h-44   rounded-full z-20 ;
      
    }
    .card .c {
      @apply bg-white shadow-sm w-full h-2/3 rounded-xl absolute bottom-0 z-10 p-3 pt-24 font-semibold;
      @apply hover:shadow-md ;
    }
  
  </style>
  