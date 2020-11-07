<h1>CorprusChess - очередной клон популярных шахматных сайтов</h1>
Чтобы запустить проект, понадобится MySql 5.7, php 7 и веб-сервер, которой нужно поставить в папку public.

<br>
<br>
Однако можно воспользоваться докером:
    
    sudo apt install docker
    sudo docker-compose build
    sudo docker-compose up -d
    
В docker крутится: <br>
    - php-fpm <br>
    - nginx <br>
    - mysql <br>

Планируется вот что:

1. Main page - anyone can play, but users have statistics
2. Game page - chat and game by sockets
3. User page - stats, personal info, security, friends, notifications (messages, news, etc)

Цель проекта - досконально разобраться с сокетами, улучшить навыки Laravel+Vue, сделать более-менее прозрачный пет-проект с уместным использованием различных паттернов программирования.
