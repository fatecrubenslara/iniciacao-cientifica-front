<template>
  <div class="cadastro" >

      <form method="POST" class="container-form">
        <router-link to="/" class="lnk">
            <i class="fas fa-chevron-left"></i>
            Voltar
        </router-link>
        <h2>Cadastro</h2>
        <div class="fields-zone">
            <div v-for="field in fields" :key="field.id" >
                <w-input v-if="field.type != 'select'" :field="field"></w-input>
                <w-select v-else :field="field" :options="field.options"></w-select>
            </div>
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
          id: "txt_name",
          value: "",
          type: "text",
          label: "Nome",
          valid: true
        },
        {
          id: "txt_cpf",
          value: "",
          type: "text",
          label: "CPF",
          valid: true,
          mask: "###.###.### - ##"
        },
        {
          id: "txt_email",
          value: "",
          type: "text",
          label: "Email",
          valid: true
        },
        {
          id: "txt_titulacao",
          value: "",
          type: "select",
          label: "Titulação",
          valid: true,
          options: [ "Mestre", "Doutor"]
        },
         {
          id: "txt_area",
          value: "",
          type: "text",
          label: "Area",
          valid: true
        },
        {
          id: "txt_linha_pesquisa",
          value: "",
          type: "text",
          label: "Linha de pesquisa",
          valid: true
        },
        
        
        {
          id: "txt_cel",
          value: "",
          type: "text",
          label: "Celular",
          valid: true,
          mask: "(##) ##### - ####"
        },
         {
          id: "txt_password",
          value: "",
          type: "password",
          label: "Senha",
          valid: true
        },
        
         {
          id: "txt_conf_password",
          value: "",
          type: "password",
          label: "Confirme sua senha",
          valid: true
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
    .cadastro{
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
            max-width: 500px;
            width: 100%;   
            background-color: white;
            box-shadow: 0px 0px 2px rgba($black, 0.3);
            border-radius: 20px;
            padding: 50px;
            display: grid;
            grid-row-gap: 10px;
            position: relative;
            .fields-zone{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                @media screen and ( min-width: 500px ){    
                    & > div{
                        width: calc(50% - 5px);
                        &:nth-child(3){
                            width: 100%;
                        }
                    }   
                }
                @media screen and ( max-width: 499px){
                    & > div{
                        width: 100%;
                    }
                }
            }
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
                bottom: -6px;
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>