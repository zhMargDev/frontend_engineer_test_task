<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1E2130;
  color: #f5f5f5;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden
}

@keyframes show {
    0%{
        opacity: 0;
        top: -20%;
    }
    100%{
        opacity: 1;
        top: 0;
    }
}

body{
  margin: 0;
}
.XTranslate{
  display: none;
}


@keyframes shine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.pos-index-2{
  z-index: 2;
  position: relative;
}
h1{
  font-size: clamp(40px, 10vw, 70px);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(to right, #28c76f 0%, #5a4aff 47.92%, #ff3739 100%);
  background-size: 200% auto;
  color: #444050;
  background-clip: text;
  line-height: 1.2;
  text-fill-color: rgba(0,0,0,0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0,0,0,0);
  animation: shine 2s ease-in-out infinite alternate;
}
.home{
  animation: show .5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: .7s;
  position: relative;
}
.bg-image{
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
