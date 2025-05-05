import { _decorator, Component, Node, director, sp, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Controller')
export class Controller extends Component {
    @property({type: sp.Skeleton})
    private SASpine: sp.Skeleton;

    @property({type: Animation})
    private SAReveal: Animation;

    public static volumeValueMusic: number = 0.5;
    public static volumeValueVFX: number = 0.7;
    
    protected start(): void {
        this.SASpine.setCompleteListener(this.onAnimationComplete);
        this.scheduleOnce(function(){
            this.SAReveal.play();
        }, 5.5)
    }
    
    public onAnimationComplete(track: any): void {
        if (track.animation.name === 'Option 1') {
            director.loadScene('Loading')
        }
    }
}

