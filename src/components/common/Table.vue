<template>
    <table class="table table-hover table-dark" width="100%">
        <thead>
            <tr>
                <th
                    v-for="column in columns"
                    :id="column.key"
                    :key="column.key"
                    draggable="true"
                    @dragstart="dragStart"
                    @dragleave="dragLeave"
                    @drop="drop"
                    @dragover="dragOver"
                >
                    {{ column.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in dataSource" :key="data.key">
                <td v-for="column in columns" :key="column.key">
                    {{ data[column.key] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "Table",

    props: {
        dataSource: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
        dragStart: {
            type: Function,
            required: true,
        },
        dragLeave: {
            type: Function,
            required: true,
        },
        drop: {
            type: Function,
            required: true,
        },
        dragOver: {
            type: Function,
            required: true,
        },
    },
};
</script>
