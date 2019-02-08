
module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.params

        db.get_posts(userid, userposts, search)
            .then((posts) => res.status(200).send(posts))
            .catch((err) => res.status(500).send(err))
    }
}