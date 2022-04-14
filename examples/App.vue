<template>
  <div id="app">
    <Demo />
    <br>
    <br>

    <m-card imgSrc="vue.png" summary="玩转组件库搭建全流程" />
    <br>
    <br>

    <m-card imgSrc="resume.png" summary="1小时带你写出亮眼的前端简历">
      <template #footer>
        <div class="footer">
          <div class="level">零基础 · 2338人报名</div>
          <div class="price">免费</div>
        </div>
      </template>
    </m-card>
    <br>
    <br>

    <m-card imgSrc="mini.png" :width="370" :imgHeight="90">
      一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径
      <template #footer>
        <div class="footer-mini">
          <div class="level">·4步骤·4门课</div>
          <div class="level">23118人收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-mini {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
