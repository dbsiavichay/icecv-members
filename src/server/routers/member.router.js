import { Router } from "express";
import { memberController } from "../controllers/member.controller.js";

const router = Router()

router.get('/members', memberController.getAll)

export default router