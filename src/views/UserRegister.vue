<template>
    <div>
    
        <header class="detalhe"></header>
    
        <div class="main-container">
    
            <w-header></w-header>
    
            <w-dashboard-content>
    
                <template v-slot:title>Cadastrado de usuário</template>
                <template v-slot:content>
                    <form method="post" class="frm">
                        <div v-for="field in fields" :key="field.id" class="field-zone">
                            <w-input v-if="field.type != 'select'" :field="field"  ></w-input>
                            <w-select v-else :field="field" :options="field.options"></w-select>
                        </div>
                        <div class="algn-end">
                            <div class="btn-zone">
                                <w-button  @clickButton="comeback" text="Cancelar" type="ghost"></w-button>
                                <w-button text="Cadastrar"></w-button>
                            </div>
                        </div>
                        
                    </form>
                </template>
                    
            </w-dashboard-content>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            fields: [{
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
                    id: "txt_cel",
                    value: "",
                    type: "text",
                    label: "Celular",
                    valid: true,
                    mask: "(##) ##### - ####"
                },
                 {
                    id: "txt_lattes",
                    value: "",
                    type: "text",
                    label: "Lattes",
                    valid: true,
                },
                {
                    id: "txt_titulacao",
                    value: "",
                    type: "select",
                    label: "Titulação",
                    valid: true,
                    options: ["Mestre", "Doutor"]
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
        }
    },
    methods: {
        comeback(){
            this.$router.push('/dashboard')
        }
    }
}
</script>
<style lang="scss" scoped>
.detalhe {
    height: 100px;
    background-color: $primary;
}

.main-container {
    display: grid;
    grid: auto / 280px auto;
}

.frm{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .field-zone{
        margin: 10px 0;
        width: calc(50% - 15px);
    }
    .algn-end{
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
    .btn-zone{
        max-width: 320px;
        display: grid;
        grid: auto / 150px 150px;
        grid-column-gap: 20px;
        height: 45px;
    }
}
</style>