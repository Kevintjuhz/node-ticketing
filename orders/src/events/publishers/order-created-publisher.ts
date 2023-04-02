import { Publisher, OrderCreatedEvent, Subjects } from "@kqtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}