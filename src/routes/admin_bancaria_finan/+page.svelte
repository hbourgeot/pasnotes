<script lang="ts">
  import pdf from "./pensum.pdf";
  import { onMount } from "svelte";
  let PdfViewer: any;
  onMount(async () => {
    const module = await import("svelte-pdf");
    PdfViewer = module.default;
  });
</script>

<svelte:component this={PdfViewer} url={pdf} data={null} />
