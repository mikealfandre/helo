create table users(
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
);

ALTER TABLE users
ALTER COLUMN password SET DATA TYPE varchar(150);

ALTER TABLE posts
ADD COLUMN author_id integer REFERENCES users(id);

insert into posts(
    title,
    img,
    content,
)values(
    $1,
    $2,
    $3,
); 