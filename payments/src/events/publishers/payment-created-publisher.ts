import { Subjects, Publisher, PaymentCreatedEvent } from "@kqtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}