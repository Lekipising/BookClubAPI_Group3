import express from "express";
import { addBorrowing, viewAllBorrowings, viewBorrowing, viewMemberBorrowings, returnBook } from '../controllers/borrowingController.js'
import { authenticate } from '../middlewares/auth.js';

const borrowingRouter = express.Router();

//Add a Borrowing
borrowingRouter.post("/", authenticate, addBorrowing);

//View a member members/:id
borrowingRouter.get("/:id", authenticate, viewBorrowing);

//View all members members/
borrowingRouter.get("/", authenticate, viewAllBorrowings);

//Return book members/
borrowingRouter.put("/:id", authenticate, returnBook);

//View all borrowings of a particular member
borrowingRouter.get("/:borrower_name", authenticate, viewMemberBorrowings);

export default borrowingRouter;






