<template>
  <div class="home"
    :style="{
      left: leav ? '-100%' : '0'
    }"
  >
    <h1 class="pos-index-2">Welcome! <br>To get acquainted, click on Get started.</h1>
    <img src="@/assets/bg.png" class="bg-image" alt="Background image">
    <ButtonComponent 
      class="pos-index-2 button"
      @click="nexStep"
    >
      Get Started <span>&#10148;</span>
    </ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from '@/components/Button1Component.vue';

export default {
  name: 'HomeView',
  components: {
    ButtonComponent
  },
  data(){
    return{
      leav: false
    }
  },
  methods:{
    nexStep(){
      this.leav = true;

      setTimeout(()=>{
        this.$router.push({"name": "adaptation", params: { id: 1 }})
      }, 700)
    },
  }
}
</script>

<style scoped>
.button:hover span{
  font-size: 18px;
}
.button span{
  font-size: 0px;
  transition: .3s;
}
.button{
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 4px;
}

</style>
