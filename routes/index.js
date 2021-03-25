
import express from "express";
import membersRouter from "./membersRouter.js"
import booksRouter from "./booksRouter.js"
import borrowingRouter from "./borrowingRouter.js";
import usersRouter from './usersRouter.js'

const router = express.Router();


router.use("/members", membersRouter);
router.use("/books", booksRouter);
router.use("/borrow",borrowingRouter);
router.use("/users", usersRouter);


export default router;