System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sp, Animation, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, Controller;

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
      director = _cc.director;
      sp = _cc.sp;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f38aMEmxJLb5ZUMZCYVQt6", "Controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'sp', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Controller", Controller = (_dec = ccclass('Controller'), _dec2 = property({
        type: sp.Skeleton
      }), _dec3 = property({
        type: Animation
      }), _dec(_class = (_class2 = (_class3 = class Controller extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "SASpine", _descriptor, this);

          _initializerDefineProperty(this, "SAReveal", _descriptor2, this);
        }

        start() {
          this.SASpine.setCompleteListener(this.onAnimationComplete);
          this.scheduleOnce(function () {
            this.SAReveal.play();
          }, 5.5);
        }

        onAnimationComplete(track) {
          if (track.animation.name === 'Option 1') {
            director.loadScene('Loading');
          }
        }

      }, _class3.volumeValueMusic = 0.5, _class3.volumeValueVFX = 0.7, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SASpine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SAReveal", [_dec3], {
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
//# sourceMappingURL=a200f28a69d7881f37eb4e4b86ffee53ba4ea0ff.js.map