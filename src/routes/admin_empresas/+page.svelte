<script>
	import PdfViewer from 'svelte-pdf';

	import pdf from './pensum.pdf'
</script>

<PdfViewer url={pdf} data={null}/>