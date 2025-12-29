<template>
    <div class="steps__block">
        <div class="steps__block-items">
            <div v-for="item, key in propsInfoSteps.stepsInfoStep.nameSteps" class="steps__block-item" :class="[propsInfoSteps.stepIsActive == key ? 'active': '']">
                <div class="steps__block-item-block" @click="choiceStep(key)">
                    <div class="steps__block-key" :class="propsInfoSteps.stepsInfoStep.comleted[key] ? 'comleted' : ''">
                        <span v-if="!propsInfoSteps.stepsInfoStep.comleted[key]">
                            {{ key }}
                        </span>
                        <span v-else>
                            <img src="../../../assets/img/icons/comleted.svg" alt="">
                        </span>
                    </div>
                    <div class="steps__block-item-name">
                        <span>
                            {{ item }}
                        </span>
                    </div>
                </div>
                <div v-if="key != propsInfoSteps.stepsInfoStep.countSteps" class="steps__block-item-line"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    //Получение информации для отображения стадий калькулятора
    const propsInfoSteps = defineProps(["stepsInfoStep", "stepIsActive"]);
    //Инициализация emit для общения с родителем
    const emit = defineEmits();

    //Переключение стадии
    function choiceStep(key){
        console.log(propsInfoSteps.stepsInfoStep.comleted[1]);
        emit('choiceStep', key);
    }
</script>

<style scoped>
    .steps__block-items{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .steps__block-item{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .steps__block-item-line{
        height: 1px;
        width: 140px;
        border: 2px dotted var(--border-color-dark);
    }
    .steps__block-item-block{
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;
    }
    .steps__block-key{
        border: 1px solid var(--border-color-dark);
        padding: 10px 13px;
        border-radius: 50%;
        transition: .3s;
    }
    .steps__block-key span{
        font-weight: 700;
    }
    .steps__block-key.comleted{
        background-color: var(--color-font-main);
        padding: 9px 12px;
    }
    .steps__block-key.comleted img{
        width: 12px;
        height: auto;
    }
    .steps__block-item.active .steps__block-key{
        background-color: var(--color-font-main);
        color: var(--color-font-light);
    }
</style>