<template>
  <div class="flex">
    <div class="left">
      <SideNavi />
    </div>
    <div class="right">
      <div class="title">
        <p>プロフィール</p>
      </div>
      <div class="profile">
        <div class="flex-profile">
          <p class="profile-name">{{name}}</p>
          <div @click="edit">
            <button>変更する</button>
          </div>
        </div>
        <p class="text" v-if="active">{{profile}}</p>
        <input type="text" v-model="profile" v-else />
      </div>
      <Message />
    </div>
  </div>
</template>

<script>
import SideNavi from "../components/SideNavi";
import Message from "../components/Message";
import axios from "axios";
export default {
  data() {
    return {
      active: true,
      name: this.$store.state.user.name,
      profile: this.$store.state.user.profile,
    };
  },
  methods: {
    edit() {
      if (!this.active) {
        axios
          .put("https://powerful-anchorage-95120.herokuapp.com/api/user", {
            email: this.$store.state.user.email,
            profile: this.profile,
          })
          .then((response) => {
            this.$store.dispatch("changeUserData", {
              profile: this.profile,
            });
            console.log(response);
          });
      }
      this.active = !this.active;
    },
  },
  components: {
    SideNavi,
    Message,
  },
};
</script>

<style scoped>
.left {
  width: 10%;
  height: 100vh;
}
.right {
  width: 90%;
  height: 100vh;
}
.flex {
  display: flex;
}
.profile {
  padding: 20px;
  border: 3px solid #1c9cad;
  background-color: black;
  border-radius: 10px;
}
.profile-name {
  font-size: 24px;
}
.title {
  border: 3px solid #1c9cad;
  background-color: black;
  border-radius: 10px;
  padding: 15px;
}
.title p {
  font-size: 20px;
  font-weight: bold;
}
.flex-profile {
  display: flex;
  justify-content: space-between;
}
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  display: block;
  margin: 0 0 0 auto;
  border-bottom: 5px solid rgb(24, 3, 32);
}
button:hover {
  border-bottom: 2px solid rgb(24, 3, 32);
  margin-top: 3px;
}
</style>