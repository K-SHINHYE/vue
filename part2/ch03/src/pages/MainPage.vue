<template>
  <div>
    <ul>
      <li><router-link to="/">Main</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </div>
</template>

<script>
export default{
  // data(){} = data:function(){}
  data(){
    return {
      // monitoring해주는 값을 여기에 적어주면 됨
    }
  }
}
</script>
