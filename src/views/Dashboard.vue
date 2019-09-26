<template>
    <div>
        <header class="detalhe"></header>
        <div class="main-container">
            <w-header></w-header>
            <w-dashboard-content>
                <template v-slot:title>Usuários Cadastrados</template>
                <template v-slot:button>
                    <router-link to="/dashboard/usuario/cadastro" class="lnk">
                        <i class="fas fa-plus"></i>
                        Cadastrar
                    </router-link>
                </template>
                <template v-slot:content>
                    <div class="table">
                        <div class="controls">
                            <w-input :field="fields" ></w-input>
                            <w-select :options="fields2.options" :field="fields2" ></w-select>
                        </div>
                        <div class="head">
                            <h3>Nome</h3>
                            <h3>CPF</h3>
                            <h3>E-mail</h3>
                            <h3>Área</h3>
                            <h3></h3>
                        </div>
                        <div class="content">
                            <div class="line">
                                <h4>Ruy Cordeiro</h4>
                                <h4>483.346.718-65</h4>
                                <h4>ruy.cordeiro@gmail.com</h4>
                                <h4>Logística</h4>
                                <i class="fas fa-chevron-down"></i>
                                <div class="more-content">
                                    <article>
                                        <strong>Nível de acesso</strong>
                                        <h5>Orientador</h5>
                                    </article>
                                    <article>
                                        <strong>Titulação</strong>
                                        <h5>Mestre</h5>
                                    </article>
                                    <article>
                                        <strong>Lattes</strong>
                                        <h5>https://lattes.com.br</h5>
                                    </article>
                                    <article class="container-acoes">
                                        <strong>Ações</strong>
                                        <div>
                                            <router-link to="/dashboard/usuario/editar"><i class="fas fa-edit"></i></router-link>
                                            <i class="fas fa-trash-alt"></i>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div class="line" v-for="i in 4" :key="i">
                                <h4>Ruy Cordeiro</h4>
                                <h4>483.346.718-65</h4>
                                <h4>ruy.cordeiro@gmail.com</h4>
                                <h4>Logística</h4>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            
                        </div>
                        <div class="pagination">
                            <nav>
                                <ul>
                                    <li>
                                        <i class="fas fa-chevron-left"></i>
                                    </li>
                                    <li>1</li>
                                    <li class="select">2</li>
                                    <li>3</li>
                                    <li>
                                        <i class="fas fa-chevron-right"></i>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </template>
                
            </w-dashboard-content>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            fields:{
                id: "txt_login",
                value: "",
                type: "text",
                label: "Pesquisar",
                valid: true
                },
            fields2:{
                id: "txt_select",
                value: "",
                type: "select",
                label: "Orderna por:",
                valid: true,
                options: [ 'Nome', 'Titulo', 'Nível de acesso']
                },
        }
    }
}
</script>
<style lang="scss" scoped>
    .detalhe{
        height: 100px;
        background-color: $primary;
    }
    .main-container{
        display: grid;
        grid: auto / 280px auto;
    }
    
    .table{
        .controls{
            margin-top: 20px;
            display: grid;
            grid-column-gap: 15px;
            justify-content: end;
            grid: auto / 250px 150px;
        }
        .line, .head{
            padding: 10px;
            display: grid;
            grid: auto / 24% 24% 24% 24% 30px;
            justify-content: space-between;
        }
        .head{
            border-bottom: 1px solid $primary;
            h3{
                color: $primary;
                margin: 0 0 10px;
                font-size: 0.9em;

            }
        }
        .content{
            align-items: center;
            min-height: 350px;
            h4{
                font-size: 0.85em;
                font-weight: normal;
                margin: 0;
                padding: 10px 0;
            }
            .line{
                &:nth-child(2n){
                    background-color: rgba(lighten($primary,30%), 0.2);
                }
                .more-content{
                    grid-column: 1 / span 5;
                    display: grid;
                    grid: auto / 24% 24% 24% auto;
                    padding: 10px 0; 
                    article{
                        margin-right: 20px;
                    }
                    h5{
                        margin: 0;
                        font-weight: normal;
                    }
                    strong{
                        font-size: 0.8em;
                        color: $primary;
                    }
                    .container-acoes{
                        text-align: center;
                        justify-self: end;
                        margin: 0;
                        i:first-of-type{
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
        .pagination{
            max-width: 200px;
            margin: 20px auto 0;
            nav{
                ul{
                    display: flex;
                    justify-content: space-between;
                    li{
                        width:30px;
                        height: 30px;
                        border: 1px solid $primary;
                        display: grid;
                        align-items: center;
                        justify-content: center;
                        color: $primary;
                        cursor: pointer;
                        transition: 0.4s all;
                        &:hover{
                            transform: scale(1.1);
                        }
                    }
                    .select{
                        background-color: $primary;
                        color: white;
                    }
                }
            }
            
        }
    }
    .lnk{
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
        i{
            width: 20px;
            height: 20px;
            background-color: white;
            color: $primary;
            border-radius: 50%;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            text-align: center;
            &:before{
                position: relative;
                top: 2px;
            }
        }
        &:hover{
            transform:scale(0.95);
        }
    }

</style>