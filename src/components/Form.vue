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
    margin: 100px 24px 20px 24px ;
    > .searchForm {
      display: flex;
      justify-content: space-between;
      > input{
        border: none;
        width: 100%;
        margin-right: 20px;
        height: 40px;
        padding: 0 10px;
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