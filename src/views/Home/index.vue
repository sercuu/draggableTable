<template>
  <div class="home">
    <Table
      :dataSource="DATASOURCE"
      :colums="COLUMS"
      :dragStart="dragStart"
      :dragLeave="dragLeave"
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
    dragStart: (e) => {
      e.target.style.opacity = "0.4";
      localStorage.setItem("dragedItem", e.target.id);
    },
    dragLeave: (e) => {
      e.target.style.opacity = "1";
      const THIS = e.target.id;
      const dragedItem = localStorage.getItem("dragedItem");

      e.dataTransfer.effectAllowed = "none";
      if (dragedItem !== THIS) {
        console.log("farkli colums");
        const dragedItemIndex = COLUMS.findIndex((e) => e.key === dragedItem);
        const dropedItemIndex = COLUMS.findIndex((e) => e.key === THIS);
        console.log(dragedItemIndex, dropedItemIndex, "dragedItemIndex");
        SetArrayPosition(COLUMS, dragedItemIndex, dropedItemIndex);
      }
    },
  },
};
</script>
