<script lang="ts">
    import { AppShell } from '@skeletonlabs/skeleton';
</script>



<AppShell slotSidebarLeft="bg-surface-500/5 w-48 p-4">
    <svelte:fragment slot="sidebarLeft">
        <!-- Insert the list: -->
        <nav class="list-nav fixed">
            <ul>
                <li>
                    <a href="#products">
                        <i class="fa-solid fa-arrow-right variant-soft-secondary badge" />
                        <span class="flex-auto">Top Products</span>
                    </a>
                </li>
                <li>
                    <a href="#users">
                        <i class="fa-solid fa-arrow-right variant-soft-secondary badge" />
                        <span class="flex-auto">Top Users</span>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- --- -->
    </svelte:fragment>    
    <slot />
</AppShell>
