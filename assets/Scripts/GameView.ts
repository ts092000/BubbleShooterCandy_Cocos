import { _decorator, Camera, Component, Node, Sprite, SpriteFrame, Animation, AudioSource, AudioClip, AnimationClip, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameView')
export class GameView extends Component {
    @property({type: Camera})
    private cameraGame: Camera;

    @property({type: [SpriteFrame]})
    private ballSF: SpriteFrame[] = [];
    
    @property({type: Sprite})
    private ballShootNodeSF: Sprite;

    @property({type: Animation})
    private ballNodeAnim: Animation;

    @property({type: Node})
    private pauseTableNode: Node;

    @property({type: Node})
    private gameOverNode: Node;

    @property({type: Label})
    private scoreLabel: Label;

    @property({type: Label})
    private scoreResultLabel: Label;

    @property({type: Label})
    private highScoreLabel: Label;

    @property({type: Node})
    private loadingAnimNode: Node;

    @property({type: Animation})
    private loadingAnim: Animation;

    @property({type: Node})
    private loadingText: Node;

    @property({type: Node})
    private blackBlurNode: Node;

    @property({type: [AudioClip]})
    private audioGame: AudioClip[] = [];

    @property({type: [AnimationClip]})
    private ballBreakAnim: AnimationClip[] = [];
    
    public get CameraGame() : Camera {
        return this.cameraGame;
    }
    
    public set CameraGame(cameraGame : Camera) {
        this.cameraGame = cameraGame;
    }
    
    public get BallSF() : SpriteFrame[] {
        return this.ballSF;
    }
    
    public set BallSF(ballSF : SpriteFrame[]) {
        this.ballSF = ballSF;
    }

    public get BallShootNodeSF() : Sprite {
        return this.ballShootNodeSF;
    }
    
    public set BallShootNodeSF(ballShootNodeSF : Sprite) {
        this.ballShootNodeSF = ballShootNodeSF;
    }

    public get BallNodeAnim() : Animation {
        return this.ballNodeAnim;
    }
    
    public set BallNodeAnim(ballNodeAnim : Animation) {
        this.ballNodeAnim = ballNodeAnim;
    }

    public get PauseTableNode() : Node {
        return this.pauseTableNode;
    }
    
    public set PauseTableNode(pauseTableNode : Node) {
        this.pauseTableNode = pauseTableNode;
    }

    public get GameOverNode() : Node {
        return this.gameOverNode;
    }
    
    public set GameOverNode(gameOverNode : Node) {
        this.gameOverNode = gameOverNode;
    }

    public get ScoreLabel() : Label {
        return this.scoreLabel;
    }
    
    public set ScoreLabel(scoreLabel : Label) {
        this.scoreLabel = scoreLabel;
    }

    public get ScoreResultLabel() : Label {
        return this.scoreResultLabel;
    }
    
    public set ScoreResultLabel(scoreResultLabel : Label) {
        this.scoreResultLabel = scoreResultLabel;
    }

    public get HighScoreLabel() : Label {
        return this.highScoreLabel;
    }
    
    public set HighScoreLabel(highScoreLabel : Label) {
        this.highScoreLabel = highScoreLabel;
    }

    public get AudioGame() : AudioClip[] {
        return this.audioGame;
    }
    
    public set AudioGame(audioGame : AudioClip[]) {
        this.audioGame = audioGame;
    }

    public get BallBreakAnim() : AnimationClip[] {
        return this.ballBreakAnim;
    }
    
    public set BallBreakAnim(ballBreakAnim : AnimationClip[]) {
        this.ballBreakAnim = ballBreakAnim;
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

    public get BlackBlurNode () : Node {
        return this.blackBlurNode;
    }
    
    public set BlackBlurNode(blackBlurNode : Node) {
        this.blackBlurNode = blackBlurNode;
    }
}


