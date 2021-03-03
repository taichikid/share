<template>
  <div>
    <div id="hamburger" @click="hamburger()" :class="{'active':isClass}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="left-padding" :class="{'open':isClass}">
      <p class="logo">DSHARE</p>
      <div class="flex icon-field" @click="$router.push('/home')">
        <img class="icon" src="../assets/home.png" />
        <p>ホーム</p>
      </div>
      <div class="flex icon-field" @click="$router.push('/profile')">
        <img class="icon" src="../assets/profile.png" />
        <p>プロフィール</p>
      </div>
      <div class="flex icon-field" @click="$router.push('/share')">
        <img class="icon" src="../assets/えんぴつのアイコン素材.png" />
        <p>シェア</p>
      </div>
      <div class="flex icon-field" @click="$store.dispatch('logout')">
        <img class="icon" src="../assets/logout.png" />
        <p>ログアウト</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClass: false
    };
  },
  methods: {
    hamburger() {
      this.isClass = !this.isClass;
    }
  }
};
</script>

<style scoped>
.left-padding {
  padding: 20px;
  width: calc(100% - 580px);
  transition: 0.2s;
  position: fixed;
  top: 0;
  left: calc(-100% - 580px);
  box-shadow: 5px 0 5px 535px rgba(38, 98, 213, 0.3);
  z-index: 998;
  background-color:black;
  height: 100%;
}
.flex {
  display: flex;
}
.logo {
 padding: 5px 0;
 font-size: 30px;
 width: 100px;
 cursor: pointer;
 font-family: 'Kaushan Script', cursive;
}
.icon-field {
  margin-top: 15px;
  cursor: pointer;
}
.icon-field:hover {
  opacity: 0.3;
  transition-duration: 0.3s;
}
.icon {
  width: 25px;
}
.icon-field p {
  font-size: 16px;
  padding-left: 15px;
}
#hamburger {
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  z-index: 100;
  top: 15px;
  left: 20px;
  transition: 0.4s;
  z-index: 999;
}
#hamburger span {
  position: absolute;
  left: 2px;
  display: block;
  width: 35px;
  height: 2px;
  background-color: #fff;
  transition: 0.8s;
}
#hamburger span:nth-of-type(1) {
  top: 10px;
}
#hamburger span:nth-of-type(2) {
  top: 20px;
}
#hamburger span:nth-of-type(3) {
  top: 30px;
}
#hamburger.active span:nth-of-type(1) {
    top: 20px;
    transform: rotate(45deg);
  }

  #hamburger.active span:nth-of-type(2) {
    opacity: 0;
  }
  #hamburger.active span:nth-of-type(3) {
    top: 20px;
    transform: rotate(-45deg);
  }
  #hamburger.active {
    left: 170px;
  }
  .left-padding.open {
    left: 0;
  }
</style>