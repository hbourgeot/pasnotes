<script type="ts">
  import Button from "@smui/button";

  $: count = 2;

function router(e){
    let value = parseInt(e.currentTarget.value)

    value != count ? count = value : ''    
}
</script>

<div class='w-full h-screen'>

    <nav class='w-full h-[auto] bg-red-900'>
        <button value={1} on:click={router}>Profesores</button>
        <button value={2} on:click={router}>Estudiantes</button>
        <button value={3} on:click={router}>Otra cosa</button>
    </nav>

    <main class='w-full h-screen bg-red-600'>
        {#if count == 1}
            <h1>Hola mundo</h1>
        {:else if count == 2}
            <h1>Hola segundo mundo</h1>
        {:else if count == 3}
            <h1>Hola mundo 3</h1>
        {/if}
    </main>
  

</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>