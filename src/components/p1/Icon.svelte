
<script lang='ts'>
	export let name;
	export let size:number = 20;
</script>

<svg class="" width={size} height={size}>
	<use xlink:href='#{name}' />
</svg>