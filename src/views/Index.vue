<template>
  <div class="two">
    <section class="zone-1">
      <h2>Login</h2>
      <i class="fas fa-user"></i>
      <router-link to="/login" class="btn">Login</router-link>
    </section>
    <section class="zone-2">
      <h2>Cadastro</h2>
      <i class="fas fa-user-plus"></i>
      <router-link to="/cadastro" class="btn">Cadastro</router-link>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.two {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > section {
    @media screen and ( min-width: 600px ){            
      width: 50%;
      min-height: 100vh;
    }
    @media screen and ( max-width: 599px){
      width: 100%;
      min-height: 50vh;
      padding: 60px 40px;
    }
    display: flex;
    
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    h2{
      font-size: 1.8em;
      margin: 0;
    }
    i {
      font-size: 40px;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      display: flex;
      margin: 25px 0;
      justify-content: center;
      align-items: center;
    }
  }
  
  .btn{
    padding: 10px 0;
    width: 120px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    border-radius: 30px;
    transition: 0.4s all;
    &:hover{
      transform: scale(1.1);
    }
  }
  .zone-1 {
    h2{
      color: $primary;
    }
    i {
      color: $primary;
      border: 2px solid $primary;
    }
    
    .btn{
      background-color: $primary;
      color: white;
    }
  }

  .zone-2 {
    background-color: $primary;
    .btn{
      background-color: white;
      color: $primary;

    }
    h2{
      color: white;
    }
    i {
      color: white;
      border: 2px solid white;
    }
  }
}
</style>