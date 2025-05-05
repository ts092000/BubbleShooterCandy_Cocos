import { _decorator, Component, Node, Prefab, AudioSource, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {
    @property({type: Node})
    private arrowNode: Node;

    @property({type: Node})
    private tableNode: Node;

    @property({type: Node})
    private ballShootNode: Node;

    @property({type: Node})
    private ballContainer: Node;

    @property({type: Prefab})
    private ballPrefab: Prefab;

    @property({type: Node})
    private ballNewNode: Node

    @property({type: AudioSource})
    private backgroundAudio: AudioSource

    @property({type: AudioSource})
    private inGameAudio: AudioSource

    @property({type: Node})
    private pauseNode: Node

    @property({type: Node})
    private pauseTable: Node

    @property({type: Button})
    private pauseBtn: Button

    @property({type: Node})
    private pauseBtnNode: Node

    @property({type: Button})
    private soundMusicOn: Button

    @property({type: Button})
    private soundMusicOff: Button

    @property({type: Button})
    private soundInGameOn: Button

    @property({type: Button})
    private soundInGameOff: Button

    @property({type: Node})
    private soundMusicOnNode: Node

    @property({type: Node})
    private soundMusicOffNode: Node

    @property({type: Node})
    private soundInGameOnNode: Node

    @property({type: Node})
    private soundInGameOffNode: Node

    @property({type: Button})
    private playAgainBtn: Button

    @property({type: Button})
    private playAgainBtnGameOver: Button

    @property({type: Button})
    private backHomeBtn: Button

    public get ArrowNode() : Node {
        return this.arrowNode;
    }
    
    public set ArrowNode(arrowNode : Node) {
        this.arrowNode = arrowNode;
    }
    
    public get TableNode() : Node {
        return this.tableNode;
    }
    
    public set TableNode(tableNode : Node) {
        this.tableNode = tableNode;
    }

    public get BallShootNode() : Node {
        return this.ballShootNode;
    }
    
    public set BallShootNode(ballShootNode : Node) {
        this.ballShootNode = ballShootNode;
    }

    public get BallContainer() : Node {
        return this.ballContainer;
    }
    
    public set BallContainer(ballContainer : Node) {
        this.ballContainer = ballContainer;
    }

    public get BallPrefab() : Prefab {
        return this.ballPrefab;
    }
    
    public set BallPrefab(ballPrefab : Prefab) {
        this.ballPrefab = ballPrefab;
    }

    public get BallNewNode() : Node {
        return this.ballNewNode;
    }
    
    public set BallNewNode(ballNewNode : Node) {
        this.ballNewNode = ballNewNode;
    }

    public get BackgroundAudio() : AudioSource {
        return this.backgroundAudio;
    }
    
    public set BackgroundAudio(backgroundAudio : AudioSource) {
        this.backgroundAudio = backgroundAudio;
    }

    public get InGameAudio() : AudioSource {
        return this.inGameAudio;
    }
    
    public set InGameAudio(inGameAudio : AudioSource) {
        this.inGameAudio = inGameAudio;
    }

    public get PauseNode() : Node {
        return this.pauseNode;
    }
    
    public set PauseNode(pauseNode : Node) {
        this.pauseNode = pauseNode;
    }

    public get PauseTable() : Node {
        return this.pauseTable;
    }
    
    public set PauseTable(pauseTable : Node) {
        this.pauseTable = pauseTable;
    }

    public get PauseBtn() : Button {
        return this.pauseBtn;
    }
    
    public set PauseBtn(pauseBtn : Button) {
        this.pauseBtn = pauseBtn;
    }

    public get PauseBtnNode() : Node {
        return this.pauseBtnNode;
    }
    
    public set PauseBtnNode(pauseBtnNode : Node) {
        this.pauseBtnNode = pauseBtnNode;
    }

    public get SoundMusicOn() : Button {
        return this.soundMusicOn;
    }
    
    public set SoundMusicOn(soundMusicOn : Button) {
        this.soundMusicOn = soundMusicOn;
    }

    public get SoundMusicOff() : Button {
        return this.soundMusicOff;
    }
    
    public set SoundMusicOff(soundMusicOff : Button) {
        this.soundMusicOff = soundMusicOff;
    }

    public get SoundInGameOn() : Button {
        return this.soundInGameOn;
    }
    
    public set SoundInGameOn(soundInGameOn : Button) {
        this.soundInGameOn = soundInGameOn;
    }

    public get SoundInGameOff() : Button {
        return this.soundInGameOff;
    }
    
    public set SoundInGameOff(soundInGameOff : Button) {
        this.soundInGameOff = soundInGameOff;
    }

    public get SoundMusicOnNode() : Node {
        return this.soundMusicOnNode;
    }
    
    public set SoundMusicOnNode(soundMusicOnNode : Node) {
        this.soundMusicOnNode = soundMusicOnNode;
    }

    public get SoundMusicOffNode() : Node {
        return this.soundMusicOffNode;
    }
    
    public set SoundMusicOffNode(soundMusicOffNode : Node) {
        this.soundMusicOffNode = soundMusicOffNode;
    }

    public get SoundInGameOnNode() : Node {
        return this.soundInGameOnNode;
    }
    
    public set SoundInGameOnNode(soundInGameOnNode : Node) {
        this.soundInGameOnNode = soundInGameOnNode;
    }

    public get SoundInGameOffNode() : Node {
        return this.soundInGameOffNode;
    }
    
    public set SoundInGameOffNode(soundInGameOffNode : Node) {
        this.soundInGameOffNode = soundInGameOffNode;
    }

    public get PlayAgainBtn() : Button {
        return this.playAgainBtn;
    }
    
    public set PlayAgainBtn(playAgainBtn : Button) {
        this.playAgainBtn = playAgainBtn;
    }

    public get PlayAgainBtnGameOver() : Button {
        return this.playAgainBtnGameOver;
    }
    
    public set PlayAgainBtnGameOver(playAgainBtnGameOver : Button) {
        this.playAgainBtnGameOver = playAgainBtnGameOver;
    }

    public get BackHomeBtn() : Button {
        return this.backHomeBtn;
    }
    
    public set BackHomeBtn(backHomeBtn : Button) {
        this.backHomeBtn = backHomeBtn;
    }
}



