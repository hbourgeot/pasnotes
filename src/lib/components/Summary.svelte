<script>
  export let title = "title";
  export let addClasses = "";

  import { ExpandMore, ExpandLess } from "@steeze-ui/material-design-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
</script>

<details class={"min-w-[900px] h-auto " + `${addClasses ? addClasses : ""}`}>
  <summary
    class="flex w-full p-2 items-center justify-between text-[#0a1b48] leading-[26px] text-[20px] font-semibold"
    style="border-bottom: 1px solid #D7DAE2"
  >
    {title}
    <span
      class="expand w-8 h-8 flex justify-center items-center rounded-1xl"
      style="background-color: rgba(229, 231, 235, var(--tw-bg-opacity);"
    >
      <Icon src={ExpandLess} class="expand w-4 h-4" />
    </span>

    <span
      class="expanded w-8 h-8 flex justify-center items-center rounded-1xl"
      style="background-color: rgba(229, 231, 235, var(--tw-bg-opacity);"
    >
      <Icon src={ExpandMore} class="expand w-4 h-4" />
    </span>
  </summary>

  <slot />
</details>

<style lang="scss">
  summary {
    font-family: "Montserrat", sans-serif;
  }

  summary::marker {
    display: none;
    font-size: 0px;
  }

  details .expanded {
    display: none;
  }

  details[open] .expanded {
    display: flex;
  }

  details[open] .expand {
    display: none;
  }
</style>
