//В данном файле хранится информация о калькуляторе Price Walls
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const storePriceWalls = defineStore('storePriceWalls', () => {

    //Заполнение информации для калькулятора типа price_walls
    const infoSettings = reactive({
        code:       "price_walls",
        stapsInfo:      {
            countSteps: 4,
            nameSteps: {
                1: "Раздел ТЭП",
                2: "Расценки",
                3: "Материалы",
                4: "Результаты",
            },
            comleted: {
                1: false,
                2: false,
                3: false,
                4: false,
            }
        },
        steps:  {
            1: {
                isActive:   true,
                comleted:   false,
                name:       'Технико-экономические показатели',
                type:       'non-group',
                inputs: {
                    1: {
                        typeInput:      "number",
                        label:          "S - этажа (м2)",
                        typeBlock:      "static",
                        name:           "steps-1--1",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          390,
                    },
                    2: {
                        typeInput:      "number",
                        label:          "Количество этажей",
                        typeBlock:      "static",
                        name:           "steps-1--2",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          16,
                    },
                    3: {
                        typeInput:      "number",
                        label:          "P - наружных стен (п.м.)",
                        typeBlock:      "static",
                        name:           "steps-1--3",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          97.8,
                    },
                    4: {
                        typeInput:      "number",
                        label:          "Проемы наружные (%)",
                        typeBlock:      "non-static",
                        name:           "steps-1--4",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          23,
                    },
                    5: {
                        typeInput:      "number",
                        label:          "S - продаваемая (м2)",
                        typeBlock:      "static",
                        name:           "steps-1--5",     
                        VariableType:   "not-nagative-number",  
                        required:       "Y", 
                        value:          6240,  
                    },
                    6: {
                        typeInput:      "number",
                        label:          "Высота этажа (м)",
                        typeBlock:      "static",
                        name:           "steps-1--6",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          2.97,
                    },
                    7: {
                        typeInput:      "number",
                        label:          "P - межквартирных стен (п.м.)",
                        typeBlock:      "static",
                        name:           "steps-1--7",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          120.46,
                    },
                    8: {
                        typeInput:      "number",
                        label:          "Проемы межквартирные (%)",
                        typeBlock:      "non-static",
                        name:           "steps-1--8",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          4,
                    },
                    9: {
                        typeInput:      "number",
                        label:          "S - общая (м2)",
                        typeBlock:      "static",
                        name:           "steps-1--9",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          9699,
                    },
                    10: {
                        typeInput:      "number",
                        label:          "Стоимость 1м2 (руб)",
                        typeBlock:      "static",
                        name:           "steps-1--10",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          150000,
                    },
                    11: {
                        typeInput:      "number",
                        label:          "P - внутриквартирных стен (п.м.)",
                        typeBlock:      "static",
                        name:           "steps-1--11",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          137.8,
                    },
                    12: {
                        typeInput:      "number",
                        label:          "Проемы внутриквартирные (%)",
                        typeBlock:      "non-static",
                        name:           "steps-1--12",
                        VariableType:   "not-nagative-number",
                        required:       "Y",
                        value:          5,
                    }

                },
            },
            2: {
                isActive:   false,
                comleted:   false,
                name:       'Расценки на материалы, доставку и работы',
                type:       "group",
                inputs: {
                    1: {
                        type: "select.add.auto",
                        name: "Доставка",
                        data:{
                            1: {
                                name:       "Коркино",
                                value:      "korkino",
                                isActive:   true,
                                inputs: {
                                    1: {
                                        label: "Расценка за 1км",
                                        value: 95,
                                        name: "steps-2--group-1--select-1--1",
                                    },
                                    2: {
                                        label: "Грузоподъемность, кг.",
                                        value: 20000,
                                        name: "steps-2--group-1--select-1--2",
                                    },
                                    3: {
                                        label: "Объем кузова, м3",
                                        value: 96,
                                        name: "steps-2--group-1--select-1--3",
                                    },
                                    4: {
                                        label: "Расстояние до объекта",
                                        value: 35,
                                        name: "steps-2--group-1--select-1--4",
                                    },
                                    5: {
                                        label: "Стоимость 1 машины",
                                        value: 3325,
                                        name: "steps-2--group-1--select-1--5",
                                    },

                                }    
                            },
                            2: {
                                name:       "Тест локация",
                                value:      "Test",
                                isActive:   false,
                                inputs: {
                                    1: {
                                        label: "Расценка за 1км",
                                        value: 95,
                                        name: "steps-2--group-1--select-2--1",
                                    },
                                    2: {
                                        label: "Грузоподъемность, кг.",
                                        value: 20000,
                                        name: "steps-2--group-1--select-2--2",
                                    },
                                    3: {
                                        label: "Объем кузова, м3",
                                        value: 96,
                                        name: "steps-2--group-1--select-2--3",
                                    },
                                    4: {
                                        label: "Расстояние до объекта",
                                        value: 35,
                                        name: "steps-2--group-1--select-2--4",
                                    },
                                    5: {
                                        label: "Стоимость 1 машины",
                                        value: 3325,
                                        name: "steps-2--group-1--select-2--5",
                                    },                                
                                },
                            }
                        }
                    },
                    2: {
                        type: "input",
                        name: "Работы",
                        data:{
                            1: {
                                label: "Отделочные работы",
                                value: 1253,
                                ratio: 2.71,
                                name: "steps-2--group-2--1",
                            },
                            2: {
                                label: "Комплекс работ по фасаду СФТК и утеплителю",
                                value: 3374,
                                ratio: 2.71,
                                name: "steps-2--group-2--2",                                
                            }
                        }
                    },
                    3: {
                        type: "input",
                        name: "Материалы",
                        data: {
                            1: {
                                label: "Шпатлевка",
                                value: 1353,
                                ratio: 2.71,
                                name: "steps-2--group-3--1",
                            },
                            2: {
                                label: "Грунтовка",
                                value: 3374,
                                ratio: 2.71,
                                name: "steps-2--group-3--2",                               
                            }
                        }
                    },
                    4:{
                        type: "input",
                        name: "Стоимость кирпича/блоков, 1м3",
                        data: {
                            1: {
                                label: "Кирпич пустотелый керамический 250мм",
                                value: 1353,
                                name: "steps-2--group-4--1",
                            },
                            2: {
                                label: "Блок силикатный \"Поревит\" 180мм",
                                value: 3374,
                                name: "steps-2--group-4--2",
                            }
                        }
                    },
                },
            },
            3: {
                isActive: false,
                comleted:   false,
                name: 'Выбор материалов стен',
            },
            4: {
                isActive: false,
                comleted:   false,
                name: 'Результаты',
            }
        },

    });

    //Функция геттер получения кода
    function getCode(){
        return infoSettings.code;
    }

    //Функция геттер получения стадий
    function getStepsInfo(){
        return infoSettings.stapsInfo;
    }

    //Функция устанавливает активность стадии
    function setIsActiveStep(numberChoice){
        Object.keys(infoSettings.steps).forEach((elem) => {
            infoSettings.steps[elem].isActive = false;
        });
        infoSettings.steps[numberChoice].isActive = true;
    }

    //Функция геттер получения информации об активности стадии
    function getIsActiveStep(){
        const stepIsActive = ref(1);

        Object.keys(infoSettings.steps).forEach((elem) => {
            if(infoSettings.steps[elem].isActive){
                stepIsActive.value = elem;
            }            
        });

        return stepIsActive.value;
    }

    //Функция устанавливает аыполнение стадии
    function setComletedStep(numberChoice){
        infoSettings.steps[numberChoice].comleted = true;
        infoSettings.stapsInfo.comleted[numberChoice] = true;
    }

    //Функция геттер получения информации об выполнении стадии
    function getComletedStep(numberChoice){
        return infoSettings.stapsInfo.comleted[numberChoice];
    }

    //Геттер получения имени стадии
    function getStepName(numberStep){
        return infoSettings.steps[numberStep].name;
    }

    //Геттер получеия информации полей формы
    function getStepInputs(){
        return infoSettings.steps;
    }

    //Установка новых значений после сохранения данных на этапах
    function setValueInputStep(numberStep, numberInput, valueInput){
        //Получение списка инпутов
        infoSettings.steps[numberStep].inputs[numberInput].value = valueInput;
    }

    //Возвращение значений
    return ({
        getCode,
        getStepsInfo,
        getIsActiveStep,
        getStepName,
        getStepInputs,
        setValueInputStep,
        setComletedStep,
        getComletedStep,

        setIsActiveStep,
    });
});
