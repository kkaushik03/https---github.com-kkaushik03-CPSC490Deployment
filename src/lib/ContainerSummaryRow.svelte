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
        background-color: pink;
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
</style>