System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, MenuModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d530fmpKcpM0omuGBK/Q098", "MenuModel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuModel", MenuModel = (_dec = ccclass('MenuModel'), _dec2 = property({
        type: Button
      }), _dec3 = property({
        type: Button
      }), _dec4 = property({
        type: Button
      }), _dec5 = property({
        type: Button
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Button
      }), _dec11 = property({
        type: Button
      }), _dec12 = property({
        type: Button
      }), _dec(_class = (_class2 = class MenuModel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "onMusic", _descriptor, this);

          _initializerDefineProperty(this, "offMusic", _descriptor2, this);

          _initializerDefineProperty(this, "onVfx", _descriptor3, this);

          _initializerDefineProperty(this, "offVfx", _descriptor4, this);

          _initializerDefineProperty(this, "onMusicNode", _descriptor5, this);

          _initializerDefineProperty(this, "offMusicNode", _descriptor6, this);

          _initializerDefineProperty(this, "onVfxNode", _descriptor7, this);

          _initializerDefineProperty(this, "offVfxNode", _descriptor8, this);

          _initializerDefineProperty(this, "btnPlay", _descriptor9, this);

          _initializerDefineProperty(this, "btnSetting", _descriptor10, this);

          _initializerDefineProperty(this, "btnInfo", _descriptor11, this);
        }

        get OnMusic() {
          return this.onMusic;
        }

        set OnMusic(onMusic) {
          this.onMusic = onMusic;
        }

        get OffMusic() {
          return this.offMusic;
        }

        set OffMusic(offMusic) {
          this.offMusic = offMusic;
        }

        get OnVfx() {
          return this.onVfx;
        }

        set OnVfx(onVfx) {
          this.onVfx = onVfx;
        }

        get OffVfx() {
          return this.offVfx;
        }

        set OffVfx(offVfx) {
          this.offVfx = offVfx;
        }

        get OnMusicNode() {
          return this.onMusicNode;
        }

        set OnMusicNode(onMusicNode) {
          this.onMusicNode = onMusicNode;
        }

        get OffMusicNode() {
          return this.offMusicNode;
        }

        set OffMusicNode(offMusicNode) {
          this.offMusicNode = offMusicNode;
        }

        get OnVfxNode() {
          return this.onVfxNode;
        }

        set OnVfxNode(onVfxNode) {
          this.onVfxNode = onVfxNode;
        }

        get OffVfxNode() {
          return this.offVfxNode;
        }

        set OffVfxNode(offVfxNode) {
          this.offVfxNode = offVfxNode;
        }

        get BtnPlay() {
          return this.btnPlay;
        }

        set BtnPlay(btnPlay) {
          this.btnPlay = btnPlay;
        }

        get BtnSetting() {
          return this.btnSetting;
        }

        set BtnSetting(btnSetting) {
          this.btnSetting = btnSetting;
        }

        get BtnInfo() {
          return this.btnInfo;
        }

        set BtnInfo(btnInfo) {
          this.btnInfo = btnInfo;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onMusic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "offMusic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onVfx", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "offVfx", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "onMusicNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "offMusicNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "onVfxNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "offVfxNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnPlay", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnSetting", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnInfo", [_dec12], {
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
//# sourceMappingURL=814c9e06b22cbb20dba13548815e4440e47ff281.js.map