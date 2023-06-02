<script>
    import { Home } from "@steeze-ui/material-design-icons";
    import { Icon } from "@steeze-ui/svelte-icon";
</script>

<div class="w-full h-screen text-center">
    <h1 class="text-[32px] pt-10 font-bold">¡Bienvenido, estudiante!</h1>
    <div
        class="w-[350px] h-9/10 mx-auto my-0 grid grid-cols-2 grid-rows-8 gap-10 mt-10"
    >
        <button class="bg-[#F2D8D8]" title='Historico de notas'
            ><Icon
                class="w-20 h-20 mx-auto color-gray-900"
                theme="rounded"
                src={Home}
            /></button
        >
        <button class="bg-[#5C8984]"
            ><Icon class="w-20 h-20 mx-auto" src={Home} /></button
        >
        <button class="bg-[#545B77]"
            ><Icon class="w-20 h-20 mx-auto" src={Home} /></button
        >
        <button class="bg-[#374259]"
            ><Icon class="w-20 h-20 mx-auto" src={Home} /></button
        >
        <button class="bg-[#321E1E]"
            ><Icon class="w-20 h-20 mx-auto" src={Home} /></button
        >
    </div>
</div>

<style scoped>
    button {
        width: 150px;
        height: 150px;
        border-radius: 20px;
        /* background: rgba(255, 255, 255, 0.35); */
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
    }
</style>
