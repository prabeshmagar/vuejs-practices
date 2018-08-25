<template>
  <div id="app">
    <h1>Animations</h1>
    <hr>
    <select v-model="alertAnimation" class="form-control col-md-3 col-md-offset-3">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>

    </select>
    <button class="btn btn-primary" @click = "show = !show">Show Alert</button>
    <br><br>
    <transition :name="alertAnimation">
       <div class="alert alert-info col-md-6 col-lg-3" v-show="show">This is some Info</div>
    </transition>
    <transition :name="alertAnimation" type="animation">
       <div class="alert alert-info col-md-6 col-lg-3" v-if="show">This is some Info</div>
    </transition>
    <transition name="fade" 
        appear
        enter-active-class="animated bounce"
        leave-active-class="animated shake">
       <div class="alert alert-info col-md-6 col-lg-3" v-if="show">This is some Info</div>
    </transition>

    <transition :name="alertAnimation" type="animation" mode="out-in">
       <div class="alert alert-info col-md-6 col-lg-3" v-if="show" key="info">This is some Info</div>
      <div class="alert alert-warning  col-md-6 col-lg-3" v-else key="warning">This is some warning</div>
    </transition>
  <hr>
  <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
  <br><br>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCacelled"
    >
    <div style="width:100px; height:100px; background-color: lightgreen; margin-left: 45%;" v-if="load">  

    </div>
  </transition>
  <hr>
      <button class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert'  ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Components

      </button>
      <br><br>
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component> 
      </transition>
      <hr>
      <button class="btn btn-primary" @click="addItem"> Add Item </button>
      <br><br>
      <ul class="list-group">
          <transition-group name="slide">
            <li 
              class="list-group-item" 
              v-for="(number,index) in numbers"
              @click="removeItem(index)" 
              style="cursor: pointer" :key="number">{{ number }}
              </li>
          </transition-group>
      </ul>
  </div>
</template>

<script>
      import DangerAlert from './components/DangerAlert.vue'
      import SuccessAlert from './components/SuccessAlert.vue'

export default {
  name: 'app',
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: 'fade',
      selectedComponent: 'app-success-alert',
      numbers: [1,2,3,4]
      
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
    },
    enter(el, done) {
      console.log('enter');
      done();
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },
  beforeLeave(el) {
    console.log('beforeLeave');
  },
    leave(el, done) {
      console.log('leave');
      done();
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1)
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  },
  components:{
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;successAlert
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
  position: absolute;
}

.slide-move {
  transition: transform 1s;
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
