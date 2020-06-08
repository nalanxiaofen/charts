<template>
  <div id="app">
    <div id="page">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
body,div,p,ul,ol,li{padding: 0;margin: 0;list-style: none;box-sizing: border-box;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  min-width: 900px;
  overflow: hidden;
}

#nav {
  padding: 5px;
  background-color: darkslategrey;
  a {
    font-weight: bold;
    color: #42b983;

    &.router-link-exact-active {
      color: #f5f5f5;
    }
  }
}
#page{
  flex: 1;
  position: relative;
}
</style>
