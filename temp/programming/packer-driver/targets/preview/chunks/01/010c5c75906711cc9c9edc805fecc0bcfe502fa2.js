System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AudioClip, Animation, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, MenuView;

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
      AudioClip = _cc.AudioClip;
      Animation = _cc.Animation;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9dc86fTHhBN47/PcUKqiEzv", "MenuView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioClip', 'Animation', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuView", MenuView = (_dec = ccclass('MenuView'), _dec2 = property({
        type: [AudioClip]
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Animation
      }), _dec7 = property({
        type: AudioSource
      }), _dec8 = property({
        type: AudioSource
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Animation
      }), _dec11 = property({
        type: Node
      }), _dec(_class = (_class2 = class MenuView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "audioGame", _descriptor, this);

          _initializerDefineProperty(this, "settingNode", _descriptor2, this);

          _initializerDefineProperty(this, "infoNode", _descriptor3, this);

          _initializerDefineProperty(this, "infoTable", _descriptor4, this);

          _initializerDefineProperty(this, "settingTableAnim", _descriptor5, this);

          _initializerDefineProperty(this, "inGameAudio", _descriptor6, this);

          _initializerDefineProperty(this, "musicBg", _descriptor7, this);

          _initializerDefineProperty(this, "loadingAnimNode", _descriptor8, this);

          _initializerDefineProperty(this, "loadingAnim", _descriptor9, this);

          _initializerDefineProperty(this, "loadingText", _descriptor10, this);
        }

        get AudioGame() {
          return this.audioGame;
        }

        set AudioGame(audioGame) {
          this.audioGame = audioGame;
        }

        get SettingNode() {
          return this.settingNode;
        }

        set SettingNode(settingNode) {
          this.settingNode = settingNode;
        }

        get InfoNode() {
          return this.infoNode;
        }

        set InfoNode(infoNode) {
          this.infoNode = infoNode;
        }

        get InfoTable() {
          return this.infoTable;
        }

        set InfoTable(infoTable) {
          this.infoTable = infoTable;
        }

        get SettingTableAnim() {
          return this.settingTableAnim;
        }

        set SettingTableAnim(settingTableAnim) {
          this.settingTableAnim = settingTableAnim;
        }

        get InGameAudio() {
          return this.inGameAudio;
        }

        set InGameAudio(inGameAudio) {
          this.inGameAudio = inGameAudio;
        }

        get MusicBg() {
          return this.musicBg;
        }

        set MusicBg(musicBg) {
          this.musicBg = musicBg;
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioGame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "settingNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "infoNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "infoTable", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "settingTableAnim", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "inGameAudio", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "musicBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "loadingAnimNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "loadingAnim", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loadingText", [_dec11], {
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
//# sourceMappingURL=010c5c75906711cc9c9edc805fecc0bcfe502fa2.js.map