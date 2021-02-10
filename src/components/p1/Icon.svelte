
<script lang='ts'>
	export let name;
	export let size:number|string = 20;
	export let stroke:number=1.1
</script>

<svg class="" width={size} height={size} >
	<use xlink:href='#{name}' stroke-width={stroke} />
</svg>