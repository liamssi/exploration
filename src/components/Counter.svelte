<script lang="ts">
	let count: number = 0;

	const increment = () => {
		count += 1;
	};
</script>
<style lang='postcss' global >

body {
  @apply antialiased text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900;
  @apply leading-normal tracking-normal text-base font-normal break-words;
  @apply font-sans text-base lg:text-xl;
}

main {
  @apply p-8 pt-32 md:pt-24 mx-auto max-w-4xl;
  @apply text-center;
}

a {
  @apply text-green-600 dark:text-green-400;
  @apply no-underline hover:underline focus:outline-none focus:underline;
}

button {
  @apply py-1 px-4 my-2 rounded border border-gray-500;
  @apply cursor-pointer focus:outline-none;
}

/* purge end ignore */
button {
		font-family: inherit;
		font-size: inherit;
	
		@apply py-4 px-8;
		@apply text-red-500;
		@apply bg-red-500 bg-opacity-10;
		@apply rounded-full;
		@apply border-2 border-transparent;
		@apply outline-none;
		@apply w-48;
		font-variant-numeric: tabular-nums;
	}

	button:focus {
		@apply border-opacity-100;
	}

	button:active {
		@apply bg-red-500 bg-opacity-20;
	}
	
	</style>
	
	
<button on:click={increment}>
	Clicks: {count}
</button>

<div class="rd">
	tst
</div>
