<template>
    <table class="table table-hover table-dark" width="100%">
        <thead>
            <tr>
                <th
                    v-for="colum in colums"
                    :id="colum.key"
                    :key="colum.key"
                    draggable="true"
                    @dragstart="dragStart"
                    @dragleave="dragLeave"
                    @drop="drop"
                    @dragover="dragOver"
                >
                    {{ colum.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in dataSource" :key="data.key">
                <td v-for="colum in colums" :key="colum.key">
                    {{ data[colum.key] }}
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
        colums: {
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
