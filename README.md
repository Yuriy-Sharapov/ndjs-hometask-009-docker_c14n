# Задание 1: контейнеризация

Контейнеризировать приложение «Библиотека» и опубликовать его на hub.docker.com.

**Критерии выполнения**

В результате выполнения задания в исходном коде приложения должен появиться Dockerfile. А в публичном репозитории, созданном пользователем на hub.docker.com, — образ.

:white_check_mark: РЕШЕНИЕ: https://hub.docker.com/repository/docker/14101916/books_counter/general

```Batchfile
docker pull 14101916/books_counter:v1.0.0
```

# Задание 2: микросервисы
Добавьте в приложение счётчик просмотра книг:

- [X] 1. счётчик увеличивается при каждом просмотре книги,
- [X] 2. за хранение значения счётчика отвечает отдельное приложение,
- [X] 3. данные счётчика хранятся на диске и переживают рестарт приложения или контейнера.

Используйте docker-compose для разработки приложения в контейнере.

**Критерии выполнения**

В результате выполнения задания:
- [X] 1. Создано приложение Node.js, обрабатывающее два роута:
    - [X] 1.1 увеличить счётчик POST /counter/:bookId/incr;
    - [X] 1.2 получить значение счётчика GET /counter/:bookId — приложение контейнеризировано.

:white_check_mark: Приложение Redis-счетчик выделено в отдельный образ и залито в репозиторий:
https://hub.docker.com/repository/docker/14101916/redis_counter/general

```Batchfile
docker pull 14101916/redis_counter:v1.0.0
```

- [X] 2. В основном приложении при просмотре книги:
    - [X] 2.1 увеличение счётчика,
    - [X] 2.2 отображение значения счётчика;
- [X] 3. Создан docker-compose.yml, запуск которого поднимает оба приложения и позволяет продемонстрировать работу счётчика.

В исходном коде приложения должен появиться docker-compose.yml.

:white_check_mark: Приложение Библиотека со счетником обращений к книгам залито в репозиторий:
https://hub.docker.com/layers/14101916/books_counter/v2.0.0/images/sha256-24cfd863dac3d4cb58e2ce3c5da48cf223552bdc4b884789078b62821368e375?context=explore

```Batchfile
docker pull 14101916/books_counter:v2.0.0
```