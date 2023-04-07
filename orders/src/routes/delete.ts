import express, {Request, Response} from "express";
import { Order, OrderStatus } from "../models/order";
import { requireAuth, NotFoundError, NotAuthorizedError } from "@kqtickets/common";
import {OrderCancelledPublisher} from "../events/publishers/order-cancelled-publisher";
import {natsWrapper} from "../nats-wrapper";

const router = express.Router();

router.delete('/api/orders/:orderId', requireAuth, async (req: Request, res: Response) => {
    const {orderId} = req.params;

    const order = await Order.findById(orderId).populate('ticket');

    if (!order) {
        throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
        throw new NotAuthorizedError();
    }

    order.status = OrderStatus.Cancelled;
    await order.save();

    // Publishing an event saying this was cancelled!
    await new OrderCancelledPublisher(natsWrapper.client).publish({
        version: order.version,
        id: order.id,
        ticket: {
            id: order.ticket.id,
        }
    })

    res.status(204).send(order);
})

export { router as deleteOrderRouter }