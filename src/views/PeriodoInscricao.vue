<template>
    <div>
        <header class="detalhe"></header>
        <div class="main-container">
            <w-header></w-header>
            <w-dashboard-content>
                <template v-slot:title>Período de inscrição
                </template>
                <template v-slot:button>
                    <router-link to="/dashboard/periodo-de-inscricao/editar" class="lnk">
                        <i class="fas fa-plus"></i> Editar
                    </router-link>
                </template>
                <template v-slot:content>
                    <form method="post" class="frm">
                        <h3>Submissão de projeto</h3>
                        <div v-for="field in zone1" :key="field.id" class="field-zone">
                            <w-input :field="field"></w-input>
                        </div>
                        <h3>Re-submissão com correções</h3>
                        <div v-for="field in zone2" :key="field.id" class="field-zone">
                            <w-input :field="field"></w-input>
                        </div>
                        <h3>Relatório parcial de 6 meses</h3>
                        <div v-for="field in zone3" :key="field.id" class="field-zone">
                            <w-input :field="field"></w-input>
                        </div>
                        <h3>Relatório final de 1 ano</h3>
                        <div v-for="field in zone4" :key="field.id" class="field-zone">
                            <w-input :field="field"></w-input>
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
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                },
                {
                    id: "txt_dt_final",
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                }
            ],
            zone2: [{
                    id: "txt_dt_inicial_2",
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                },
                {
                    id: "txt_dt_final_2",
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                }
            ],
            zone3: [{
                    id: "txt_dt_inicial_3",
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                },
                {
                    id: "txt_dt_final_3",
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                }
            ],
            zone4: [{
                    id: "txt_dt_inicial_4",
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Inicial",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                },
                {
                    id: "txt_dt_final_4",
                    value: "04/11/2019",
                    type: "text",
                    label: "Data Final",
                    valid: true,
                    mask: "##/##/####",
                    disabled: true
                }
            ],
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

.frm {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h3 {
        width: 100%;
        font-size: 1.1em;
        color: lighten($gray, 10%);
        margin: 0 0 10px;
        font-weight: normal;
    }
    .field-zone {
        margin: 10px 0;
        width: calc(50% - 15px);
    }
    .algn-end {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
    .btn-zone {
        max-width: 320px;
        display: grid;
        grid: auto / 150px 150px;
        grid-column-gap: 20px;
        height: 45px;
    }
}

.lnk {
    font-size: 16px;
    background-color: $primary;
    color: white;
    padding: 10px;
    display: grid;
    grid: auto / 20px auto;
    grid-column-gap: 10px;
    border-radius: 30px;
    align-items: center;
    text-decoration: none;
    transition: 0.4s all;
    i {
        width: 20px;
        height: 20px;
        background-color: white;
        color: $primary;
        border-radius: 50%; // display: flex;
        // align-items: center;
        // justify-content: center;
        text-align: center;
        &:before {
            position: relative;
            top: 2px;
        }
    }
    &:hover {
        transform: scale(0.95);
    }
}
</style>