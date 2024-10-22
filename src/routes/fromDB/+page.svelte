<script>
    export let data;

    // Log the received data in the browser console to ensure it's being passed correctly
    console.log('Data received in page.svelte:', data);
</script>

<h1>Fetched from Database</h1>

{#if data && data.containers && data.containers.length > 0}
    {#each data.containers as container}
        <div>
            <span class="id">{container.containernumber}</span>
            <span class="name">{container.nameofship}</span>
            <span class="size">{container.containersize}</span>
            <span class="date">{container.datecontainershipped}</span>
        </div>
    {/each}
{:else}
    <p>No containers available.</p>
{/if}

<span class=i>(database lives in PostgreSQL)</span>

<style>
    .id {
        margin-right: 10px;
        font-weight: bold;
    }
    .name {
        color: #999;
    }
    .i {
        font-style: italic;
    }
</style>