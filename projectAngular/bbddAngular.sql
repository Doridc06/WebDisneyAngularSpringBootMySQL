-- base de datos con pagina web angular, bbdd con spring boot
-- tabla login

use angularspringboot;

create table login (
id int auto_increment primary key,
username varchar(20),
password varchar(20)
);

-- user admi
INSERT INTO login (username, password) VALUES ('admi', 'admi');

select * from login;