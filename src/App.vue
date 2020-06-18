<template>
  <div id="app">
    <Form/>
    <Layout>
      <Tags/>
      <Tags/>
      <Tags/>
      <Tags/>
      <Tags/>
    </Layout>
  </div>

</template>

<script>
  import Layout from "./components/Layout"
  import Form from "./components/Form"
  import Tags from "./components/Tags"

  export default {
    name: 'App',
    components: {Tags, Form, Layout},
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
