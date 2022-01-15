import { Msg } from './msg';

export class TrainingFb {
    Msgs: Msg []=[];
    Rows: Training [] = [];
}
export class Training {
        TrainingID: number = 0;
        TrainingTypeID: number = 0;
        Dag: Date = new Date();
        HoofdLesgever: number = 0;
        Lesgever2: number = 0;
        Lesgever3: number = 0;
}
