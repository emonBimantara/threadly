import { Thread } from "./thread";
import { User } from "./user";

export interface ThreadWithOwner extends Omit<Thread, "ownerId">{
    owner: User
}