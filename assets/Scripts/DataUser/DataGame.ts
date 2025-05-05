import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export type DataUser = {
    data: {
        highScore: number,
    }
}
export class DataGame {
    public static dataUser: DataUser = { 
        data:{ 
            highScore: 0,
        } 
    }
}