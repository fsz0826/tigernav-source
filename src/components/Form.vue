<template>
  <div class="globalHeader">
    <form action="https://www.baidu.com/s" class="searchForm" method="get">
      <input name="wd" type="text"/>
      <button>搜索</button>
    </form>
  </div>
</template>

<script lang="js">
  export default {
    name: "Form"
  }
</script>

<style lang="scss" scoped>
  .globalHeader {
    margin: 200px 0 50px 0;
    > .searchForm {
      display: flex;
      justify-content: space-between;
      max-width: 400px;
      margin-right: auto;
      margin-left: auto;
      > input{
        width: 100%;
        margin-right: 20px;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
      > button {
        white-space: nowrap;
        padding: 0 28px;
        border: none;
        border-radius: 4px;
        background: #0da2e2;
        color: white;
        font-size: 16px;
      }
    }


  }
</style>