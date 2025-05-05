import { _decorator, Button, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuModel')
export class MenuModel extends Component {
    @property({type:Button})
    private onMusic: Button

    @property({type:Button})
    private offMusic: Button

    @property({type:Button})
    private onVfx: Button

    @property({type:Button})
    private offVfx: Button

    @property({type:Node})
    private onMusicNode: Node

    @property({type:Node})
    private offMusicNode: Node

    @property({type:Node})
    private onVfxNode: Node

    @property({type:Node})
    private offVfxNode: Node

    @property({type:Button})
    private btnPlay: Button

    @property({type:Button})
    private btnSetting: Button

    @property({type:Button})
    private btnInfo: Button

    public get OnMusic() : Button {
        return this.onMusic
    }
    
    public set OnMusic(onMusic : Button) {
        this.onMusic = onMusic;
    }
    
    public get OffMusic() : Button {
        return this.offMusic
    }
    
    public set OffMusic(offMusic : Button) {
        this.offMusic = offMusic;
    }

    public get OnVfx() : Button {
        return this.onVfx
    }
    
    public set OnVfx(onVfx : Button) {
        this.onVfx = onVfx;
    }

    public get OffVfx() : Button {
        return this.offVfx
    }
    
    public set OffVfx(offVfx : Button) {
        this.offVfx = offVfx;
    }

    public get OnMusicNode() : Node {
        return this.onMusicNode
    }
    
    public set OnMusicNode(onMusicNode : Node) {
        this.onMusicNode = onMusicNode;
    }

    public get OffMusicNode() : Node {
        return this.offMusicNode
    }
    
    public set OffMusicNode(offMusicNode : Node) {
        this.offMusicNode = offMusicNode;
    }

    public get OnVfxNode() : Node {
        return this.onVfxNode
    }
    
    public set OnVfxNode(onVfxNode : Node) {
        this.onVfxNode = onVfxNode;
    }

    public get OffVfxNode() : Node {
        return this.offVfxNode
    }
    
    public set OffVfxNode(offVfxNode : Node) {
        this.offVfxNode = offVfxNode;
    }

    public get BtnPlay() : Button {
        return this.btnPlay
    }
    
    public set BtnPlay(btnPlay : Button) {
        this.btnPlay = btnPlay;
    }

    public get BtnSetting() : Button {
        return this.btnSetting
    }
    
    public set BtnSetting(btnSetting : Button) {
        this.btnSetting = btnSetting;
    }

    public get BtnInfo() : Button {
        return this.btnInfo
    }
    
    public set BtnInfo(btnInfo : Button) {
        this.btnInfo = btnInfo;
    }
}

