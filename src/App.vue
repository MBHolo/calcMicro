<template>
    <div class="main__block">
        <div class="main__block-header"><PageBlockHeader></PageBlockHeader></div>
        <div class="main__block-container"><router-view /></div>
    </div>    
    <div class="main__block-menu">
        <PageBlockMenuBlock></PageBlockMenuBlock>
    </div>
</template>

<script setup>
    import PageBlockHeader from './components/pageBlocks/PageBlockHeader.vue';
    import PageBlockMenuBlock from './components/pageBlocks/PageBlockMenuBlock.vue'
</script>

<style scoped>
    .main__block{
        position: relative;;
        margin-left: 142px;
    }
    .main__block-menu{
        position: fixed;
        top: 0px;
        height: 100%;
        width: 142px;
        padding: 24px 0px 24px 22px;
    }
    .main__block-container{
        padding: 0px 20px 24px 20px;
    }
    .main__block-header{
        padding: 24px 20px 24px 20px;
        width: 100%;
        height: 100px;
    }
</style>
