<template>
	<!-- 指定组件的呈现位置 -->
    <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 
export default {
  name: 'App',
  // 路由组件是不需要做引入的，而是在router文件夹下的文件中做配置  一般来说一般组件和路由组件是要放在不同的文件中配置的
  components: {
	
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
</style>
