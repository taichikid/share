<template>
 <div class="header flex">
   <div class="left">
     <p class="logo">DSHARE</p>
   </div>
   <div class="right flex">
     <p class="signup" @click="$router.push('/signup')">新規登録</p>
     <p class="login" @click="$router.push('/login')">ログイン</p>
   </div>
 </div>
</template>

<style scoped>
.right {
 align-items: center;
}
.right p {
 margin-right: 20px;
 cursor: pointer;
}
.signup:hover{
 opacity: 0.3;
 transition-duration: 0.3s;
}
.login:hover{
 opacity: 0.3;
 transition-duration: 0.3s;
}
.header {
 margin: 20px;
}
.logo {
 font-size: 32px;
 width: 120px;
 cursor: pointer;
 font-family: 'Kaushan Script', cursive;
}
.flex {
 display: flex;
 justify-content: space-between;
}
</style>