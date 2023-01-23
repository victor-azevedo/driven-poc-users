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
router.use(userQueryValidation);
router.put("/:id", userValidation, updateUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);

export default router;
