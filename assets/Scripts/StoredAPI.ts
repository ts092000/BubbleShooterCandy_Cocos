import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StoredAPI')
export class StoredAPI extends Component {
    public gameClient: any;
    public matchData: any;
}

