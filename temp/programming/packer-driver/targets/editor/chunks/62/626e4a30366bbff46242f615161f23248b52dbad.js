System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Input, tween, instantiate, Sprite, randomRangeInt, Tween, Animation, director, Vec2, Button, find, GameModel, GameView, Controller, DataGame, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameModel(extras) {
    _reporterNs.report("GameModel", "./GameModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameView(extras) {
    _reporterNs.report("GameView", "./GameView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoordinate(extras) {
    _reporterNs.report("Coordinate", "./DataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfController(extras) {
    _reporterNs.report("Controller", "./Splash/Controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataGame(extras) {
    _reporterNs.report("DataGame", "./DataUser/DataGame", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Input = _cc.Input;
      tween = _cc.tween;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      randomRangeInt = _cc.randomRangeInt;
      Tween = _cc.Tween;
      Animation = _cc.Animation;
      director = _cc.director;
      Vec2 = _cc.Vec2;
      Button = _cc.Button;
      find = _cc.find;
    }, function (_unresolved_2) {
      GameModel = _unresolved_2.GameModel;
    }, function (_unresolved_3) {
      GameView = _unresolved_3.GameView;
    }, function (_unresolved_4) {
      Controller = _unresolved_4.Controller;
    }, function (_unresolved_5) {
      DataGame = _unresolved_5.DataGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e551B1EyNJc5N37jC77x1z", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'input', 'Input', 'EventMouse', 'tween', 'instantiate', 'Sprite', 'randomRangeInt', 'Tween', 'Animation', 'director', 'Vec2', 'Button', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: _crd && GameModel === void 0 ? (_reportPossibleCrUseOfGameModel({
          error: Error()
        }), GameModel) : GameModel
      }), _dec3 = property({
        type: _crd && GameView === void 0 ? (_reportPossibleCrUseOfGameView({
          error: Error()
        }), GameView) : GameView
      }), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameModel", _descriptor, this);

          _initializerDefineProperty(this, "GameView", _descriptor2, this);

          this.v3 = new Vec3();
          this.gridRow = 7;
          this.gridCol = 17;
          this.lengthRow = 13;
          this.lengthCol = 17;
          this.xFirst = -330;
          this.yFirst = 260;
          this.x = 330;
          this.y = 260;
          this.randomNumber = void 0;
          this.BallRandomNumber = void 0;
          this.newBallRandomNumber = void 0;
          this.isBounced = true;
          // private numberArray: number[] = [];
          // private posArray: Vec3[] = [];
          // private ballArrayNode: Node[] = [];
          this.numberBallClear = void 0;
          this.extraTurn = 1;
          this.score = 0;
          this.scoreResult = 0;
          this.isAddScore = true;
          this.newBallNode = new Node();
          this.newBallPos = new Vec3(-600, 400, 0);
          this.isLose = true;
          this.isLosed = false;
          this.isEatBall = false;
          this.newBallCol = void 0;
          this.newBallRow = void 0;
          this.rad = void 0;
          this.newTan2 = void 0;
          this.extra = 215;
          this.isTopTouch = true;
          this.numberPlus = 0;
          this.tweenDuration = 0.6;
          this.indexFirst = 0;
          this.indexLast = 4;
          this.newIndexLast = 4;
          this.initArray = [];
          this.initArrayNode = [];
          this.initArrayPos = [];
          this.topPosX = [-330, -290, -250, -210, -170, -130, -90, -50, -10, 30, 70, 110, 150, 190, 230, 270, 310];
          this.topPosY = 260;
          this.gameClient = void 0;
          this.matchData = void 0;
          this.userID = void 0;
        }

        start() {
          // let parameters = find("GameClient");
          // let gameClientParams = parameters.getComponent(StoredAPI);
          // this.gameClient = gameClientParams.gameClient;
          // this.matchData = gameClientParams.matchData;
          // this.userID = this.gameClient.user.citizen.getCitizenId();
          this.GameModel.PauseBtn.node.on(Button.EventType.CLICK, this.clickBtn, this);
          this.GameModel.BackgroundAudio.play();
          document.addEventListener('visibilitychange', () => {
            if (!(document.visibilityState == "visible") && this.isLosed === false) {
              this.pauseBtn();
            }
          });
          this.GameModel.BackgroundAudio.volume = (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueMusic;
          this.GameModel.InGameAudio.volume = (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueVFX;

          if (this.GameModel.BackgroundAudio.volume === 0) {
            this.GameModel.SoundMusicOnNode.active = false;
            this.GameModel.SoundMusicOffNode.active = true;
          } else {
            this.GameModel.SoundMusicOnNode.active = true;
            this.GameModel.SoundMusicOffNode.active = false;
          }

          if (this.GameModel.InGameAudio.volume === 0) {
            this.GameModel.SoundInGameOnNode.active = false;
            this.GameModel.SoundInGameOffNode.active = true;
          } else {
            this.GameModel.SoundInGameOnNode.active = true;
            this.GameModel.SoundInGameOffNode.active = false;
          }

          this.initArr();
          this.instantiateMap();
          this.BallRandomNumber = randomRangeInt(0, 6);
          this.GameView.BallShootNodeSF.spriteFrame = this.GameView.BallSF[this.BallRandomNumber];
          this.predictBallNode();
          this.scheduleOnce(function () {
            this.GameModel.TableNode.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            this.GameModel.TableNode.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.GameModel.TableNode.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
            this.GameModel.TableNode.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          }, 0.5);
        }

        initArr() {
          while (this.initArray.length < 13) {
            let row = new Array(17);
            let rowNode = new Array(17);
            let rowPos = new Array(17);
            row.fill(-1, 0, 17);
            rowNode.fill(this.newBallNode, 0, 17);
            rowPos.fill(this.newBallPos, 0, 17);
            this.initArray.push(row);
            this.initArrayNode.push(rowNode);
            this.initArrayPos.push(rowPos);
          }
        }

        update(deltaTime) {
          if (this.GameModel.BallShootNode.position.y > this.y && this.isTopTouch) {
            this.isTopTouch = false; // this.tweenBall.stop();

            Tween.stopAllByTarget(this.GameModel.BallShootNode);
            this.GameModel.BallShootNode.position = new Vec3(this.GameModel.BallShootNode.position.x, this.y, 0);
            this.GameModel.BallShootNode.active = false;
            this.instantiateBallTop(); // console.log('top');

            this.scheduleOnce(function () {
              this.isTopTouch = true;
            }, 0.5);
          }

          this.tweenBallShoot();
          this.checkBall(); // this.findFloatingClusters();
        }

        getContainerLocation(event, node) {
          let location = this.GameView.CameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
          node.inverseTransformPoint(this.v3, new Vec3(location.x, location.y));
          return this.v3;
        }

        onTouchStart(event) {}

        onTouchMove(event) {
          let v3 = this.getContainerLocation(event, this.GameView.CameraGame.node);
          let newAngle;
          let xTan = v3.x;
          let yTan = v3.y + 215; // let newTan = yTan / xTan;

          newAngle = Math.atan2(yTan, xTan) * (180 / Math.PI);
          this.GameModel.ArrowNode.angle = newAngle - 90;

          if (this.GameModel.ArrowNode.angle > 85 || this.GameModel.ArrowNode.angle <= -180) {
            this.GameModel.ArrowNode.angle = 85;
          } else if (this.GameModel.ArrowNode.angle < -85 && this.GameModel.ArrowNode.angle > -180) {
            this.GameModel.ArrowNode.angle = -85;
          }
        }

        onTouchEnd(event) {
          let v3 = this.getContainerLocation(event, this.GameView.CameraGame.node);
          this.GameModel.BallShootNode.active = true;
          let newAngle;
          let xTan = v3.x;
          let yTan = v3.y + 215;
          this.numberPlus = 0; // let newTan = yTan / xTan;

          newAngle = Math.atan2(yTan, xTan) * (180 / Math.PI);
          ;
          this.GameModel.ArrowNode.angle = newAngle - 90;

          if (this.GameModel.ArrowNode.angle > 85 || this.GameModel.ArrowNode.angle <= -180) {
            this.GameModel.ArrowNode.angle = 85;
          } else if (this.GameModel.ArrowNode.angle < -85 && this.GameModel.ArrowNode.angle > -180) {
            this.GameModel.ArrowNode.angle = -85;
          }

          let extra = 215;
          let x = 330;
          let y = 260;
          this.rad = this.GameModel.ArrowNode.angle * (Math.PI / 180);
          let newTan = (extra + y) * Math.tan(this.rad);
          let newTan2 = x / Math.tan(this.rad);
          this.newTan2 = newTan2;
          let tweenDuration = 0.55; // Duration of the tween

          if (this.GameModel.ArrowNode.angle >= -35 && this.GameModel.ArrowNode.angle <= 35) {
            tween(this.GameModel.BallShootNode).to(tweenDuration, {
              position: new Vec3(-newTan, y + 0.5, 0)
            }, {
              easing: "linear" // Tween function

            }).start();
          } else if (this.GameModel.ArrowNode.angle < -35) {
            this.newTan2 = -newTan2;
            tween(this.GameModel.BallShootNode).to(tweenDuration - 0.1, {
              position: new Vec3(x, -newTan2 - extra, 0)
            }, {
              easing: "linear" // Tween function

            }).start();
          } else {
            this.newTan2 = newTan2;
            tween(this.GameModel.BallShootNode).to(tweenDuration - 0.1, {
              position: new Vec3(-x, newTan2 - extra, 0)
            }, {
              easing: "linear" // Tween function

            }).start();
          }

          this.GameModel.TableNode.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.GameModel.InGameAudio.clip = this.GameView.AudioGame[0];
          this.GameModel.InGameAudio.play();
        }

        getContainerLocationMouse(event, node) {
          let location = this.GameView.CameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
          node.inverseTransformPoint(this.v3, new Vec3(location.x, location.y));
          return this.v3;
        }

        onMouseMove(event) {
          let v3 = this.getContainerLocationMouse(event, this.GameView.CameraGame.node);
          let newAngle;
          let xTan = v3.x;
          let yTan = v3.y + 215; // let newTan = yTan / xTan;

          newAngle = Math.atan2(yTan, xTan) * (180 / Math.PI);
          this.GameModel.ArrowNode.angle = newAngle - 90;

          if (this.GameModel.ArrowNode.angle > 85 || this.GameModel.ArrowNode.angle <= -180) {
            this.GameModel.ArrowNode.angle = 85;
          } else if (this.GameModel.ArrowNode.angle < -85 && this.GameModel.ArrowNode.angle > -180) {
            this.GameModel.ArrowNode.angle = -85;
          }
        }

        instantiateMap() {
          for (let row = 0; row < this.gridRow; row++) {
            this.xFirst = -330;

            for (let col = 0; col < this.gridCol; col++) {
              // this.yFirst = 260;
              this.randomNumber = randomRangeInt(0, 6);
              this.newBallNode = new Node();
              this.newBallNode = instantiate(this.GameModel.BallPrefab);
              this.initArray[row][col] = this.randomNumber;
              this.initArrayNode[row][col] = this.newBallNode;
              this.newBallNode.getComponent(Sprite).spriteFrame = this.GameView.BallSF[this.randomNumber];
              this.newBallNode.getComponent(Animation).clips[0] = this.GameView.BallBreakAnim[this.randomNumber];
              this.newBallNode.getComponent(Animation).defaultClip = this.GameView.BallBreakAnim[this.randomNumber];
              this.GameModel.BallContainer.addChild(this.newBallNode);
              this.newBallNode.position = new Vec3(this.xFirst, this.yFirst, 0);

              if (row % 2 != 0) {
                this.newBallNode.position = new Vec3(this.newBallNode.position.x + 20, this.newBallNode.position.y, 0);
              }

              this.initArrayPos[row][col] = this.newBallNode.position;
              this.xFirst += 40;
            }

            this.yFirst -= 40;
          }
        }

        tweenBallShoot() {
          if (this.GameModel.BallShootNode.position.x === this.x && this.isBounced === true) {
            this.isBounced = false;
            tween(this.GameModel.BallShootNode).to(this.tweenDuration, {
              position: new Vec3(-this.x, this.newTan2 * (3 + this.numberPlus) - this.extra, 0)
            }, {
              easing: "linear" // Tween function

            }).start();
            this.numberPlus += 2;
            this.GameModel.InGameAudio.clip = this.GameView.AudioGame[2];
            this.GameModel.InGameAudio.play();
            this.scheduleOnce(function () {
              this.isBounced = true;
            }, 0.1);
          }

          if (this.GameModel.BallShootNode.position.x === -this.x && this.isBounced === true) {
            this.isBounced = false;
            tween(this.GameModel.BallShootNode).to(this.tweenDuration, {
              position: new Vec3(this.x, this.newTan2 * (3 + this.numberPlus) - this.extra, 0)
            }, {
              easing: "linear" // Tween function

            }).start();
            this.numberPlus += 2;
            this.GameModel.InGameAudio.clip = this.GameView.AudioGame[2];
            this.GameModel.InGameAudio.play();
            this.scheduleOnce(function () {
              this.isBounced = true;
            }, 0.1);
          }
        }

        instantiateBallTop() {
          this.newBallNode = instantiate(this.GameModel.BallPrefab); // this.ballArrayNode.push(ball);

          this.newBallNode.getComponent(Sprite).spriteFrame = this.GameView.BallSF[this.BallRandomNumber];
          this.newBallNode.getComponent(Animation).clips[0] = this.GameView.BallBreakAnim[this.BallRandomNumber];
          this.newBallNode.getComponent(Animation).defaultClip = this.GameView.BallBreakAnim[this.BallRandomNumber];
          this.GameModel.BallContainer.addChild(this.newBallNode);

          for (let i = 0; i < this.topPosX.length; i++) {
            if (this.GameModel.BallShootNode.position.x > this.topPosX[i] - 20 && this.GameModel.BallShootNode.position.x <= this.topPosX[i] + 20) {
              this.newBallNode.position = new Vec3(this.topPosX[i], 260, 0);
            } else if (this.GameModel.BallShootNode.position.x < this.topPosX[0]) {
              this.newBallNode.position = new Vec3(this.topPosX[0], 260, 0);
            } else if (this.GameModel.BallShootNode.position.x > this.topPosX[this.topPosX.length - 1]) {
              this.newBallNode.position = new Vec3(this.topPosX[this.topPosX.length - 1], 260, 0);
            }
          }

          this.GameModel.InGameAudio.clip = this.GameView.AudioGame[1];
          this.GameModel.InGameAudio.play();
          this.GameModel.BallShootNode.position = new Vec3(0, -230, 0);
          this.GameModel.BallShootNode.active = false;
          this.collisionBallNode();
          this.checkDuplicateTop();
          this.addNumberArr(); // this.posArray.push(ball.position);

          this.randomNewBall();
        }

        instantiateNewBall() {
          this.newBallNode = new Node();
          Tween.stopAllByTarget(this.GameModel.BallShootNode);
          this.newBallNode = instantiate(this.GameModel.BallPrefab);
          this.newBallNode.getComponent(Sprite).spriteFrame = this.GameView.BallSF[this.BallRandomNumber];
          this.newBallNode.getComponent(Animation).clips[0] = this.GameView.BallBreakAnim[this.BallRandomNumber];
          this.newBallNode.getComponent(Animation).defaultClip = this.GameView.BallBreakAnim[this.BallRandomNumber];
          this.GameModel.BallContainer.addChild(this.newBallNode);
          this.GameModel.InGameAudio.clip = this.GameView.AudioGame[1];
          this.GameModel.InGameAudio.play();
        }

        collisionBallNode() {
          if (this.newBallNode.position.x === -350) {
            this.newBallNode.position = new Vec3(-310, this.newBallNode.position.y, 0);
          } else if (this.newBallNode.position.x === -370) {
            this.newBallNode.position = new Vec3(-330, this.newBallNode.position.y, 0);
          } else if (this.newBallNode.position.x === 370) {
            this.newBallNode.position = new Vec3(330, this.newBallNode.position.y, 0);
          } else if (this.newBallNode.position.x === 350) {
            this.newBallNode.position = new Vec3(310, this.newBallNode.position.y, 0);
          }
        }

        randomNewBall() {
          this.BallRandomNumber = this.newBallRandomNumber;
          this.GameView.BallShootNodeSF.spriteFrame = this.GameView.BallSF[this.BallRandomNumber];
          this.GameView.BallNodeAnim.play();
          this.predictBallNode();
          this.GameModel.BallNewNode.children[this.indexLast].active = false;
          this.extraTurn++;

          if (this.isEatBall === false) {
            this.indexLast--;
            this.extraTurn = 1;
          }

          this.scheduleOnce(function () {
            this.GameModel.TableNode.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          }, 0.5);
          this.checkLose();

          if (this.indexLast === -1 && this.isLose) {
            this.newIndexLast--;
            this.newRowBall();
            this.indexLast = this.newIndexLast;

            if (this.newIndexLast === -1) {
              this.indexLast = 4;
              this.newIndexLast = 4;
            }
          }

          for (let i = 0; i < this.indexLast + 1; i++) {
            this.GameModel.BallNewNode.children[i].active = true;
          }

          this.isEatBall = false;
          this.isTopTouch = true; // this.resetRemoved();
          // this.resetRemoved();
        }

        addNumberArr() {
          this.checkDuplicateBall();
          this.newBallRow = Math.abs(this.newBallNode.position.y - 260) / 40;
          this.newBallCol = Math.floor((this.newBallNode.position.x - -330) / 40); // console.log('Row = ', this.newBallRow);
          // console.log('Col = ', this.newBallCol);
          // console.log(this.BallRandomNumber);

          this.initArray[this.newBallRow][this.newBallCol] = this.BallRandomNumber;
          this.initArrayPos[this.newBallRow][this.newBallCol] = this.newBallNode.position;
          this.initArrayNode[this.newBallRow][this.newBallCol] = this.newBallNode;
          this.GameModel.BallShootNode.active = true;
          this.clearCluster(); // console.log('arr1: ', this.initArray);
          // console.log('arr2: ', this.initArrayNode);
          // console.log('arr3: ', this.initArrayPos);
        }

        clearCluster() {
          let listCoor = this.getCluster({
            row: this.newBallRow,
            col: this.newBallCol
          }, this.BallRandomNumber);
          let listNode = [];
          this.numberBallClear = listCoor.length;
          listCoor.length >= 3 && listCoor.map(coor => {
            if (this.isAddScore) {
              this.isAddScore = false;
              this.addScore();
            } //Reset location 


            this.initArray[coor.row][coor.col] = -1;
            this.initArrayPos[coor.row][coor.col] = new Vec3(-600, 400, 0);
            this.isEatBall = true;

            if (listCoor.length <= 5) {
              this.GameModel.InGameAudio.clip = this.GameView.AudioGame[3];
              this.GameModel.InGameAudio.play();
            } else if (listCoor.length > 5 && listCoor.length <= 8) {
              this.GameModel.InGameAudio.clip = this.GameView.AudioGame[4];
              this.GameModel.InGameAudio.play();
            } else {
              this.GameModel.InGameAudio.clip = this.GameView.AudioGame[5];
              this.GameModel.InGameAudio.play();
            } //Get list node


            this.initArrayNode[coor.row][coor.col] && listNode.push(this.initArrayNode[coor.row][coor.col]);
            this.initArrayNode[coor.row][coor.col] = new Node();
          });
          let listLinkCoor = [];

          for (let i = 0; i < this.lengthCol; i++) {
            // let index = listCoor.findIndex((item) => item.row === 0 && item.col === i);
            // if(index > -1) continue;
            if (this.initArray[0][i] === -1) continue;
            console.log();
            listLinkCoor.push(...this.getCluster({
              row: 0,
              col: i
            }));
          }

          let emptyCoor = this.getEmptyCoor(listLinkCoor);
          emptyCoor.map(coor => {
            //Reset location 
            this.initArray[coor.row][coor.col] = -1;
            this.initArrayPos[coor.row][coor.col] = new Vec3(-600, 400, 0); //Get list node

            this.initArrayNode[coor.row][coor.col] && listNode.push(this.initArrayNode[coor.row][coor.col]);
            this.initArrayNode[coor.row][coor.col] = new Node();
          }); //Clear node

          listNode.map(node => {
            let anim = node.getComponent(Animation);
            if (!anim) anim = node.addComponent(Animation);
            anim.play();
            anim.on(Animation.EventType.FINISHED, () => {
              anim.node.active = false, this.isAddScore = true;
            });
          });
        }

        getEmptyCoor(list) {
          let listResult = [];

          for (let i = 0; i < this.lengthRow; i++) for (let j = 0; j < this.lengthCol; j++) {
            let index = list.findIndex(item => item.row === i && item.col === j);
            if (index === -1) listResult.push({
              row: i,
              col: j
            });
          }

          return listResult;
        }

        predictBallNode() {
          this.newBallRandomNumber = randomRangeInt(0, 6);
          this.GameModel.BallNewNode.children[this.indexFirst].getComponent(Sprite).spriteFrame = this.GameView.BallSF[this.newBallRandomNumber];
          this.GameModel.BallNewNode.children[this.indexFirst].getComponent(Animation).play();
        }

        checkBall() {
          for (let i = 0; i < this.lengthRow; i++) {
            for (let j = 0; j < this.lengthCol; j++) {
              if (this.GameModel.BallShootNode.position.y > this.initArrayPos[i][j].y - 20 && this.GameModel.BallShootNode.position.y <= this.initArrayPos[i][j].y + 20) {
                if (this.GameModel.BallShootNode.position.x >= this.initArrayPos[i][j].x - 20 && this.GameModel.BallShootNode.position.x < this.initArrayPos[i][j].x && this.isLose) {
                  this.isTopTouch = false;
                  this.instantiateNewBall();
                  this.newBallNode.position = new Vec3(this.initArrayPos[i][j].x - 40, this.initArrayPos[i][j].y, 0);
                  this.GameModel.BallShootNode.position = new Vec3(0, -230, 0);
                  this.GameModel.BallShootNode.active = false; // console.log('check1');

                  this.collisionBallNode(); // this.checkDuplicateBall();

                  this.checkDuplicateBallRight(); // this.posArray.push(this.newBallNode.position);
                  // this.ballArrayNode.push(this.newBallNode);

                  this.addNumberArr(); // this.checkEatBall();

                  this.randomNewBall();
                } else if (this.GameModel.BallShootNode.position.x >= this.initArrayPos[i][j].x && this.GameModel.BallShootNode.position.x < this.initArrayPos[i][j].x + 20 && this.isLose) {
                  this.isTopTouch = false;
                  this.instantiateNewBall();
                  this.newBallNode.position = new Vec3(this.initArrayPos[i][j].x + 40, this.initArrayPos[i][j].y, 0);
                  this.GameModel.BallShootNode.position = new Vec3(0, -230, 0);
                  this.GameModel.BallShootNode.active = false; // console.log('check2');

                  this.collisionBallNode(); // this.checkDuplicateBall();

                  this.checkDuplicateBallLeft(); // this.posArray.push(this.newBallNode.position);
                  // this.ballArrayNode.push(this.newBallNode);

                  this.addNumberArr(); // this.checkEatBall();

                  this.randomNewBall();
                }
              } else if (this.GameModel.BallShootNode.position.y >= this.initArrayPos[i][j].y - 60 && this.GameModel.BallShootNode.position.y <= this.initArrayPos[i][j].y - 20) {
                if (this.GameModel.BallShootNode.position.x >= this.initArrayPos[i][j].x - 20 && this.GameModel.BallShootNode.position.x < this.initArrayPos[i][j].x && this.isLose) {
                  this.isTopTouch = false;
                  this.instantiateNewBall();
                  this.newBallNode.position = new Vec3(this.initArrayPos[i][j].x - 20, this.initArrayPos[i][j].y - 40, 0); // this.posArray.push(this.newBallNode.position);
                  // this.ballArrayNode.push(this.newBallNode);

                  this.GameModel.BallShootNode.position = new Vec3(0, -230, 0);
                  this.GameModel.BallShootNode.active = false; // console.log('check3');

                  this.collisionBallNode(); // this.checkDuplicateBall();

                  this.checkDuplicateBallRightUnder();
                  this.addNumberArr(); // this.checkEatBall();

                  this.randomNewBall();
                } else if (this.GameModel.BallShootNode.position.x >= this.initArrayPos[i][j].x && this.GameModel.BallShootNode.position.x < this.initArrayPos[i][j].x + 20 && this.isLose) {
                  this.isTopTouch = false;
                  this.instantiateNewBall();
                  this.newBallNode.position = new Vec3(this.initArrayPos[i][j].x + 20, this.initArrayPos[i][j].y - 40, 0); // this.posArray.push(this.newBallNode.position);
                  // this.ballArrayNode.push(this.newBallNode);

                  this.GameModel.BallShootNode.position = new Vec3(0, -230, 0);
                  this.GameModel.BallShootNode.active = false; // console.log('check4');

                  this.collisionBallNode(); // this.checkDuplicateBall();

                  this.checkDuplicateBallLeftUnder();
                  this.addNumberArr(); // this.checkEatBall();

                  this.randomNewBall();
                }
              }
            }
          }
        }

        newRowBall() {
          this.xFirst = -330;
          this.yFirst = 260;

          for (let row = 12; row > 0; row--) {
            for (let col = 0; col < this.gridCol; col++) {
              this.initArray[row][col] = this.initArray[row - 1][col];
              this.initArrayPos[row][col] = this.initArrayPos[row - 1][col];
              this.initArrayNode[row][col] = this.initArrayNode[row - 1][col];
            }
          }

          for (let i = 0; i < this.gridCol; i++) {
            this.randomNumber = randomRangeInt(0, 6);
            this.newBallNode = new Node();
            this.newBallNode = instantiate(this.GameModel.BallPrefab);
            this.initArray[0][i] = this.randomNumber;
            this.initArrayNode[0][i] = this.newBallNode;
            this.newBallNode.getComponent(Sprite).spriteFrame = this.GameView.BallSF[this.randomNumber];
            this.newBallNode.getComponent(Animation).clips[0] = this.GameView.BallBreakAnim[this.randomNumber];
            this.newBallNode.getComponent(Animation).defaultClip = this.GameView.BallBreakAnim[this.randomNumber];
            this.GameModel.BallContainer.addChild(this.newBallNode);
            this.newBallNode.position = new Vec3(this.xFirst, this.yFirst, 0);
            this.initArrayPos[0][i] = this.newBallNode.position;
            this.xFirst += 40;
          }

          this.pushDownBall();
          let listNode = [];
          let listLinkCoor = [];

          for (let i = 0; i < this.lengthCol; i++) listLinkCoor.push(...this.getCluster({
            row: 0,
            col: i
          }));

          let emptyCoor = this.getEmptyCoor(listLinkCoor);
          emptyCoor.map(coor => {
            //Reset location
            this.initArray[coor.row][coor.col] = -1;
            this.initArrayPos[coor.row][coor.col] = new Vec3(-600, 400, 0); //Get list node

            this.initArrayNode[coor.row][coor.col] && listNode.push(this.initArrayNode[coor.row][coor.col]);
            this.initArrayNode[coor.row][coor.col] = new Node();
          }); //Clear node

          listNode.map(node => {
            let anim = node.getComponent(Animation);
            if (!anim) anim = node.addComponent(Animation);
            this.scheduleOnce(function () {
              anim.play();
            }, 0.25);
            anim.on(Animation.EventType.FINISHED, () => anim.node.active = false);
          });
        }

        pushDownBall() {
          for (let i = 1; i < this.lengthRow; i++) {
            for (let j = 0; j < this.lengthCol; j++) {
              if (i % 2 !== 0) {
                tween(this.initArrayNode[i][j]).to(0.3, {
                  position: new Vec3(this.initArrayNode[i][j].position.x + 20, this.initArrayNode[i][j].position.y - 40, 0)
                }, {
                  easing: "smooth" // Tween function

                }).start();
              } else {
                tween(this.initArrayNode[i][j]).to(0.3, {
                  position: new Vec3(this.initArrayNode[i][j].position.x - 20, this.initArrayNode[i][j].position.y - 40, 0)
                }, {
                  easing: "smooth" // Tween function

                }).start();
              }
            }
          }

          this.checkLose();
        }

        checkLose() {
          for (let col = 0; col < this.lengthCol; col++) {
            if (this.initArray[12][col] != -1 && this.isLose) {
              this.isLose = false;
              this.isLosed = true;
              this.GameModel.BallShootNode.active = false;
              this.gameOverAction();
            }
          }
        }

        checkDuplicateBall() {
          for (let row = 0; row < this.lengthRow; row++) {
            for (let col = 0; col < this.lengthCol; col++) {
              if (this.newBallNode.position.x === this.initArrayPos[row][16].x && this.newBallNode.position.y === this.initArrayPos[row][16].y) {
                if (row % 2 === 0) {
                  console.log('left1');
                  this.newBallNode.position = new Vec3(this.newBallNode.position.x + 20, this.newBallNode.position.y - 40, 0);
                } else {
                  console.log('right1');
                  this.newBallNode.position = new Vec3(this.newBallNode.position.x - 20, this.newBallNode.position.y - 40, 0);
                }
              } else if (this.newBallNode.position.x === this.initArrayPos[row][0].x && this.newBallNode.position.y === this.initArrayPos[row][0].y) {
                if (row % 2 === 0) {
                  console.log('left2');
                  this.newBallNode.position = new Vec3(this.newBallNode.position.x + 20, this.newBallNode.position.y - 40, 0);

                  if (this.newBallNode.position.x === this.initArrayPos[row][col].x && this.newBallNode.position.y === this.initArrayPos[row][col].y) {
                    this.newBallNode.position = new Vec3(this.newBallNode.position.x + 40, this.newBallNode.position.y, 0);
                  }
                } else {
                  console.log('right2');
                  this.newBallNode.position = new Vec3(this.newBallNode.position.x - 20, this.newBallNode.position.y - 40, 0);

                  if (this.newBallNode.position.x === this.initArrayPos[row][col].x && this.newBallNode.position.y === this.initArrayPos[row][col].y) {
                    this.newBallNode.position = new Vec3(this.newBallNode.position.x + 40, this.newBallNode.position.y, 0);
                  }
                }
              } else if (this.newBallNode.position.y === this.initArrayPos[row][col].y && this.newBallNode.position.x <= this.initArrayPos[row][col] + 40 && this.newBallNode.position.x > this.initArrayPos[row][col]) {
                this.newBallNode.position = new Vec3(this.newBallNode.position.x + 40, this.newBallNode.position.y, 0);
              } else if (this.newBallNode.position.y === this.initArrayPos[row][col].y && this.newBallNode.position.x >= this.initArrayPos[row][col] - 40 && this.newBallNode.position.x < this.initArrayPos[row][col]) {
                this.newBallNode.position = new Vec3(this.newBallNode.position.x - 40, this.newBallNode.position.y, 0);
              }
            }
          }
        }

        checkDuplicateBallLeft() {
          for (let row = 0; row < this.lengthRow; row++) {
            for (let col = 1; col < this.lengthCol - 1; col++) {
              if (this.newBallNode.position.x === this.initArrayPos[row][col].x && this.newBallNode.position.y === this.initArrayPos[row][col].y) {
                this.newBallNode.position = new Vec3(this.newBallNode.position.x - 40, this.newBallNode.position.y, 0);
              }
            }
          }
        }

        checkDuplicateBallLeftUnder() {
          for (let row = 0; row < this.lengthRow; row++) {
            for (let col = 1; col < this.lengthCol - 1; col++) {
              if (this.newBallNode.position.x === this.initArrayPos[row][col].x && this.newBallNode.position.y === this.initArrayPos[row][col].y) {
                this.newBallNode.position = new Vec3(this.newBallNode.position.x - 20, this.newBallNode.position.y - 40, 0);
              }
            }
          }
        }

        checkDuplicateBallRight() {
          for (let row = 0; row < this.lengthRow; row++) {
            for (let col = 1; col < this.lengthCol - 1; col++) {
              if (this.newBallNode.position.x === this.initArrayPos[row][col].x && this.newBallNode.position.y === this.initArrayPos[row][col].y) {
                this.newBallNode.position = new Vec3(this.newBallNode.position.x + 40, this.newBallNode.position.y, 0);
              }
            }
          }
        }

        checkDuplicateBallRightUnder() {
          for (let row = 0; row < this.lengthRow; row++) {
            for (let col = 1; col < this.lengthCol - 1; col++) {
              if (this.newBallNode.position.x === this.initArrayPos[row][col].x && this.newBallNode.position.y === this.initArrayPos[row][col].y) {
                this.newBallNode.position = new Vec3(this.newBallNode.position.x + 20, this.newBallNode.position.y - 40, 0);
              }
            }
          }
        }

        checkDuplicateTop() {
          for (let col = 1; col < this.lengthCol - 1; col++) {
            if (this.newBallNode.position.x === this.initArrayPos[0][col].x && this.newBallNode.position.y === this.initArrayPos[0][col].y) {
              this.newBallNode.position = new Vec3(this.newBallNode.position.x + 20, this.newBallNode.position.y - 40, 0);
            }
          }
        }

        async gameOverAction() {
          this.GameView.BlackBlurNode.active = true;
          this.GameModel.TableNode.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.GameModel.TableNode.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.GameModel.TableNode.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.GameModel.TableNode.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.GameModel.PlayAgainBtn.interactable = false;
          this.GameModel.InGameAudio.clip = this.GameView.AudioGame[6];
          this.GameModel.InGameAudio.play();
          this.GameView.ScoreResultLabel.string = this.scoreResult.toString();
          this.GameView.GameOverNode.active = true;
          let gameOverTableTween = tween(this.GameView.GameOverNode).to(0.5, {
            position: new Vec3(0, -100, 0)
          });
          gameOverTableTween.start();
          this.GameView.LoadingText.active = true;
          this.GameView.LoadingAnimNode.active = true;
          this.GameView.LoadingAnim.play();

          if (this.scoreResult > (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
            error: Error()
          }), DataGame) : DataGame).dataUser.data.highScore) {
            // DataGame.dataUser.data.highScore = this.scoreResult;
            // await this.gameClient.user.data.setGameData({ [this.userID]: DataGame.dataUser }, false).then((response: any) => { 
            //     this.GameView.HighScoreLabel.string = DataGame.dataUser.data.highScore.toString();
            // })
            this.completeGame();
          } else {
            this.GameView.HighScoreLabel.string = (_crd && DataGame === void 0 ? (_reportPossibleCrUseOfDataGame({
              error: Error()
            }), DataGame) : DataGame).dataUser.data.highScore.toString();
            this.completeGame();
          } // this.scheduleOnce(function(){
          // }, 0.5)
          // this.completeGame();

        }

        playAgain() {
          this.clickBtn();
          this.GameModel.PlayAgainBtn.interactable = this.GameModel.PlayAgainBtnGameOver.interactable = false;
          this.initGame();
        }

        backHome() {
          this.clickBtn();
          director.loadScene("Menu"); // director.preloadScene("Menu", function () {
          // });
        }

        getCluster(startCoor, type) {
          let queue = [];
          let visited = [];
          let cluster = [];
          let deltaEven = [new Vec2(-1, 0), new Vec2(1, 0), new Vec2(0, 1), new Vec2(0, -1), new Vec2(-1, 1), new Vec2(-1, -1)];
          let deltaOdd = [new Vec2(-1, 0), new Vec2(1, 0), new Vec2(0, 1), new Vec2(0, -1), new Vec2(1, 1), new Vec2(1, -1)]; //init visited

          while (visited.length < this.lengthRow) {
            let row = new Array(this.lengthCol);
            row.fill(false, 0, row.length);
            visited.push(row);
          }

          queue.push(startCoor);
          visited[startCoor.row][startCoor.col] = true;

          while (queue.length > 0) {
            let temp = queue.shift();
            cluster.push(temp);

            for (let i = 0; i < deltaEven.length; i++) {
              let newCoor = {
                row: 0,
                col: 0
              };
              newCoor.row = temp.row % 2 ? temp.row + deltaOdd[i].y : temp.row + deltaEven[i].y;
              newCoor.col = temp.row % 2 ? temp.col + deltaOdd[i].x : temp.col + deltaEven[i].x;
              if (newCoor.col < 0 || newCoor.col >= this.lengthCol) continue;
              if (newCoor.row < 0 || newCoor.row >= this.lengthRow) continue;
              if (this.initArray[newCoor.row][newCoor.col] === -1) continue;
              if (type != null && this.initArray[newCoor.row][newCoor.col] != type) continue;

              if (!visited[newCoor.row][newCoor.col]) {
                queue.push(newCoor);
                visited[newCoor.row][newCoor.col] = true;
              }
            }
          }

          return cluster;
        }

        pauseBtn() {
          if (!this.GameModel) return;
          this.GameModel.PauseNode.active = true;
          this.GameModel.TableNode.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.GameModel.TableNode.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.GameModel.TableNode.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.GameModel.TableNode.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          let pauseTween = tween(this.GameView.PauseTableNode).to(0.5, {
            scale: new Vec3(1, 1, 1)
          });
          pauseTween.start();
        }

        unPauseBtn() {
          // let pauseTween = tween(this.GameModel.PauseNode).to(0.5, { position: new Vec3(0, 0, 0) })
          // pauseTween.start();
          this.clickBtn();
          let pauseTween = tween(this.GameView.PauseTableNode).to(0.5, {
            scale: new Vec3(0, 0, 1)
          });
          pauseTween.start();
          this.scheduleOnce(function () {
            this.GameModel.PauseNode.active = false;
            this.GameModel.TableNode.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            this.GameModel.TableNode.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.GameModel.TableNode.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
            this.GameModel.TableNode.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          }, 0.5);
        }

        muteMusic() {
          this.GameModel.BackgroundAudio.volume = 0;
          this.clickBtn();
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueMusic = this.GameModel.BackgroundAudio.volume;
          this.GameModel.SoundMusicOnNode.active = !this.GameModel.SoundMusicOnNode.active;
          this.GameModel.SoundMusicOffNode.active = !this.GameModel.SoundMusicOffNode.active;
        }

        unMuteMusic() {
          this.GameModel.BackgroundAudio.volume = 0.5;
          this.clickBtn();
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueMusic = this.GameModel.BackgroundAudio.volume;
          this.GameModel.SoundMusicOnNode.active = !this.GameModel.SoundMusicOnNode.active;
          this.GameModel.SoundMusicOffNode.active = !this.GameModel.SoundMusicOffNode.active;
        }

        muteInGameAudio() {
          this.GameModel.InGameAudio.volume = 0;
          this.clickBtn();
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueVFX = this.GameModel.InGameAudio.volume;
          this.GameModel.SoundInGameOnNode.active = !this.GameModel.SoundInGameOnNode.active;
          this.GameModel.SoundInGameOffNode.active = !this.GameModel.SoundInGameOffNode.active;
        }

        unMuteInGameAudio() {
          this.GameModel.InGameAudio.volume = 0.7;
          this.clickBtn();
          (_crd && Controller === void 0 ? (_reportPossibleCrUseOfController({
            error: Error()
          }), Controller) : Controller).volumeValueVFX = this.GameModel.InGameAudio.volume;
          this.GameModel.SoundInGameOnNode.active = !this.GameModel.SoundInGameOnNode.active;
          this.GameModel.SoundInGameOffNode.active = !this.GameModel.SoundInGameOffNode.active;
        }

        addScore() {
          let score = this.numberBallClear * 10 * this.extraTurn;
          this.schedule(function () {
            // Here this refers to component
            this.score++;
            this.GameView.ScoreLabel.string = this.score.toString();
          }, 0.0001 / score, score - 1, 0); // score = this.score;

          this.scoreResult += score;
        }

        clickBtn() {
          this.GameModel.InGameAudio.clip = this.GameView.AudioGame[8];
          this.GameModel.InGameAudio.play();
        }

        async initGame() {
          let _this = this;

          let parameters = find("GameClient"); // let gameClientParams = parameters.getComponent(StoredAPI);
          // this.gameClient = gameClientParams.gameClient;

          this.GameView.LoadingText.active = true;
          this.GameView.LoadingAnimNode.active = true;
          this.GameView.LoadingAnim.play(); // await gameClientParams.gameClient.match.startMatch()
          //     .then((data) => {
          //         gameClientParams.matchData = data;

          director.loadScene("Game"); //     })
          //     .catch((error) => console.log(error));
        }

        async completeGame() {
          // await this.gameClient.match
          //     .completeMatch(this.matchData, { score: this.scoreResult
          //     })
          //     .then(async (data) => {
          //     })
          //     .catch((error) => console.log(error));
          this.GameView.LoadingText.active = false;
          this.GameView.LoadingAnimNode.active = false;
          this.GameModel.PlayAgainBtnGameOver.node.active = true;
          this.GameModel.BackHomeBtn.node.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameView", [_dec3], {
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
//# sourceMappingURL=626e4a30366bbff46242f615161f23248b52dbad.js.map