<template>
    <div class="main__menu">
        <div class="main__menu-logo">
            <router-link
                :to="{ name: 'home' }"
            >
                <img src="../../assets/img/main-logo.png" alt="">
            </router-link>
        </div>
        <div class="main__menu-account">
            <MenuBlockAccount><</MenuBlockAccount>
        </div>
        <div class="main__menu-menu">
            <MenuBlockMenu></MenuBlockMenu>
        </div>
    </div>
</template>

<script setup>
    import MenuBlockMenu from '../menuBlocks/MenuBlockMenu.vue';
    import MenuBlockAccount from '../menuBlocks/MenuBlockAccount.vue';
</script>

<style scoped> 
    .main__menu{
        width: 100%;
        height: 100%;
        background: var(--main-color-gradient-background-blocks);
        border-radius: var(--main-block-border-radius);
        border: 1px solid var(--border-color);
        padding: 30px 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main__menu-logo{
        margin-bottom: 15px;
    }
    .main__menu-logo a{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .main__menu-logo a img{
        width: 90%;
        height: auto;
        display: block;;
    }
    .main__menu-account{
        border-bottom: 1px solid var(--border-color-dark);
        width: 80%;
        padding: 10px 0px;
    }
</style>