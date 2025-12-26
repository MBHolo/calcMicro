//Стор хранения функций валидации
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const storeValidationFunc = defineStore('storeValidationFunc', () => {

    //Проверка типа заполненной информации
    function checkType(event, inputInfo){

        //Создание массива для хранения ошибок
        let arrayError = [];

        Object.keys(inputInfo).forEach(key => {

            let variableTypeInfo = inputInfo[key].VariableType;

            switch(variableTypeInfo){
                case "number":
                    try{
                        arrayError[key-1] = checkNumber(event[key-1].value);
                    } catch(err) {
                        console.log(err);
                        arrayError[key-1] = true;
                    }
                    break;
                case "not-nagative-number":
                    try{
                        arrayError[key-1] = checkNegativeNumber(event[key-1].value);
                    } catch(err){
                        console.log(err);
                        arrayError[key-1] = true;
                    }
                    break;
            }

        });

        //Возвращение массива ошибок
        return arrayError;
    }

    //Проверка на число
    function checkNumber(value){
        let type = Number(value);
        if(Number.isNaN(type) || type == undefined){
            return true;
        } else {
            return false;
        }
    }

    //Проверка на положительность числа
    function checkNegativeNumber(value){
        let numberValue = Number(value);
        if(numberValue <= 0){
            return true;
        } else {
            return false;
        }
    }

    //Возвращение значений
    return ({
        checkType,

    });
});
