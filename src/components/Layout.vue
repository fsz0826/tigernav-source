<template>
  <div class="layout">
    <div class="tags-wrapper">
      <slot/>
    </div>
  </div>

</template>

<script lang="js">
  export default {
    name: "Layout"
  }
</script>

<style lang="scss" scoped>
  .layout {
    margin-right: auto;
    margin-left: auto;
    max-width: 900px;
    >.tags-wrapper{
      margin-left: -25px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
    }
  }
</style>