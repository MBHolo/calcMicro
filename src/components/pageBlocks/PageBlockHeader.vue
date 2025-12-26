<template>
    <div class="main__header">
        <h1>{{ pageTitle }}</h1>
    </div>
</template>

<script setup>
    import { ref, reactive, watch } from 'vue';
    import { useRoute } from 'vue-router';

    //Инициализируем роут и сохраняем его значение в константку
    const route = reactive(useRoute());
    const pageTitle = ref(route.meta.title);

    //Отслеживание изменение title при роутинге
    watch(() => route.meta.title, (newTitle) => {
        pageTitle.value = newTitle;
    });


</script>

<style scoped> 
    .main__header{
        padding: 10px 26px;
        border: 1px solid var(--border-color);
        border-radius: var(--main-block-small-border-radius);
        display: flex;
        justify-content: space-between;
        background: var(--main-color-gradient-background-blocks);
    }
</style>