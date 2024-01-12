import { db } from '../db.js'


class MemberController {
  async getAll(req, res) {
    const data = await db.member.findMany()
    return res.json(data)
  }
}

export const memberController = new MemberController()