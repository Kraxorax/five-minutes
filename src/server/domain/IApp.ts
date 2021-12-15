import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { ITest } from "./ITest";

export interface AppStates {
    username?: string;
    textOfPostTest: string,
    textForPost: string,
    textOfPutTest: string,
    textForPut: string,
    textOfDeleteTest: string,
    textForDelete: string,
    response?: ITest,
}

export interface AppProps {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
}
