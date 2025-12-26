import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '../../components/pages/mainPages/PageHome.vue';
import PageAccount from '../../components/pages/mainPages/PageAccount.vue';
import PageCalculatorPriceWalls from '../../components/pages/calculatorsPages/PagePriceWalls.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:       "/",
            name:       "home",
            component:  PageHome,
            meta: {
                title: 'Главная страница',
            }
        },
        {
            path:       "/account/",
            name:       "account",
            component:  PageAccount,
            meta: {
                title: 'Аккаунт',
            }
        },
        {
            path:       '/calculator/price_walls/',
            name:       'calculator-price_walls',
            component:  PageCalculatorPriceWalls,
            meta: {
                title: 'Калькулятор стоимости стен : СтэнМастер',
            },
        },
    ]
})

export default router;