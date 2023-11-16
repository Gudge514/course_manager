<template>
    <div id="app">
      <PrimeSplitter />
    </div>
  </template>
  
  <script>
  import PrimeSplitter from '@/components/PrimeSplitter.vue';
  
  export default {
    components: {
        PrimeSplitter,
    },
    data() {
      return {
        tags: ['Vue', 'JavaScript', 'Web Development', 'Frontend'],
      };
    },
  };
  </script>
  
  <style>
  /* 根据需求定义样式 */
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  