import { Msg } from './msg';

export class ReservatieFb {
    Msgs: Msg[] = [];
    Rows: Reservatie[]=[];
}
export class Reservatie         {
    ReservatieID: number = 0;
    Licentie: number = 0;
}
