<script>
    import ContainerSummaryRow from '.././lib/ContainerSummaryRow.svelte';
    export let containers = [];
    export let onContainerClicked = () => {};
</script>

<h3>A PseudoTable Component</h3>

<p>This is an example of Svelte containers, NOT the best way to create a simple table. It probably should be done in the ContainerTable component so that it is easy to add callbacks for people clicking the shipname or id or...</p>

<p>Notice that tab order is set correctly with the index into the container object.</p>

{#each containers as container, ix}
    <div
        role="button"
        tabindex={ix+1}
        on:keydown={(e) => e.key === 'Enter' && onContainerClicked(container, e)}
        on:click={() => onContainerClicked(container)}>
        <ContainerSummaryRow {container}/>
    </div>
{/each}

<style>
    div[role="button"] {
        cursor: pointer;
        padding: 10px;
        margin: 5px 0;
        border: 1px solid black;
        background-color: #f9f9f9;
    }
    div[role="button"]:hover {
        background-color: #e6e6e6;
    }
</style>