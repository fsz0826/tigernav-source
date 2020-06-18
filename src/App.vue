<template>
  <div id="app">
    <Form/>
    <Layout>
      <Tags v-for="(node,index) in source" :key="index" :logo="node.logo" :urls="node.url" :index="index"/>
      <Add/>
    </Layout>
  </div>

</template>

<script>
  import Layout from "./components/Layout"
  import Form from "./components/Form"
  import Tags from "./components/Tags"
  import XXX from "./source"
  import Add from "./components/Add"

  export default {
    name: 'App',
    components: {Add, Tags, Form, Layout},
    data(){
      return{
        source:XXX.hashMap
      }
    },
    created() {
    }
  }
</script>

<style lang="scss">
  /*reset*/
  * {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #eee;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
