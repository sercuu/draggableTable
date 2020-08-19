<template>
  <div class="home">
    <Table
      :dataSource="DATASOURCE"
      :colums="COLUMS"
      :dragStart="dragStart"
      :dragLeave="dragLeave"
      :drop="drop"
      :dragOver="dragOver"
    ></Table>
  </div>
</template>

<script>
import Table from "@/components/common/Table";
import SetArrayPosition from "@/helper/setArrayPosition.js";
import { DATASOURCE, COLUMS } from "@/Mockdata.js";

export default {
  name: "Home",
  components: {
    Table,
  },
  data: () => {
    return {
      DATASOURCE,
      COLUMS,
    };
  },
  methods: {
    dragOver(e) {
      e.preventDefault();
    },
    dragStart: (e) => {
      e.target.style.opacity = "0.4";
      e.dataTransfer.setData("text", e.target.id);
    },
    dragLeave: (e) => {
      e.target.style.opacity = "1";
    },
    drop: (e) => {
      e.preventDefault();
      const draggedItem = e.dataTransfer.getData("text");
      const THIS = e.target.id;

      // Same colums Controller
      if (draggedItem !== THIS) {
        const draggedItemIndex = COLUMS.findIndex((e) => e.key === draggedItem);
        const dropedItemIndex = COLUMS.findIndex((e) => e.key === THIS);
        SetArrayPosition(COLUMS, draggedItemIndex, dropedItemIndex);
      }
    },
  },
};
</script>
