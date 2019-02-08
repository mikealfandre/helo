insert into users (username, password, profile_pic)
values(${username}, ${password}, 'https://robohash.org/profile_pic.png')
returning username, password, profile_pic;