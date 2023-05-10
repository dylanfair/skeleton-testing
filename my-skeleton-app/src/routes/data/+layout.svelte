<script lang="ts">
    import { AppShell } from '@skeletonlabs/skeleton';
</script>



<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
    <svelte:fragment slot="sidebarLeft">
        <!-- Insert the list: -->
        <nav class="list-nav">
            <ul>
                <li><a href="#products">Top Products</a></li>
                <li><a href="#users">Top Users</a></li>
            </ul>
        </nav>
        <!-- --- -->
    </svelte:fragment>    
    <slot />
</AppShell>
