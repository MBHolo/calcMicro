//Стор сохранения данных
import { defineStore }      from 'pinia';
import { ref, reactive }    from 'vue';
import { storePriceWalls }  from '../calculatorStores/StorePriceWalls';

export const storeSaveData = defineStore('storeSaveData', () => {

    const useStorePriceWalls = storePriceWalls();

    //Сохранение данных
    const data = reactive({
        "step-1": {
            "steps-1-1": {
                value: 0
            },
            "steps-1-2": {
                value: 0
            },
            "steps-1-3": {
                value: 0
            },
            "steps-1-4": {
                value: 0
            },
            "steps-1-5": {
                value: 0
            },
            "steps-1-6": {
                value: 0
            },
            "steps-1-7": {
                value: 0
            },
            "steps-1-8": {
                value: 0
            },
            "steps-1-9": {
                value: 0
            },
            "steps-1-10": {
                value: 0
            },
            "steps-1-11": {
                value: 0
            },
            "steps-1-12": {
                value: 0
            },
        },
        "step-2": {

        },
        "step-3": {

        },
        "step-4": {

        },
    });
    
    //Функция сохранения информации полей
    function saveData(step, request){
        //Ответ с результатом загрузки
        let answer;
        
        switch(step){
            case "step-1":
                answer = saveStep1(step, request);
                break;
            case "step-2":
                saveStep2();
                break;
            case "step-3":
                saveStep3();
                break;
            case "step-4":
                saveStep4();
                break;
        }   

        return answer;
    }

    //Функция сохраниня информации в блоке первой стадии
    function saveStep1(step, request){
        let arrayValueInput = request;
        let answer = "Sucsess saved";
        Object.keys(arrayValueInput).forEach(key => {
            try{
                let elem        = arrayValueInput[key];
                let name        = elem.getAttribute('name');
                let newValue    = Number(elem.value); 
                
                //Заполнение реактивного массива данными
                data[step][name].value = newValue;
            } catch(err){
                answer = err;
            }
        });

        return answer;
    }

    //Функция сохраниня информации в блоке второй стадии
    function saveStep2(){
        
    }

    //Функция сохраниня информации в блоке третьей стадии
    function saveStep3(){
        
    }

    //Функция сохраниня информации в блоке четвертой стадии
    function saveStep4(){
        
    }

    //Возвращение значений
    return ({
        saveData,
    });
});
