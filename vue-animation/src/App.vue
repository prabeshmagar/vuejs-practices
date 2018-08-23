<template>
  <div id="app">
    <h1>Animations</h1>
    <hr>
    <button class="btn btn-primary" @click = "show = !show">Show Alert</button>
    <br><br>
    <transition name="fade">
       <div class="alert alert-info col-md-6 col-lg-3" v-if="show">This is some Info</div>
    </transition>
    <transition name="slide" type="animation">
       <div class="alert alert-info col-md-6 col-lg-3" v-if="show">This is some Info</div>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.alert {
  margin-left: 700px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
} 

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {

}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

</style>
