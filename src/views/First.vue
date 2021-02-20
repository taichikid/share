<template>
    <div>
        <HeaderAuth />
        <div class="youkoso">
            <p>DREAM SHARE</p>
            <p>~DSHARE~</p>
            <p>誰しもが寝ている時一度は見たことがあるだろう夢。へんてこな夢、怖い夢、正夢など様々な夢があり、それらすべてが非常に興味深いと私は思っている。しかし、時間が経つにつれ内容を忘れてしまうことが多いと思う。ひじょーーーにもったいない！！！そう思う方々も少なからずいるのではないか、そんな方々にはぜひ夢を記録し、共有するアプリ「DREAM SHARE」縮めてDSHAREを使ってほしい！そして私にみんなの夢を教えてほしい！</p>
            <button @click="$router.push('/')">ようこそ夢の中へ！</button>
        </div>
    </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
export default {
  components: {
    HeaderAuth
  }, 
};
</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  cursor: pointer;
}
.youkoso {
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
.youkoso p {
  color: black;
  font-weight: bold;
  text-align: center;
}
</style>