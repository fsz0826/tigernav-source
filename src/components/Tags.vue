<template>
  <div class="tag-wrapper">
    <div class="site" @click="openA">
      <div class="logo">{{logo}}</div>
      <div class="link">{{url}}</div>
    </div>
    <div class="close" @click="rem(index)">
      <svg class="icon">
        <use xlink:href="#icon-remove"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="js">
  import XXX from "../source"

  export default {
    name: "Tags",
    props: ['logo', 'urls','index'],
    data(){
      return{
        url:''
      }
    },
    methods: {
      openA() {
        window.open(this.urls, "_self");
      },
      rem(index){
        XXX.remove(index)
      },
    },
    created() {
        this.url =XXX.simplifyUrl(this.urls)
    }
  }
</script>

<style lang="scss" scoped>
  .tag-wrapper {
    position: relative;
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
      }

      > .link {
        font-size: 18px;
        margin-top: 4px;
        color: black;
      }
    }

    > .close {
      position: absolute;
      right: 5px;
      top: 3px;
      display: none;
    }
  }

</style>