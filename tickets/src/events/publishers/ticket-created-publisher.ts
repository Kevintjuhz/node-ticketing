import { Publisher, Subjects, TicketCreatedEvent} from "@kqtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}

