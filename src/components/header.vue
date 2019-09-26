<template>
    <header class="left-bar">
        <nav class="menu">
            <ul>
                <li class="selectMenu">
                    <router-link to="/dashboard"> 
                        <i class="fas fa-users-cog"></i>
                        Gerenciamento de Usuários
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/autores"> <i class="fas fa-feather-alt"></i> Autores de Projetos</router-link>
                </li>
                <li>
                    <span class="sub-menu-item" @click="openMenu = !openMenu"> 
                        <span><i class="fas fa-scroll"></i> Projetos</span> <i class="fas fa-chevron-down"></i> </span>
                    <transition name="">
                        <nav class="sub-menu" v-if="openMenu">
                            <ul>
                                <li>
                                    <router-link to="/">
                                        Meus Projetos
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        Todos os Projetos
                                    </router-link>
                                </li>
                            </ul>
                        </nav>    
                    </transition>
                </li>
                <li>
                    <router-link to="/dashboard/periodo-de-inscricao"> <i class="fas fa-calendar-day"></i> Periodo de Inscrições</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    data(){
        return{
            openMenu: false
        }
    }
}
</script>
<style lang="scss" scoped>
    
.left-bar{
    padding: 20px;
    box-shadow: 0px 0px 2px rgba( black, 0.2);
    max-width: 280px;
    min-height: calc(100vh - 100px);
    position: relative;
    a{
        text-decoration: none;
        color: $dark_gray;
        transition: 0.4s all;
    }
    .menu{
        & > ul li{
            transition: 0.4s all;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 1.1em;
            color: $dark_gray;
            &:hover{
                a{
                    color: $primary;    
                }
                color: $primary;
            }
        }
    }
    .sub-menu-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: 0.4s all;
        i{
            transition: 0.4s all;
            color: $dark_gray;
        }
        &:hover{
            & > *{
                color: $primary;    
            }
        }
        
    }
    .sub-menu{
        margin-top: 10px;
        padding-top: 5px;
        border-top: 1px solid rgba($gray, 0.4);
        & > ul li{
            padding: 10px;
            font-size: 1em;
        }
    }
}

.selectMenu{
    &:before{
        content: '';
        position: absolute;
        display: block;
        left: 0;
        margin-top: -4px;
        width: 10px;
        height: 30px;
        background-color: $primary;
        border-radius: 0 10px 10px 0;
    }
}
</style>