import { User } from "./user";

export interface Thread {
    id: string;
    title: string;
    body: string;
    category: string;
    createdAt: string;
    ownerId: string;
    upVotesBy: string[];
    downVotesBy: string[];
    totalComments: number;
}

export interface ThreadDetail {
    id: string;
    title: string;
    body: string;
    category: string;
    createdAt: string;
    owner: User;
    upVotesBy: string[];
    downVotesBy: string[];
    comments: Comment[];
}

export interface GetThreadsResponse {
    status: string;
    message: string;
    data: {
        threads: Thread[];
    };
}

export interface GetThreadDetailResponse {
    status: string;
    message: string;
    data: {
        detailThread: ThreadDetail;
    };
}