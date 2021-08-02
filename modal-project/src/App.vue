<template> 
    <!-- <Modal/> -->
    <router-view></router-view>
</template>

<script>
import Modal  from './components/Modal.vue' ;
import getAll  from './components/getAll.vue' 

export default {
  name: 'App',
  components: { Modal, getAll}
}

</script>

<style>

</style>
