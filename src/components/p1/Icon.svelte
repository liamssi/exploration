
<script lang='ts'>
	export let name;
	export let size:number|string = 20;
	export let strokeWidth:number=1.1
	export let fill:string='none'
</script>

<svg class="" width={size} height={size} fill={fill}  >
	<use xlink:href='#{name}' stroke-width={strokeWidth} />
</svg>