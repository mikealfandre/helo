select us.username, po.title, po.img, po.content
from users us
join posts po on us.id = po.author_id