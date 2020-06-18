<template>
  <div class="tag-wrapper">
    <div class="site" @click="addSource">
      <div class="logo">
        <svg class="icon">
          <use xlink:href="#icon-add"></use>
        </svg>
      </div>
      <div class="link">新增站点</div>
    </div>
  </div>
</template>

<script lang="js">
  import XXX from "../source"

  export default {
    name: "Add",
    methods:{
      addSource(){
        XXX.add()
      }
    },
    created() {
      console.log(XXX.hashMap)
    }
  }
</script>

<style lang="scss" scoped>
  .tag-wrapper {
    background: white;
    border: 1px solid #ddd;
    width: 160px;
    border-radius: 4px;
    padding: 10px 0;
    cursor: pointer;
    margin-right: 25px;
    margin-bottom: 10px;

    &:hover .close {
      display: block;
    }

    .site {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      position: relative;

      > .logo {
        width: 64px;
        height: 64px;
        font-size: 64px;
        text-transform: uppercase;
        color: black;

        > .icon {
          width: 56px;
          height: 56px;
        }
      }

      > .link {
        font-size: 15px;
        margin-top: 4px;
        color: black;
      }
    }

  }
</style>