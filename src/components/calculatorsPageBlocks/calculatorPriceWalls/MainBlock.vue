<template>
    <div class="step__title__block">
        <h2>{{ propsCaclulatorInfo.nameStep }}</h2>
    </div>
    <div class="step__main__block">
        <Step1 
            v-if="propsCaclulatorInfo.stepIsActive == 1" 
            :stepInputInfo="stepInputInfo" 
            :useStoreValidationFunc="useStoreValidationFunc"
            :useStoreSaveData="useStoreSaveData"
            @choiceNext="choiceNextStep">
        </Step1>
        <Step2 
            v-if="propsCaclulatorInfo.stepIsActive == 2" 
            :stepInputInfo="stepInputInfo" 
            :useStoreValidationFunc="useStoreValidationFunc"
            :useStoreSaveData="useStoreSaveData"
            @choiceNext="choiceNextStep">
        </Step2>
        <Step3 
            v-if="propsCaclulatorInfo.stepIsActive == 3" 
            :stepInputInfo="stepInputInfo" 
            :useStoreValidationFunc="useStoreValidationFunc"
            :useStoreSaveData="useStoreSaveData"
            @choiceNext="choiceNextStep">
        </Step3>
        <Step4 
            v-if="propsCaclulatorInfo.stepIsActive == 4" 
            :stepInputInfo="stepInputInfo" 
            :useStoreValidationFunc="useStoreValidationFunc"
            :useStoreSaveData="useStoreSaveData"
            @choiceNext="choiceNextStep">
        </Step4>
    </div>
</template>

<script setup>
    import { reactive, ref }        from "vue";
    import { storeValidationFunc }  from "../../../modules/stores/funcStore/StoreValidationFunc";
    import { storeSaveData }        from "../../../modules/stores/calculatorStores/StoreSaveData";
    import Step1                    from "./steps/Steps1.vue";
    import Step2                    from "./steps/Steps2.vue";
    import Step3                    from "./steps/Steps3.vue";
    import Step4                    from "./steps/Steps4.vue";

    //Инициалзация сторов
    const useStoreValidationFunc    = storeValidationFunc();
    const useStoreSaveData          = storeSaveData();

    //Получение информации для отображения стадий
    const propsCaclulatorInfo   = defineProps(["stepIsActive", "nameStep", "stepInputInfo"]);
    const stepInputInfo         = ref(propsCaclulatorInfo.stepInputInfo.value);   

    const emit = defineEmits(["choiceNextStep"]);
    function choiceNextStep(event){
        emit("choiceNextStep", event);
    }
</script>

<style scoped>
    .step__title__block{
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-color-dark);
    }
    .step__main__block{
        padding: 20px 0px;
    }
</style>