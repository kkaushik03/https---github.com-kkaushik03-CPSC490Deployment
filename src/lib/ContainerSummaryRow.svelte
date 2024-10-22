<script>
    export let container;
</script>

<div class="row">
    <div class="id">{container.containernumber}</div>
    <div class="shipname">{container.nameofship}</div>
    <div class="date">{new Date(container.datecontainershipped).toDateString()}</div>
    <div class="size">{container.containersize}</div>
</div>

<style>
    .row {
        display: flex;
        background-color: skyblue; /* Lighter pink */
        padding: 10px;
        margin: 5px 0;
        border: 1px solid beige;
    }
    .id {
        font-weight: bold;
        flex: 1;
        margin-right: 10px;
    }
    .shipname {
        flex: 2;
        color: #4548ab;
    }
    .date {
        flex: 2;
        text-align: center;
    }
    .size {
        flex: 0 0 60px;
        text-align: right;
    }

    /* Button style with different shade of pink */
    button {
        background-color: #ff9999; /* Darker pink */
        color: white;
        border: none;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;
    }

    /* On hover, make it slightly darker */
    button:hover {
        background-color: #ff6666;
    }
</style>