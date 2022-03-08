# Отчет по проекту "Система бронирования"
Проверяющий: Никита Боярский

##Ход работы:
1 часть (22.02 - 1.03):
- Создал репозиторий
- Написал основу для технического задания
- Оформил ТЗ в файле README

2 часть (1.03 - 8.03):
- Развернул angular приложение
- Положил в репозиторий первую версию бэкенда
- Поправил README, уточнил техническое задание

## Оценка проверяющего
1 часть: нет оценки
2 часть: нет оценки

Оценка всгео проекта другим проверяющим(ссылка): нет оценки

# 1. Цель проекта

Цель проекта - разработать систему бронирования устройств для разработчиков. Разработчик может бронировать какие-либо устройства на определенный промежуток времени, отменять бронь. Также предусматривается возможность выставлять свои устройства.

# 2. Описание системы

Функциональность определена следующая:

1. Вход
2. Страница со списком устройств
3. Страница с описанием устройства
4. Форма бронирования
5. Формы выставления своих устройств
6. Страница забронированных пользователем устройств

# 3. Функциональность
- Вход

  Вход будет воспроизводиться через корпоративные учетки - простая форма с логином и паролем.

- Список устройств

  Основная страница системы, имеющая список всех доступных и недоступных устройств. С нее можно перейти в нужное устройство и посмотреть описание.

- Описание устройств

  В странице с описанием устройств будет отображаться название, год выпуска, краткое описание. Также будут указаны дни и время в которое устройство занято

- Бронирование

  Из описания устройства можно перейти в бронирование устройства. На этой странице можно оставить комментарий(например, время пользования).

- Выставление устройства

  Выставлять устройства смогут только определенные люди со специальными аккаунтами.

- Забронированные устройства

  На странице с забронированными устройствами будет показан календарь, который показывает какое устройство когда занято, есть возможность преждевременно снять бронь.

# 4. Предполагаемый стек технологий

* Фронтенд: 
  - Angular
  - Typescript
* Бэкенд:
  - Для бэка будет написана простейшая имитация сервера на C# для тестирования клиентской части

