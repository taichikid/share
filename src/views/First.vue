<template>
 <div class="cover">
    <div>
        <div class="youkoso">
            <p class="title">DREAM SHARE</p>
            <p class="sub-title">~夢日記~</p>
            <p>誰しもが寝ている時一度は見たことがあるだろう夢。この世には様々な夢があり、それらすべてが非常に興味深いと私は思っている。しかし、時間が経つにつれ内容を忘れてしまうことが多いと思う。もったいない！そう思う方々も少なからずいるのではないか、そんな方々にはぜひ夢を記録し、共有するアプリ「DREAM SHARE」縮めてDSHAREを使ってほしい！そして私にみんなの夢を教えてほしい！</p>
            <button @click="$router.push('/login')">ようこそ夢の中へ！</button>
        </div>
    </div>
 </div>
</template>

<script>
export default { 
};
</script>

<style scoped>
p {
  font-size: 24px;
}
button {
  margin-top: 20px;
  width: 140px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  cursor: pointer;
  font-family: "Hannari";
  border-bottom: 5px solid rgb(24, 3, 32);
}
button:hover {
  margin-top: 23px;
  border-bottom: 2px solid rgb(24, 3, 32);
}
.title {
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 20px;
}
.sub-title {
    margin-bottom: 20px;
    font-size: 30px;
}
.youkoso {
  padding-top: 100px;
  margin: 0 auto;
  width: 500px;
  text-align: center;
}
.youkoso p {
  color: rgb(194, 47, 182);
  text-align: center;
  font-family: "Hannari";
  font-family: 'Kaushan Script', cursive;
  text-shadow: 2px  2px 3px white,
            -2px  2px 3px  white,
             2px -2px 3px  white,
            -2px -2px 3px  white;
}
.cover {
    background-image: url("../assets/bed-1284238_1920.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    min-height: 100vh;
}
</style>