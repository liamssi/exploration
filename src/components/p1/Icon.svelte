<script lang="ts">
  export let name;
  export let size: number | string = 20;
  export let strokeWidth: number = 1.1;
  export let fill: string = "none";
  let klass: string = "";

  export { klass as class };
</script>

<svg width={size} height={size} class={klass} {fill}>
  <use xlink:href="#{name}" stroke-width={strokeWidth} />
</svg>
