System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, AudioSource, Button, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _crd, ccclass, property, GameModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      AudioSource = _cc.AudioSource;
      Button = _cc.Button;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2ee2W34ypNXKideWDgwki4", "GameModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'AudioSource', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameModel", GameModel = (_dec = ccclass('GameModel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: AudioSource
      }), _dec9 = property({
        type: AudioSource
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Button
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Button
      }), _dec15 = property({
        type: Button
      }), _dec16 = property({
        type: Button
      }), _dec17 = property({
        type: Button
      }), _dec18 = property({
        type: Node
      }), _dec19 = property({
        type: Node
      }), _dec20 = property({
        type: Node
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Button
      }), _dec23 = property({
        type: Button
      }), _dec24 = property({
        type: Button
      }), _dec(_class = (_class2 = class GameModel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrowNode", _descriptor, this);

          _initializerDefineProperty(this, "tableNode", _descriptor2, this);

          _initializerDefineProperty(this, "ballShootNode", _descriptor3, this);

          _initializerDefineProperty(this, "ballContainer", _descriptor4, this);

          _initializerDefineProperty(this, "ballPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "ballNewNode", _descriptor6, this);

          _initializerDefineProperty(this, "backgroundAudio", _descriptor7, this);

          _initializerDefineProperty(this, "inGameAudio", _descriptor8, this);

          _initializerDefineProperty(this, "pauseNode", _descriptor9, this);

          _initializerDefineProperty(this, "pauseTable", _descriptor10, this);

          _initializerDefineProperty(this, "pauseBtn", _descriptor11, this);

          _initializerDefineProperty(this, "pauseBtnNode", _descriptor12, this);

          _initializerDefineProperty(this, "soundMusicOn", _descriptor13, this);

          _initializerDefineProperty(this, "soundMusicOff", _descriptor14, this);

          _initializerDefineProperty(this, "soundInGameOn", _descriptor15, this);

          _initializerDefineProperty(this, "soundInGameOff", _descriptor16, this);

          _initializerDefineProperty(this, "soundMusicOnNode", _descriptor17, this);

          _initializerDefineProperty(this, "soundMusicOffNode", _descriptor18, this);

          _initializerDefineProperty(this, "soundInGameOnNode", _descriptor19, this);

          _initializerDefineProperty(this, "soundInGameOffNode", _descriptor20, this);

          _initializerDefineProperty(this, "playAgainBtn", _descriptor21, this);

          _initializerDefineProperty(this, "playAgainBtnGameOver", _descriptor22, this);

          _initializerDefineProperty(this, "backHomeBtn", _descriptor23, this);
        }

        get ArrowNode() {
          return this.arrowNode;
        }

        set ArrowNode(arrowNode) {
          this.arrowNode = arrowNode;
        }

        get TableNode() {
          return this.tableNode;
        }

        set TableNode(tableNode) {
          this.tableNode = tableNode;
        }

        get BallShootNode() {
          return this.ballShootNode;
        }

        set BallShootNode(ballShootNode) {
          this.ballShootNode = ballShootNode;
        }

        get BallContainer() {
          return this.ballContainer;
        }

        set BallContainer(ballContainer) {
          this.ballContainer = ballContainer;
        }

        get BallPrefab() {
          return this.ballPrefab;
        }

        set BallPrefab(ballPrefab) {
          this.ballPrefab = ballPrefab;
        }

        get BallNewNode() {
          return this.ballNewNode;
        }

        set BallNewNode(ballNewNode) {
          this.ballNewNode = ballNewNode;
        }

        get BackgroundAudio() {
          return this.backgroundAudio;
        }

        set BackgroundAudio(backgroundAudio) {
          this.backgroundAudio = backgroundAudio;
        }

        get InGameAudio() {
          return this.inGameAudio;
        }

        set InGameAudio(inGameAudio) {
          this.inGameAudio = inGameAudio;
        }

        get PauseNode() {
          return this.pauseNode;
        }

        set PauseNode(pauseNode) {
          this.pauseNode = pauseNode;
        }

        get PauseTable() {
          return this.pauseTable;
        }

        set PauseTable(pauseTable) {
          this.pauseTable = pauseTable;
        }

        get PauseBtn() {
          return this.pauseBtn;
        }

        set PauseBtn(pauseBtn) {
          this.pauseBtn = pauseBtn;
        }

        get PauseBtnNode() {
          return this.pauseBtnNode;
        }

        set PauseBtnNode(pauseBtnNode) {
          this.pauseBtnNode = pauseBtnNode;
        }

        get SoundMusicOn() {
          return this.soundMusicOn;
        }

        set SoundMusicOn(soundMusicOn) {
          this.soundMusicOn = soundMusicOn;
        }

        get SoundMusicOff() {
          return this.soundMusicOff;
        }

        set SoundMusicOff(soundMusicOff) {
          this.soundMusicOff = soundMusicOff;
        }

        get SoundInGameOn() {
          return this.soundInGameOn;
        }

        set SoundInGameOn(soundInGameOn) {
          this.soundInGameOn = soundInGameOn;
        }

        get SoundInGameOff() {
          return this.soundInGameOff;
        }

        set SoundInGameOff(soundInGameOff) {
          this.soundInGameOff = soundInGameOff;
        }

        get SoundMusicOnNode() {
          return this.soundMusicOnNode;
        }

        set SoundMusicOnNode(soundMusicOnNode) {
          this.soundMusicOnNode = soundMusicOnNode;
        }

        get SoundMusicOffNode() {
          return this.soundMusicOffNode;
        }

        set SoundMusicOffNode(soundMusicOffNode) {
          this.soundMusicOffNode = soundMusicOffNode;
        }

        get SoundInGameOnNode() {
          return this.soundInGameOnNode;
        }

        set SoundInGameOnNode(soundInGameOnNode) {
          this.soundInGameOnNode = soundInGameOnNode;
        }

        get SoundInGameOffNode() {
          return this.soundInGameOffNode;
        }

        set SoundInGameOffNode(soundInGameOffNode) {
          this.soundInGameOffNode = soundInGameOffNode;
        }

        get PlayAgainBtn() {
          return this.playAgainBtn;
        }

        set PlayAgainBtn(playAgainBtn) {
          this.playAgainBtn = playAgainBtn;
        }

        get PlayAgainBtnGameOver() {
          return this.playAgainBtnGameOver;
        }

        set PlayAgainBtnGameOver(playAgainBtnGameOver) {
          this.playAgainBtnGameOver = playAgainBtnGameOver;
        }

        get BackHomeBtn() {
          return this.backHomeBtn;
        }

        set BackHomeBtn(backHomeBtn) {
          this.backHomeBtn = backHomeBtn;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tableNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ballShootNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ballContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ballPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ballNewNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "backgroundAudio", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "inGameAudio", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pauseNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "pauseTable", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pauseBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pauseBtnNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "soundMusicOn", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "soundMusicOff", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "soundInGameOn", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "soundInGameOff", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "soundMusicOnNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "soundMusicOffNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "soundInGameOnNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "soundInGameOffNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "playAgainBtn", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "playAgainBtnGameOver", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "backHomeBtn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1556dadbcc24fc8158314b49ceec2083388c5a08.js.map