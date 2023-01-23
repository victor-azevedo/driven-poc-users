import { insertUser } from "../controllers/usersController";
import { userValidation } from "../middlewares/usersMiddleware";
import { Router } from "express";

const router = Router();

router.post("/", userValidation, insertUser);
router.get("/");
router.get("/:id");
router.delete("/:id");
router.patch("/:id");

export default router;
