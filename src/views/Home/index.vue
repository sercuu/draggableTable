<template>
    <div class="home">
        <Table
            :dataSource="dataSource"
            :columns="columns"
            :dragStart="dragStart"
            :dragLeave="dragLeave"
            :drop="drop"
            :dragOver="dragOver"
        ></Table>
        {{ columns }}
    </div>
</template>

<script>
import Table from "@/components/common/Table";
import SetArrayPosition from "@/helper/setArrayPosition.js";
import { DATASOURCE, COLUMNS } from "@/Mockdata.js";

export default {
    name: "Home",
    components: {
        Table,
    },

    data: () => {
        return {
            dataSource: null,
            columns: null,
        };
    },
    created() {
        this.immutableData();
    },
    methods: {
        immutableData() {
            const newDataSource = [...DATASOURCE];
            const newColumns = [...COLUMNS];
            this.dataSource = newDataSource;
            this.columns = newColumns;
        },
        dragOver(e) {
            e.preventDefault();
        },
        dragStart(e) {
            e.target.style.opacity = "0.4";
            e.dataTransfer.setData("text", e.target.id);
        },
        dragLeave(e) {
            e.target.style.opacity = "1";
        },
        drop(e) {
            e.preventDefault();
            const draggedItem = e.dataTransfer.getData("text");
            const droppedItem = e.target.id;

            // Same columns Controller
            if (draggedItem !== droppedItem) {
                const draggedItemIndex = this.columns.findIndex((e) => e.key === draggedItem);
                const dropedItemIndex = this.columns.findIndex((e) => e.key === droppedItem);
                const swapedArr = SetArrayPosition(this.columns, draggedItemIndex, dropedItemIndex);
                this.columns = [...swapedArr];
            }
        },
    },
};
</script>
