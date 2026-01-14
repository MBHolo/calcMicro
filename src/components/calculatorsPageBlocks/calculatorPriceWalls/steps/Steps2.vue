<template>
    <div class="step__input__block">
        <div class="step__form-block">
            <form class="groups__info__block">
                <div class="groups__info__block-item group__1">
                    <div class="groups__info__block-item-name">
                        {{ inputInfo[1].name }}
                    </div>
                    <div v-for="key in arraySelect" class="groups__info__block-item-inputs">
                        <div v-for="item in group1Select[key].inputs" class="inteputs__item">
                            {{ item.label }}
                        </div>
                    </div>
                </div>
                <div class="groups__info__block-item group__2">
                    <div class="groups__info__block-item-name">
                        {{ inputInfo[2].name }}
                    </div>                    
                </div>
                <div class="groups__info__block-item group__3">
                    <div class="groups__info__block-item-name">
                        {{ inputInfo[3].name }}
                    </div>                    
                </div>
                <div class="groups__info__block-item group__4">
                     <div class="groups__info__block-item-name">
                        {{ inputInfo[4].name }}
                     </div>                   
                </div>    
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, reactive, computed } from 'vue';

    //Получение информации о стадии
    const prop = defineProps(["stepInputInfo", "useStoreValidationFunc", "useStoreSaveData"]);
    const emit = defineEmits(["choiceNext"]);

    const inputInfo             = prop.stepInputInfo;
    const storeValidationFunc   = prop.useStoreValidationFunc;
    const storeSaveData         = prop.useStoreSaveData;

    //Помещение информации первой группы в отдельную переменную
    const group1Select = reactive(inputInfo[1].data);

    console.log(group1Select[1]);

    //Массив селектов отображаемых
    const arraySelect = computed(() => {
        return [1];
    });

    
</script>

<style scoped>
    .groups__info__block{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;

    }
    .groups__info__block-item{
        padding: 5px;
        border: 1px solid var(--border-color-dark);
        border-radius: var(--main-block-ver-ysmall-border-radius);
        overflow-y: scroll;
    }
    .groups__info__block-item-name{
        text-align: center;
        width: 100%;
        font-weight: 700;
        margin-bottom: 20px;
    }
</style>