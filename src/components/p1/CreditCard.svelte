<script lang="ts">
  import { creditCard } from "$state/p";

  import SimIcon from "./SimIcon.svelte";
  import VisaIcon from "./VisaIcon.svelte";
  let hover = false;
</script>

<div class="w-80 h-48 py-6 px-8 relative">
  <div class="crd-card-bg" class:hover />

  <div class="card">
    <div class="bg" />
    <div class="bg" />
    <div class="bg" />
    <div class="bg" />
    <div class="bg" />
    <div class="bg" />
    <div class="bg" />
    <div class="bg" />
    <div class="bg" />
  </div>

  <div
    class="card-content flex flex-col px-5 py-4 text-white justify-between   mouse-pointer"
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
  >
    <div class="flex flex-row justify-between font-mono ">
      <div>Debit Card</div>
      <div class="w-10 "><VisaIcon /></div>
    </div>
    <div class="flex flex-col -space-y-1 ">
      <div class="flex flex-row justify-between">
        <div class="text-2xl roboto">$ {creditCard.total}</div>
        <div class="w-10 text-orange-400 transform rotate-90"><SimIcon /></div>
      </div>
      <div class="flex flex-row justify-between">
        <div class="text-xs roboto">{creditCard.holder}</div>
        <div class="text-xs roboto">{creditCard.number}</div>
      </div>
    </div>
  </div>
</div>

<style>
  .crd-card-bg {
    @apply h-full rounded-3xl relative shadow-sm  hover:shadow-md;
    background-color: rgba(239, 143, 53, 0.9);
    width: 98%;
    right: -2px;
    @apply transform transition-all;
    transform: rotate(12deg);
  }
  .crd-card-bg.hover {
    @apply opacity-100;
    transform: rotate(0deg);
  }
  *::before {
    @apply block w-full h-full absolute;
    content: "";
  }
  .card {
    @apply w-full h-full  rounded-3xl relative bg-transparent shadow;
    top: -100%;
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0.1rem 0 rgba(255, 194, 124, 0.2);
    /* filter:blur(1px) */
  }

  .card-content {
    @apply w-full h-full  rounded-3xl relative cursor-pointer;
    /* background-color: rgba(239, 143, 53, 0.35); */
    top: -200%;
  }
  .card:before {
  }

  .bg {
    @apply absolute -top-1/2 transform;
    background: cut;
    height: 200%;
    transform: rotate(35deg);
  }

  .bg:nth-child(1) {
    width: 5%;
    left: 110%;
  }
  .bg:nth-child(2) {
    /* background-image:linear-gradient(to top, white 10%,transparent ,transparent 70%); */
    @apply bg-transparent;
    width: 15%;
    left: 93%;
  }
  .bg:nth-child(3) {
    @apply bg-transparent;
    width: 5%;
    left: 86%;
  }
  .bg:nth-child(4) {
    width: 15%;
    left: 69%;
  }
  .bg:nth-child(5) {
    @apply bg-transparent;
    width: 5%;
    left: 62%;
  }
  .bg:nth-child(6) {
    width: 15%;
    left: 45%;
  }

  .bg:nth-child(7) {
    @apply bg-transparent;
    width: 50%;
    left: -11%;
  }
  .bg:nth-child(n)::before {
    @apply opacity-80 block absolute box-content;
    backdrop-filter: blur(10px);
    content: "";
    height: 100%;
    width: 100%;
  }

  .bg:nth-child(2n)::before {
    @apply opacity-80 block absolute box-content;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(239, 143, 53, 0.4) 45%
    );
  }
  .bg:nth-child(6)::before {
    @apply opacity-80 block absolute box-content;
    background: linear-gradient(
      to top,
      rgba(239, 143, 53, 0.5) 45%,
      rgba(255, 255, 255, 0.1)
    );
  }
  .bg:nth-child(2n + 1)::before {
    @apply opacity-80 block absolute box-content;
    background-color: rgba(239, 143, 53, 0.5);
  }
</style>
