System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, Node, Sprite, SpriteFrame, Animation, AudioClip, AnimationClip, Label, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, GameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Animation = _cc.Animation;
      AudioClip = _cc.AudioClip;
      AnimationClip = _cc.AnimationClip;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "208abllHNROYajHXTXIgHME", "GameView", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'Animation', 'AudioSource', 'AudioClip', 'AnimationClip', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameView", GameView = (_dec = ccclass('GameView'), _dec2 = property({
        type: Camera
      }), _dec3 = property({
        type: [SpriteFrame]
      }), _dec4 = property({
        type: Sprite
      }), _dec5 = property({
        type: Animation
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Label
      }), _dec10 = property({
        type: Label
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Animation
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: [AudioClip]
      }), _dec16 = property({
        type: [AnimationClip]
      }), _dec(_class = (_class2 = class GameView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cameraGame", _descriptor, this);

          _initializerDefineProperty(this, "ballSF", _descriptor2, this);

          _initializerDefineProperty(this, "ballShootNodeSF", _descriptor3, this);

          _initializerDefineProperty(this, "ballNodeAnim", _descriptor4, this);

          _initializerDefineProperty(this, "pauseTableNode", _descriptor5, this);

          _initializerDefineProperty(this, "gameOverNode", _descriptor6, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor7, this);

          _initializerDefineProperty(this, "scoreResultLabel", _descriptor8, this);

          _initializerDefineProperty(this, "highScoreLabel", _descriptor9, this);

          _initializerDefineProperty(this, "loadingAnimNode", _descriptor10, this);

          _initializerDefineProperty(this, "loadingAnim", _descriptor11, this);

          _initializerDefineProperty(this, "loadingText", _descriptor12, this);

          _initializerDefineProperty(this, "blackBlurNode", _descriptor13, this);

          _initializerDefineProperty(this, "audioGame", _descriptor14, this);

          _initializerDefineProperty(this, "ballBreakAnim", _descriptor15, this);
        }

        get CameraGame() {
          return this.cameraGame;
        }

        set CameraGame(cameraGame) {
          this.cameraGame = cameraGame;
        }

        get BallSF() {
          return this.ballSF;
        }

        set BallSF(ballSF) {
          this.ballSF = ballSF;
        }

        get BallShootNodeSF() {
          return this.ballShootNodeSF;
        }

        set BallShootNodeSF(ballShootNodeSF) {
          this.ballShootNodeSF = ballShootNodeSF;
        }

        get BallNodeAnim() {
          return this.ballNodeAnim;
        }

        set BallNodeAnim(ballNodeAnim) {
          this.ballNodeAnim = ballNodeAnim;
        }

        get PauseTableNode() {
          return this.pauseTableNode;
        }

        set PauseTableNode(pauseTableNode) {
          this.pauseTableNode = pauseTableNode;
        }

        get GameOverNode() {
          return this.gameOverNode;
        }

        set GameOverNode(gameOverNode) {
          this.gameOverNode = gameOverNode;
        }

        get ScoreLabel() {
          return this.scoreLabel;
        }

        set ScoreLabel(scoreLabel) {
          this.scoreLabel = scoreLabel;
        }

        get ScoreResultLabel() {
          return this.scoreResultLabel;
        }

        set ScoreResultLabel(scoreResultLabel) {
          this.scoreResultLabel = scoreResultLabel;
        }

        get HighScoreLabel() {
          return this.highScoreLabel;
        }

        set HighScoreLabel(highScoreLabel) {
          this.highScoreLabel = highScoreLabel;
        }

        get AudioGame() {
          return this.audioGame;
        }

        set AudioGame(audioGame) {
          this.audioGame = audioGame;
        }

        get BallBreakAnim() {
          return this.ballBreakAnim;
        }

        set BallBreakAnim(ballBreakAnim) {
          this.ballBreakAnim = ballBreakAnim;
        }

        get LoadingAnimNode() {
          return this.loadingAnimNode;
        }

        set LoadingAnimNode(loadingAnimNode) {
          this.loadingAnimNode = loadingAnimNode;
        }

        get LoadingAnim() {
          return this.loadingAnim;
        }

        set LoadingAnim(loadingAnim) {
          this.loadingAnim = loadingAnim;
        }

        get LoadingText() {
          return this.loadingText;
        }

        set LoadingText(loadingText) {
          this.loadingText = loadingText;
        }

        get BlackBlurNode() {
          return this.blackBlurNode;
        }

        set BlackBlurNode(blackBlurNode) {
          this.blackBlurNode = blackBlurNode;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraGame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ballSF", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ballShootNodeSF", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ballNodeAnim", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pauseTableNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameOverNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scoreResultLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "highScoreLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loadingAnimNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "loadingAnim", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "loadingText", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "blackBlurNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "audioGame", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "ballBreakAnim", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=598879c5f417cfe9a10089a3c86d7ed3f93f6f46.js.map