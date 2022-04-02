<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App' ,
} ;
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body:before {
    width: 100%;
    height: 100%;
    content: ' ';
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background: #fff;
}

html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: black;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
