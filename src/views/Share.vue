<template>
  <div class="flex">
    <div class="left">
      <SideNavi />
    </div>
    <div class="right">
      <div class="share">
        <div class="title">
          <p>シェア</p>
        </div>
        <textarea placeholder="シェアしたい内容を入力してください" v-model="share"></textarea>
        <div @click="send">
          <button>シェアする</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavi from "../components/SideNavi";
import axios from "axios";
export default {
  data() {
    return {
      share: "",
    };
  },
  methods: {
    send() {
      if (this.share === "") {
        alert("シェアする内容を入力してください");
      } else {
        axios
          .post("https://powerful-anchorage-95120.herokuapp.com/api/shares", {
            user_id: this.$store.state.user.id,
            share: this.share,
          })
          .then((response) => {
            console.log(response);
            alert("シェアしました");
            this.share = "";
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },
  },
  components: {
    SideNavi
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
.share textarea {
  width: 98%;
  height: 120px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 3px solid #1c9cad;
  background-color: black;
  border-radius: 10px;
  color: white;
  resize: none;
}
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  display: block;
  margin: 0 10px 0 auto;
  border-bottom: 5px solid rgb(24, 3, 32);
}
button:hover {
  border-bottom: 2px solid rgb(24, 3, 32);
  margin-top: 3px;
}
.title {
  border: 3px solid  #1c9cad;
  background-color: black;
  border-radius: 10px;
  padding: 15px;
}
.title p {
  font-size: 20px;
  font-weight: bold;
}
</style>