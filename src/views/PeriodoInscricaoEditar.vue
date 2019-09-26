<template>
    <div>
    
        <header class="detalhe"></header>
    
        <div class="main-container">
    
            <w-header></w-header>
    
            <w-dashboard-content>
    
                <template v-slot:title>Período de inscrição</template>
                <template v-slot:content>
                    <form method="post" class="frm">
                        <h3>Submissão de projeto</h3>
                        <div v-for="field in zone1" :key="field.id" class="field-zone">
                            <w-input :field="field"  ></w-input>
                        </div>
                        <h3>Re-submissão com correções</h3>
                        <div v-for="field in zone2" :key="field.id" class="field-zone">
                            <w-input :field="field"  ></w-input>
                        </div>
                        <h3>Relatório parcial de 6 meses</h3>
                        <div v-for="field in zone3" :key="field.id" class="field-zone">
                            <w-input :field="field"  ></w-input>
                        </div>
                        <h3>Relatório final de 1 ano</h3>
                        <div v-for="field in zone4" :key="field.id" class="field-zone">
                            <w-input :field="field"  ></w-input>
                        </div>
                        <div class="algn-end">
                            <div class="btn-zone">
                                <w-button @clickButton="comeback" text="Cancelar" type="ghost"></w-button>
                                <w-button text="Salvar"></w-button>
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
            zone1: [{
                    id: "txt_dt_inicial",
                    value: "",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####"
                },
                {
                    id: "txt_dt_final",
                    value: "",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####"
                }
            ],
            zone2: [{
                    id: "txt_dt_inicial_2",
                    value: "",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####"
                },
                {
                    id: "txt_dt_final_2",
                    value: "",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####"
                }
            ],
            zone3: [{
                    id: "txt_dt_inicial_3",
                    value: "",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####"
                },
                {
                    id: "txt_dt_final_3",
                    value: "",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####"
                }
            ],
            zone4: [{
                    id: "txt_dt_inicial_4",
                    value: "",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####"
                },
                {
                    id: "txt_dt_final_4",
                    value: "",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####"
                }
            ],
        }
    },
    methods:{
        comeback(){
            this.$router.push('/dashboard/periodo-de-inscricao')
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
    h3{
        width: 100%;
        font-size: 1.1em;
        color: lighten($gray, 10%);
        margin: 0 0 10px;
        font-weight: normal;
    }
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