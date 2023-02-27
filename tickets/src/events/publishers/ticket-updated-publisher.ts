import {Publisher, Subjects, TicketUpdatedEvent} from "@kqtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}

