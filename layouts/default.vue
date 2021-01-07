<template>
  <div>
    <div class="topbar">TopBar</div>
    <div class="secondbar">SecondBar</div>
    <div class="img"></div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.topbar {
  font-family: SansEnglishW7, 'Source Sans Pro';
  font-size: 20px;
}
.secondbar {
  font-family: SansEnglishW3, 'Source Sans Pro';
  font-size: 16px;
}

.img {
  width: 30px;
  height: 30px;
  background-image: url("http://img.yao51.com/jiankangtuku/phsnnwqpsy.jpeg");
  background-size: contain;
}
</style>
