<script lang="ts">
  import { TreeView, TreeViewItem } from "@skeletonlabs/skeleton";
  import { ExpandLess, ExpandMore } from "@steeze-ui/material-design-icons";
  import { Icon } from "@steeze-ui/svelte-icon";
</script>

<div
  class="flex items-center p-10 flex-col w-full max-h-auto gap-6"
  style="min-height: calc(100vh + 10rem);"
>
  <h1 class="w-[90%] text-2xl font-bold text-center capitalize">Materias</h1>

  <div class="bg-blue-300 rounded-2xl p-4 lg:w-2/5 w-3/4 mx-auto">
    <TreeView>
      <TreeViewItem>
        Informática
        <svelte:fragment slot="children">
          <TreeViewItem
            ><a
              href="/coordinadores/materias/1/1"
              data-sveltekit-preload-data="hover">1er semestre</a
            ></TreeViewItem
          >
          <TreeViewItem
            ><a
              href="/coordinadores/materias/1/2"
              data-sveltekit-preload-data="hover">2do semestre</a
            ></TreeViewItem
          >
          <TreeViewItem
            ><a
              href="/coordinadores/materias/1/3"
              data-sveltekit-preload-data="hover">3er semestre</a
            ></TreeViewItem
          >
          <TreeViewItem
            ><a
              href="/coordinadores/materias/1/4"
              data-sveltekit-preload-data="hover">4to semestre</a
            ></TreeViewItem
          >
          <TreeViewItem
            ><a
              href="/coordinadores/materias/1/5"
              data-sveltekit-preload-data="hover">5to semestre</a
            ></TreeViewItem
          >
          <TreeViewItem
            ><a
              href="/coordinadores/materias/1/6"
              data-sveltekit-preload-data="hover">6to semestre</a
            ></TreeViewItem
          >
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        >Tecnología de Alimentos
        <svelte:fragment slot="children">
          <TreeViewItem>
            <a
              href="/coordinadores/materias/2/1"
              data-sveltekit-preload-data="hover">1er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/2/2"
              data-sveltekit-preload-data="hover">2do semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/2/3"
              data-sveltekit-preload-data="hover">3er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/2/4"
              data-sveltekit-preload-data="hover">4to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/2/5"
              data-sveltekit-preload-data="hover">5to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/2/6"
              data-sveltekit-preload-data="hover">6to semestre</a
            >
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        >Comunicación y Electrónica
        <svelte:fragment slot="children">
          <TreeViewItem>
            <a
              href="/coordinadores/materias/3/1"
              data-sveltekit-preload-data="hover">1er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/3/2"
              data-sveltekit-preload-data="hover">2do semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/3/3"
              data-sveltekit-preload-data="hover">3er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/3/4"
              data-sveltekit-preload-data="hover">4to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/3/5"
              data-sveltekit-preload-data="hover">5to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/3/6"
              data-sveltekit-preload-data="hover">6to semestre</a
            >
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        > Diseño Gráfico
        <svelte:fragment slot="children">
          <TreeViewItem>
            <a
              href="/coordinadores/materias/4/1"
              data-sveltekit-preload-data="hover">1er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/4/2"
              data-sveltekit-preload-data="hover">2do semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/4/3"
              data-sveltekit-preload-data="hover">3er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/4/4"
              data-sveltekit-preload-data="hover">4to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/4/5"
              data-sveltekit-preload-data="hover">5to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/4/6"
              data-sveltekit-preload-data="hover">6to semestre</a
            >
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        > Contabilidad y Costos
        <svelte:fragment slot="children">
          <TreeViewItem>
            <a
              href="/coordinadores/materias/5/1"
              data-sveltekit-preload-data="hover">1er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/5/2"
              data-sveltekit-preload-data="hover">2do semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/5/3"
              data-sveltekit-preload-data="hover">3er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/5/4"
              data-sveltekit-preload-data="hover">4to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/5/5"
              data-sveltekit-preload-data="hover">5to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/5/6"
              data-sveltekit-preload-data="hover">6to semestre</a
            >
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        > Administración Bancaria y Financiera
        <svelte:fragment slot="children">
          <TreeViewItem>
            <a
              href="/coordinadores/materias/6/1"
              data-sveltekit-preload-data="hover">1er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/6/2"
              data-sveltekit-preload-data="hover">2do semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/6/3"
              data-sveltekit-preload-data="hover">3er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/6/4"
              data-sveltekit-preload-data="hover">4to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/6/5"
              data-sveltekit-preload-data="hover">5to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/6/6"
              data-sveltekit-preload-data="hover">6to semestre</a
            >
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
      <TreeViewItem
        > Administración Empresarial
        <svelte:fragment slot="children">
          <TreeViewItem>
            <a
              href="/coordinadores/materias/7/1"
              data-sveltekit-preload-data="hover">1er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/7/2"
              data-sveltekit-preload-data="hover">2do semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/7/3"
              data-sveltekit-preload-data="hover">3er semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/7/4"
              data-sveltekit-preload-data="hover">4to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/7/5"
              data-sveltekit-preload-data="hover">5to semestre</a
            >
          </TreeViewItem>
          <TreeViewItem>
            <a
              href="/coordinadores/materias/7/6"
              data-sveltekit-preload-data="hover">6to semestre</a
            >
          </TreeViewItem>
        </svelte:fragment>
      </TreeViewItem>
    </TreeView>
  </div>
</div>
