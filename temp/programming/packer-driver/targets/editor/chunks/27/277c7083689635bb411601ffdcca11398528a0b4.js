System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Vec3, tween, MenuModel, MenuView, Controller, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MenuController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMenuModel(extras) {
    _reporterNs.report("MenuModel", "./MenuModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuView(extras) {
    _reporterNs.report("MenuView", "./MenuView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Splash/Controller", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      MenuModel = _unresolved_2.MenuModel;
    }, function (_unresolved_3) {
      MenuView = _unresolved_3.MenuView;
    }, function (_unresolved_4) {
      Controller = _unresolved_4.Controller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64258NmpSpI6qt+VYFdK+04", "MenuController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'Vec3', 'tween', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuController", MenuController = (_dec = ccclass('MenuController'), _dec2 = property({
        type: _crd && MenuModel === void 0 ? (_reportPossibleCrUseOfMenuModel({
          error: Error()
        }), MenuModel) : MenuModel
      }), _dec3 = property({
        type: _crd && MenuView === void 0 ? (_reportPossibleCrUseOfMenuView({
          error: Error()
        }), MenuView) : MenuView
      }), _dec(_class = (_class2 = class MenuController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "MenuModel", _descriptor, this);

          _initializerDefineProperty(this, "MenuView", _descriptor2, this);

          this.gameClient = void 0;
          this.matchData = void 0;
        }

        start() {
          this.MenuView.MusicBg.volume = (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueMusic;
          this.MenuView.InGameAudio.volume = (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueVFX;
          this.MenuView.MusicBg.play();

          if (this.MenuView.MusicBg.volume === 0) {
            this.MenuModel.OnMusicNode.active = false;
            this.MenuModel.OffMusicNode.active = true;
          } else {
            this.MenuModel.OnMusicNode.active = true;
            this.MenuModel.OffMusicNode.active = false;
          }

          if (this.MenuView.InGameAudio.volume === 0) {
            this.MenuModel.OnVfxNode.active = false;
            this.MenuModel.OffVfxNode.active = true;
          } else {
            this.MenuModel.OnVfxNode.active = true;
            this.MenuModel.OffVfxNode.active = false;
          }
        }

        update(deltaTime) {}

        playGame() {
          this.playSound();
          this.initGame();
        }

        settingPopup() {
          this.playSound();
          this.MenuView.SettingNode.active = true;
          this.MenuView.SettingTableAnim.play();
        }

        closeSettingPopup() {
          this.playSound();
          this.MenuView.SettingNode.active = false;
        }

        onMusic() {
          this.MenuView.MusicBg.volume = 0;
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueMusic = this.MenuView.MusicBg.volume;
          this.playSound();
          this.MenuModel.OnMusicNode.active = !this.MenuModel.OnMusicNode.active;
          this.MenuModel.OffMusicNode.active = !this.MenuModel.OffMusicNode.active;
        }

        offMusic() {
          this.MenuView.MusicBg.volume = 0.5;
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueMusic = this.MenuView.MusicBg.volume;
          this.playSound();
          this.MenuModel.OnMusicNode.active = !this.MenuModel.OnMusicNode.active;
          this.MenuModel.OffMusicNode.active = !this.MenuModel.OffMusicNode.active;
        }

        onVfx() {
          this.MenuView.InGameAudio.volume = 0;
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueVFX = this.MenuView.InGameAudio.volume;
          this.playSound();
          this.MenuModel.OnVfxNode.active = !this.MenuModel.OnVfxNode.active;
          this.MenuModel.OffVfxNode.active = !this.MenuModel.OffVfxNode.active;
        }

        offVfx() {
          this.MenuView.InGameAudio.volume = 0.7;
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueVFX = this.MenuView.InGameAudio.volume;
          this.playSound();
          this.MenuModel.OnVfxNode.active = !this.MenuModel.OnVfxNode.active;
          this.MenuModel.OffVfxNode.active = !this.MenuModel.OffVfxNode.active;
          ;
        }

        playSound() {
          this.MenuView.InGameAudio.clip = this.MenuView.AudioGame[8];
          this.MenuView.InGameAudio.play();
        }

        openInfoPopup() {
          this.playSound();
          this.MenuView.InfoNode.active = true;
          let tweenInfoPopup = tween(this.MenuView.InfoTable).to(0.5, {
            scale: new Vec3(1, 1, 1)
          });
          tweenInfoPopup.start();
        }

        closeInfoPopup() {
          this.playSound();
          let tweenInfoPopup = tween(this.MenuView.InfoTable).to(0.5, {
            scale: new Vec3(0, 0, 1)
          });
          tweenInfoPopup.start();
          this.scheduleOnce(function () {
            this.MenuView.InfoNode.active = false;
          }, 0.5);
        }

        async initGame() {
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MenuModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MenuView", [_dec3], {
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
//# sourceMappingURL=277c7083689635bb411601ffdcca11398528a0b4.js.map