import { _decorator, Component, Node, AudioClip, Animation, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuView')
export class MenuView extends Component {
    @property({type: [AudioClip]})
    private audioGame: AudioClip[] = [];

    @property({type: Node})
    private settingNode: Node;

    @property({type: Node})
    private infoNode: Node;

    @property({type: Node})
    private infoTable: Node;

    @property({type: Animation})
    private settingTableAnim: Animation;

    @property({type: AudioSource})
    private inGameAudio: AudioSource;

    @property({type: AudioSource})
    private musicBg: AudioSource;

    @property({type: Node})
    private loadingAnimNode: Node;

    @property({type: Animation})
    private loadingAnim: Animation;

    @property({type: Node})
    private loadingText: Node;

    public get AudioGame() : AudioClip[] {
        return this.audioGame;
    }
    
    public set AudioGame(audioGame : AudioClip[]) {
        this.audioGame = audioGame;
    }

    public get SettingNode () : Node {
        return this.settingNode;
    }
    
    public set SettingNode(settingNode : Node) {
        this.settingNode = settingNode;
    }

    public get InfoNode () : Node {
        return this.infoNode;
    }
    
    public set InfoNode(infoNode : Node) {
        this.infoNode = infoNode;
    }

    public get InfoTable () : Node {
        return this.infoTable;
    }
    
    public set InfoTable(infoTable : Node) {
        this.infoTable = infoTable;
    }

    public get SettingTableAnim () : Animation {
        return this.settingTableAnim;
    }
    
    public set SettingTableAnim(settingTableAnim : Animation) {
        this.settingTableAnim = settingTableAnim;
    }

    public get InGameAudio () : AudioSource {
        return this.inGameAudio;
    }
    
    public set InGameAudio(inGameAudio : AudioSource) {
        this.inGameAudio = inGameAudio;
    }

    public get MusicBg () : AudioSource {
        return this.musicBg;
    }
    
    public set MusicBg(musicBg : AudioSource) {
        this.musicBg = musicBg;
    }

    public get LoadingAnimNode () : Node {
        return this.loadingAnimNode;
    }
    
    public set LoadingAnimNode(loadingAnimNode : Node) {
        this.loadingAnimNode = loadingAnimNode;
    }

    public get LoadingAnim () : Animation {
        return this.loadingAnim;
    }
    
    public set LoadingAnim(loadingAnim : Animation) {
        this.loadingAnim = loadingAnim;
    }

    public get LoadingText () : Node {
        return this.loadingText;
    }
    
    public set LoadingText(loadingText : Node) {
        this.loadingText = loadingText;
    }
}

