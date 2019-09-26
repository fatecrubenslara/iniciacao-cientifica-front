<template>
  <div class="login" >

      <form method="POST" class="container-form">
        <router-link to="/" class="lnk">
            <i class="fas fa-chevron-left"></i>
            Voltar
        </router-link>
        <h2>Login</h2>
        <div v-for="field in fields" :key="field.id">
            <w-input :field="field"></w-input>
        </div>
        <div class="btn-secundario">
            <w-button type="second" text="Esqueci minha senha"></w-button>
        </div>
            
          <w-button class="btn-principal" text="Entrar"></w-button>

          <figure class="detalhes">
              <img src="/images/bgDetalhe.png" alt="Detalhe">
          </figure>
      </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          id: "txt_login",
          value: "",
          type: "text",
          label: "E-mail",
          valid: true
        },

        {
          id: "txt_password",
          value: "",
          type: "password",
          label: "Senha",
          valid: true
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
    .login{
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('/images/bgRegister.png');
        background-size: cover;
        .container-form{
            @media screen and ( min-width: 500px){
                padding: 50px;
            }
            @media screen and ( max-width: 499px){
                padding: 30px;
            }
            width: 100%;   
            max-width: 380px;   
            background-color: white;
            box-shadow: 0px 0px 2px rgba($black, 0.3);
            border-radius: 20px;
            
            display: grid;
            grid-row-gap: 10px;
            position: relative;
            .lnk{
                position: relative;
                top: -15px;
                font-weight: bold;
                text-decoration: none;
                color: $second;
                transition: 0.4s all;
                font-size: 0.9em;
                &:hover{
                    transform: scale(1.02);
                }
            }
            h2{
                text-align: center;
                color: $primary;
                font-size: 1.8em;
                margin-top: 0;
            }
            .btn-principal{
                margin-top: 40px;
                margin-bottom: 50px;
            }
            .btn-secundario{
                font-size: 0.85em;
                max-width: 130px;
                justify-self: flex-end;
            }
            .detalhes{
                position: absolute;
                left: 0px;
                bottom: -4px;
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>