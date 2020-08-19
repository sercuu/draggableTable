const { sign } = require("core-js/fn/number");

<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
