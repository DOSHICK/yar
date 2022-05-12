# Cтруктура файлов:

### html:

[лежат html файлы относящиеся к страницам с тождественным именем в папке css]

---

### css:

[лежат css файлы относящиеся к страницам с тождественным именем в папке html]

---

### fonts

[шрифты нужные для вёрстки (пока что только SF-Pro-Display)]

---

### scss:

[лежат scss файлы компилируемые в папку css]

* components: компоненты стилей для уменьшения повторяемости кода
  - blocks: полноценные, самостоятельные блоки
   repeating:блоки среднего размера, более самостоятельные, чем helpers, но используются внутри других блоков
  - helpers: небольшие блоки для повторяемых элементов интерфейса (стрелки, фиксированые блоки и т.д.)
  - layout: блоки header и footer повторяемые на каждой странице
  - stable: стабильные стили, настройки шрифтов, сброс стилей, миксины и переменные
* pages: стили относящиеся к конкретным страницам в которых могут быть как ипорты из папки components, так и стили относящиеся только к этой странице

---

### img:

[изображения нужные для вёрстки]
  * blocks: изображения для отдельных блоков (названия совпадают с scss/components/blocks)
  * pages: нужные изображения для страниц, названия тождественные файлам в html/page name.html
  * stable: изображения, которые повторяются каждую страницу

---

### js

[js файлы для правильной работы вёрстки(здесь будет подробно)]

* pages: скрипты относящиеся к конкретным страницам
  - 404.js : заглушка, на случай, если понадобится в будущем
  - courses__item.js : 
    + addOnclicktoConditionBtn() : при клике добавить класс для работы аккордеона
    + offerShuffle() : "тосовка" для соответствия с макетом
    + checkResolution() : вызов offerShuffle() при разрешении < 950px 
  - courses.js : 
    + работа с popup'ом 
  - home.js : 
    + swiper : слайдер свайпер вызванный у блока .students
    + swiper1 : слайдер свайпер вызванный у блока .offer__alpha-wrapper
    + changePopupVisibility() : работа с popup'ом .popup-form-submit__btn
  - login.js :
    + users : массив с массивом псевдо-пользователей
    + Функции валидации полей:
      - UserLogin : валидация входа полей и выдача ошибкии при несоответсвии
      - UserResetPassword() : валидация сброса пароля полей и выдача ошибкии при несоответсвии
      - UserRegister() : валидация сброса пароля полей и выдача ошибкии при несоответсвии
    + changeActive() : меняет активный блок (passReset, passRegister, passLogin)
  - news__item.js 
    + swiper : слайдер свайпер вызванный у блока .students
    + swiperEventBlock1 : слайдер свайпер вызванный у блока .swiper.event_1
    + swiperEventBlock2 : слайдер свайпер вызванный у блока .swiper.event_2
    + oneControllForSwipers() : синхронизация перелистывания слайдеров
  - news.js : заглушка, на случай, если понадобится в будущем
  - purchases.js : работа с аккордеоном 
  - trainers.js : заглушка, на случай, если понадобится в будущем
  - videos__item.js : 
    + swiper : работа со слайдером .similarly
  - videos.js : работа с аккордеоном
* header.js
  - Демонстация верстки (вошёл ли пользователь или нет)
  - burger
    + changeBurgerImg(): присвоение класса для смены бургера на крест
    + changeBurgerVisibility() : присвоение класса при активности бургера
    + changeBodyScrolling() : присвоение класса body для запрета скролла
  - работа с кнопками, имеющими выпадающий список в header
    + changeLinksToBtns() : убрать у ссылки href и перенести его значение в value, если экран > 1150
* btns-nav.js :
  - ValidatePromo() : демонстрационный вариант поиска в массиве значения равного promoArrat.obj.name


Для доп информации: telegram: @ivan_dosh