import {
  insertUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUser,
} from "../controllers/usersController";
import {
  userQueryValidation,
  userValidation,
} from "../middlewares/usersMiddleware";
import { Router } from "express";

const router = Router();

router.post("/", userValidation, insertUser);
router.get("/", userQueryValidation, getUsers);
router.get("/:id", getUserById);
router.put("/:id", userValidation, updateUser);
router.delete("/:id", deleteUserById);

export default router;
