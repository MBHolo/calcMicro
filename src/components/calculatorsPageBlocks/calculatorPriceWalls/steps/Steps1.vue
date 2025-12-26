<template>
    <div class="step__input__block">
        <div class="step__form-block">
            <form @submit.prevent="saveDate($event)" class="step__form-form">
                <div class="form__block__input">
                    <label v-for="item in inputInfo" class="step__form-item" :id="item.name">
                        <span class="item__title">{{ item.label }}</span>
                        <input 
                            :name   = "item.name"
                            :type   = "item.typeInput"
                            :value  = "item.valueDefault" 
                            step    = "0.00000001"
                            :class  = "item.typeBlock == 'static' ? 'static__block': ''"
                        />
                        <span class="error__message"></span>
                    </label>
                </div>
                <div class="form__block__button">
                    <button type="submit">Сохранить</button>
                    <button type="reset">Сбросить</button>
                </div>
            </form>
        </div>
    </div> 
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    //Получение информации о стадии
    const prop = defineProps(["stepInputInfo", "useStoreValidationFunc", "useStoreSaveData"]);
    const emit = defineEmits(["choiceNext"]);

    const inputInfo             = prop.stepInputInfo;
    const storeValidationFunc   = prop.useStoreValidationFunc;
    const storeSaveData         = prop.useStoreSaveData;

    //функцния сохранения данных расчета
    async function saveDate(event){

        let error = await checkValidate(event.target);

        if(!error){
            const infoRequest = event.target.getElementsByTagName('input');
            const answerSave = storeSaveData.saveData("step-1", infoRequest);
            switch(answerSave){
                case "Sucsess saved":
                    emit("choiceNext", 1);
                    break;
            }
        }
    }

    //Проверка ответа от проверки валидации
    async function checkValidate(event){
        let errorArray = storeValidationFunc.checkType(event, inputInfo);
        let error = false;
        await errorArray.forEach((elem, key) => {
            if(elem){
                error = showError(key);
            } else {
                error = deleteErrorMessage(key);
            }
        });
        return error;
    }

    //отображение ошибок
    async function showError(key){
        let idName = "#steps-1-" + (key + 1);
        const elemeLabel   = document.querySelector(idName);
        const elemSpanError = elemeLabel.querySelector(".error__message");
        elemSpanError.innerHTML = "Значение не может быть отрицательным";
        return true;
    }

    //Удаление информации об ошибки, если ошибка исправлена
    async function deleteErrorMessage(key){
        let idName = "#steps-1-" + (key + 1);
        const elemeLabel   = document.querySelector(idName);
        const elemSpanError = elemeLabel.querySelector(".error__message");
        elemSpanError.innerHTML = "";
        return false;
    }
</script>

<style scoped>
    .step__form-form{

    }
    .form__block__input{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        width: 100%;
    }
    .step__form-item{
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;
    }
    .step__form-item .static__block{
        background-color: var(--color-font-main);
        color: var(--color-font-light);
        border: 1px solid var(--border-color);
    }
    .error__message{
        color: var(--color-font-error);
        position: absolute;
        top: 100%;
        font-size: 16px;
    }
    .form__block__button{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 40px;
    }
</style>