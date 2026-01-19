<template>
    <div class="step__input__block">
        <div class="step__form-block">
            <form class="groups__info__block">
                <div class="groups__info__block-item" :class="'group__' + index" v-for="(item, index) in inputInfo">
                    <div class="groups__info__block-item-name">
                        {{ item.name }}
                    </div> 
                    <div v-if="index == 1" class="groups__info__block-item-inputs">
                        <div v-for="(keySelect, indexSelect) in arraySelect" class="selects__block">
                            <div class="select__item">
                                <div class="select__item-label">
                                    Город производителя
                                </div>
                                <div class="select__item-inputs">
                                    <select @change="chooseSelectValue($event, indexSelect, index)" :name="item.nameSelect + '_' + keySelect" id="">
                                        <option class="select__item-inputs-option" v-for="itemOption in item.data" :value="itemOption.value" :selected="itemOption.id == keySelect" :idSelect="itemOption.id ">{{ itemOption.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div v-for="itemInput in item.data[keySelect].inputs" class="inputs__items">
                                <div class="inputs__item-label">
                                    {{ itemInput.label }}
                                </div>
                                <div class="inputs__item-input">
                                    <input class="small__input" type="text" :name="itemInput.name" :value="itemInput.value" disabled>
                                </div>
                            </div>
                            <button v-if="indexSelect != 0" @click="deleteSelectBlock(indexSelect)" type="button" >Удалить</button>
                        </div>
                    </div>
                    <div v-else class="groups__info__block-item-inputs">
                        <div v-for="itemInput in item.data" class="inputs__items">
                            <div class="inputs__item-label">
                                {{ itemInput.label }}                                
                            </div>
                            <div class="input__item-inputs">
                                <div class="inputs__item-input">
                                    <span v-if="index != 4">Цена за 1м2</span>
                                    <input class="small__input" type="text" :name="itemInput.name" :value="itemInput.value" disabled>
                                </div>    
                                <div v-if="index != 4" class="inputs__item-input">
                                    <span>Коэф.</span>
                                    <input class="small__input ratio__block" type="text" :name="itemInput.name" :value="itemInput.ratio" disabled>
                                </div>  
                            </div>                                                        
                        </div>
                    </div>
                    <div class="group__info__block-item-bottom__block">
                        <div v-if="index == 1" class="button__add-select">
                            <button @click="addSelectBlock()" type="button">Добавить</button>
                        </div>
                        <div v-else class="search__block">

                        </div>
                    </div>
                </div>   
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, reactive, computed, onBeforeMount } from 'vue';

    //Получение информации о стадии
    const prop = defineProps(["stepInputInfo", "useStoreValidationFunc", "useStoreSaveData"]);
    const emit = defineEmits(["choiceNext"]);

    const inputInfo             = prop.stepInputInfo;
    const storeValidationFunc   = prop.useStoreValidationFunc;
    const storeSaveData         = prop.useStoreSaveData;


    //Массив селектов отображаемых
    const arraySelect = ref([2]);

    //функция изменения select
    function chooseSelectValue(event, indexSelect, index){
        //Получение значение после изменения
        const selectValue       = event.target.value;
        //Получение информации о значения селетк
        const arraySelectInput  = inputInfo [index].data;
        //Замена щначения у реактивной переменной selectArray на новое после изменения значения в select
        Object.keys(arraySelectInput).forEach(key => {
            if(arraySelectInput[key].value == selectValue){
                arraySelect.value[indexSelect] = key;  
            } 
        });
    }

    //Создание еще одного блока селект
    function addSelectBlock(){
        arraySelect.value.push(1);
    }

    //Удаление блоков
    function deleteSelectBlock(indexSelect){
        arraySelect.value.splice(indexSelect, 1);
    }

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
    }
    .groups__info__block-item-name{
        text-align: center;
        width: 100%;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .inputs__items{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .select__item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .input__item-inputs{
        display: flex;
        gap: 5px;
    }
    .inputs__item-input span{
        font-size: 14px;
    }
    .ratio__block{
        max-width: 70px;
    }
    .inputs__item-input{
        max-width: min-content;
    }
    .inputs__item-label{
        margin-right: 10px;
    }
    .groups__info__block-item-inputs{
        height: 350px;
        overflow: auto;
        border-bottom: 1px solid var(--border-color-ligh-grey);
        border-top: 1px solid var(--border-color-ligh-grey);
        padding: 20px 0px;
    }
    .selects__block{
        padding: 20px 0px;
        border-bottom: 1px solid var(--border-color-ligh-grey);
        background-color: ;
    }
    .group__info__block-item-bottom__block{
        padding: 10px;
    }
</style>