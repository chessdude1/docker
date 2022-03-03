class UserController {
  async users(req, res) {
    try {
      const users = {
        1: 'test',
        2: 'test2'
      }
      return res.json(users);
    } catch (e) {
      console.log(e)
      return res.json(e);
    }
  }


}

module.exports = new UserController();