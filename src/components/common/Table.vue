<template>
  <table class="table table-hover table-dark" width="100%">
    <thead>
      <tr>
        <th
          v-for="colum in colums"
          :key="colum.key"
          :id="colum.key"
          draggable="true"
          @dragstart="dragStart"
          @dragleave="dragLeave"
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
  props: ["dataSource", "colums", "dragStart", "dragLeave"],
};
</script>
