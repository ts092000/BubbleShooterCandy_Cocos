// import GameClient from '@onechaintech/gamesdk-dev';
import { _decorator, Component, Node, find, director } from 'cc';
import { DataGame } from '../DataUser/DataGame';
import { StoredAPI } from '../StoredAPI';
const { ccclass, property } = _decorator;

@ccclass('Controller')
export class Controller extends Component {
    public gameClient: any;

    public async start() : Promise<void> {
        // let _this = this;
        // let parameters = find("GameClient");
        
        // if (parameters === null) {
        //     let parameters = new Node("GameClient");
        //     if (this.gameClient === undefined) {
        //         this.gameClient = new GameClient("652f447ac99e7f524a3b60fc", "40cbeb4f-3bb5-4429-8a1b-a998db59a894", window.parent, {dev: true});
        //         await this.gameClient.initAsync()
        //         .then(async (data) => {
        //             //Get current user id
        //             let userID = this.gameClient.user.citizen.getCitizenId();

        //             //Get gamedata from server
        //             await this.gameClient.user.data.getGameData().then((response: any) => {
        //                 //Save data
        //                 if (response.data[`${userID}`] !== undefined) DataGame.dataUser = response.data[`${userID}`];
        //             }).catch(async (e) => {
        //                 console.log('Error at get game data: ', e);
        //             })

        //             let gameClientParams = parameters.addComponent(StoredAPI);
        //             gameClientParams.gameClient = this.gameClient;
        //             director.addPersistRootNode(parameters);
        //         })
        //         .catch((err) => console.log(err));
        //     }
        // }
        director.loadScene("Menu");
    }

    update(deltaTime: number) {
        
    }
}

