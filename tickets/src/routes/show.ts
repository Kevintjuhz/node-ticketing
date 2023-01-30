import express, {Request, Response} from "express";
import {Ticket} from "../models/ticket";
import {NotFoundError} from "@kqtickets/common";

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
    try {

    } catch (err) {

    }
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        throw new NotFoundError();
    }

    res.send(ticket);
})

export { router as showTicketRouter };