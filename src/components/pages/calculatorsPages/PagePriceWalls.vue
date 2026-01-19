<template>
    <div class="main__container">
        <div class="calculator__container">
            <StepsBlock 
                :stepsInfoStep="stepsInfoStep" 
                :stepIsActive="stepIsActive"
                @choiceStep="choiceStep($event)">
            </StepsBlock>
            <div class="main__block__container">
                <MainBlock 
                    :stepIsActive="stepIsActive" 
                    :nameStep="nameStep" 
                    :stepInputInfo ="stepInputInfo"
                    @choiceNextStep="choiceNextStep"></MainBlock>
            </div>
        </div>
        <div class="history__container">

        </div>
        <div class="hint__container"></div>
    </div> 
</template>

<script setup>
    import {ref,  reactive }    from 'vue';
    import StepsBlock           from '../../calculatorsPageBlocks/calculatorPriceWalls/StepsBlock.vue';
    import MainBlock            from '../../calculatorsPageBlocks/calculatorPriceWalls/MainBlock.vue';
    import { storePriceWalls }  from '../../../modules/stores/calculatorStores/StorePriceWalls';

    //Инициализация store
    const useStorePriceWalls    = storePriceWalls();
    //Получение данных из инициализированного store
    const stepsInfoStep         = useStorePriceWalls.getStepsInfo();
    const stepIsActive          = ref('1');
    const nameStep              = ref('');
    const stepInputInfo         = reactive(useStorePriceWalls.getStepInputs());

    //Получение информации при первом запуске
    getStepInfo(stepIsActive.value);

    //Функция получения информации активной стадии
    function getStepInfo(key){
        useStorePriceWalls.setIsActiveStep(key);
        stepIsActive.value  = useStorePriceWalls.getIsActiveStep();
        nameStep.value      = useStorePriceWalls.getStepName(key);
    }

    //Функция выбора стадии
    function choiceStep(key){
        getStepInfo(key);
    }

    function choiceNextStep(key){
        useStorePriceWalls.setComletedStep(key);
        choiceStep(key + 1);
    }

</script>

<style scoped> 
    .main__container{
        height: auto;
        width: 100%;
        display: flex;
    }
    .calculator__container{
        padding: 20px 32px;
        border: 1px solid var(--border-color);
        background: var(--main-color-gradient-background-blocks);
        border-radius: var(--main-block-small-border-radius);
        width: 85%;
    }
    .history__container{
        width: 15%;
    }
    .title__contaner{
        margin-top: 40px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-color-dark);
    }
    .main__block__container{
        margin-top: 60px;
    }
</style>