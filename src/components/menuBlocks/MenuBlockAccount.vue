<template>
    <div class="menu__block__account">
        <router-link
            :to="{name: 'account'}"
        >
            <img src="../../assets/img/icons/account.svg" alt=""></img>
        </router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .menu__block__account{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .menu__block__account a img{
        height: 80%;
        width: auto;
    }
</style>