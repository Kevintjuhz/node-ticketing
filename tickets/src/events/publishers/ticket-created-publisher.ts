import { Publisher, Subjects, TicketCreatedEvent} from "@kqtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}


