# Сборка

`yarn install --frozen-lock` - установка зависимостей

`yarn dev` - дев сборка(быстрая) с запуском browserify на localhost:3000

`yarn build` - прод сборка с минификацией css и js

В сборке используется gulp
* для js настроен babel es6
* для vue используется webpack (vue-loader,scss-loader)


## Структура папок

`panel` - готовая сборка проекта, здесь собираются файлы после компиляции папки `src`

### src

`components` - html нарезки для удобного импорта в документы

`scss` - стили, настройка для бутстрапа

`vue` - приложения с использованием vue  
* `proxyList.js` - приложение для списка прокси, внутри обработка модалок и регистрация компонентов, компоненты
находятся внутри /proxyList, пример рутового компонента лежит в `panel/src/components/datacenter/_list.html#proxy-list`
* `proxyShop.js` - приложение для магазина прокси, компоненты находятся /proxyShop

`images` - все картинки

`js` - скрипты на нативном js
