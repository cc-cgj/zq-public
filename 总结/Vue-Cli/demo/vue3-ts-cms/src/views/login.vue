<template>
  <div>
    <el-button @click="foo">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts">
// import {defineComponent}  from 'vue'
const mixin = {
  setup() {
    console.log(11111)
    return {
      aa: 1
    }
  }
}
export default {
  mixins: [mixin],
  props: {
    name: String
  },
  methods: {
    foo() {
      console.log(111, this)
    }
  }
  // components: {
  //   ElButton
  // }
}
</script>

<style lang="scss" scoped></style>
