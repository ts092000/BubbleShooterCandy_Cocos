import { _decorator, Component, director, Node, Vec3, tween, find } from 'cc';
import { MenuModel } from './MenuModel';
import { MenuView } from './MenuView';
import { Controller } from './Splash/Controller';
import { StoredAPI } from './StoredAPI';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {
    @property({type: MenuModel})
    private MenuModel: MenuModel;

    @property({type: MenuView})
    private MenuView: MenuView;

    public gameClient: any;
    public matchData: any;

    start() {
        this.MenuView.MusicBg.volume = Controller.volumeValueMusic;
        this.MenuView.InGameAudio.volume = Controller.volumeValueVFX;
        this.MenuView.MusicBg.play();

        if (this.MenuView.MusicBg.volume === 0) {
            this.MenuModel.OnMusicNode.active = false;
            this.MenuModel.OffMusicNode.active = true;
        }
        else {
            this.MenuModel.OnMusicNode.active = true;
            this.MenuModel.OffMusicNode.active = false;
        }

        if (this.MenuView.InGameAudio.volume === 0) {
            this.MenuModel.OnVfxNode.active = false;
            this.MenuModel.OffVfxNode.active = true;
        }
        else {
            this.MenuModel.OnVfxNode.active = true;
            this.MenuModel.OffVfxNode.active = false;
        }
    }

    update(deltaTime: number) {
        
    }

    private playGame(): void {
        this.playSound();
        this.initGame();
    }

    private settingPopup(): void {
        this.playSound();
        this.MenuView.SettingNode.active = true;
        this.MenuView.SettingTableAnim.play();
    }

    private closeSettingPopup(): void {
        this.playSound();
        this.MenuView.SettingNode.active = false;
    }

    private onMusic(): void {
        this.MenuView.MusicBg.volume = 0;
        Controller.volumeValueMusic = this.MenuView.MusicBg.volume;
        this.playSound();
        this.MenuModel.OnMusicNode.active = !this.MenuModel.OnMusicNode.active;
        this.MenuModel.OffMusicNode.active = !this.MenuModel.OffMusicNode.active;
    }

    private offMusic(): void {
        this.MenuView.MusicBg.volume = 0.5;
        Controller.volumeValueMusic = this.MenuView.MusicBg.volume;
        this.playSound();
        this.MenuModel.OnMusicNode.active = !this.MenuModel.OnMusicNode.active;
        this.MenuModel.OffMusicNode.active = !this.MenuModel.OffMusicNode.active;
        
    }

    private onVfx(): void {
        this.MenuView.InGameAudio.volume = 0;
        Controller.volumeValueVFX = this.MenuView.InGameAudio.volume;
        this.playSound();
        this.MenuModel.OnVfxNode.active = !this.MenuModel.OnVfxNode.active;
        this.MenuModel.OffVfxNode.active = !this.MenuModel.OffVfxNode.active;
    }

    private offVfx(): void {
        this.MenuView.InGameAudio.volume = 0.7;
        Controller.volumeValueVFX = this.MenuView.InGameAudio.volume;
        this.playSound();
        this.MenuModel.OnVfxNode.active = !this.MenuModel.OnVfxNode.active;
        this.MenuModel.OffVfxNode.active = !this.MenuModel.OffVfxNode.active;;
    }

    private playSound(): void {
        this.MenuView.InGameAudio.clip = this.MenuView.AudioGame[8];
        this.MenuView.InGameAudio.play();
    }

    private openInfoPopup(): void {
        this.playSound();
        this.MenuView.InfoNode.active = true;
        let tweenInfoPopup = tween(this.MenuView.InfoTable).to(0.5, { scale: new Vec3(1, 1, 1) })
        tweenInfoPopup.start();
    }

    private closeInfoPopup(): void {
        this.playSound();
        let tweenInfoPopup = tween(this.MenuView.InfoTable).to(0.5, { scale: new Vec3(0, 0, 1) })
        tweenInfoPopup.start();
        this.scheduleOnce(function(){
            this.MenuView.InfoNode.active = false;
        }, 0.5)
    }

    private async initGame(): Promise<void> {
        // let _this = this;
        // let parameters = find("GameClient");
        // let gameClientParams = parameters.getComponent(StoredAPI);
        // this.gameClient = gameClientParams.gameClient;
        // this.MenuModel.BtnSetting.interactable = false;
        // this.MenuModel.BtnInfo.node.active = false;
        // this.MenuModel.BtnPlay.node.active = false;
        // this.MenuView.LoadingText.active = true;
        // this.MenuView.LoadingAnimNode.active = true;
        // this.MenuView.LoadingAnim.play();
        // await gameClientParams.gameClient.match.startMatch()
        //     .then((data) => {
        //         gameClientParams.matchData = data;
        //         director.addPersistRootNode(parameters);
        //     })
        //     .catch((error) => console.log(error));
        director.loadScene('Game');
    }
}

