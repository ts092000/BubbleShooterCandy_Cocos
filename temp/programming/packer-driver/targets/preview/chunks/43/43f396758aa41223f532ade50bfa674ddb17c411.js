System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, Controller;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9fd9BIuSpEXKmqvjV+e9Bv", "Controller", undefined); // import GameClient from '@onechaintech/gamesdk-dev';


      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Controller", Controller = (_dec = ccclass('Controller'), _dec(_class = class Controller extends Component {
        constructor() {
          super(...arguments);
          this.gameClient = void 0;
        }

        start() {
          return _asyncToGenerator(function* () {
            // let _this = this;
            // let parameters = find("GameClient");
            // if (parameters === null) {
            //     let parameters = new Node("GameClient");
            //     if (this.gameClient === undefined) {
            //         this.gameClient = new GameClient("652f447ac99e7f524a3b60fc", "40cbeb4f-3bb5-4429-8a1b-a998db59a894", window.parent, {dev: true});
            //         await this.gameClient.initAsync()
            //         .then(async (data) => {
            //             //Get current user id
            //             let userID = this.gameClient.user.citizen.getCitizenId();
            //             //Get gamedata from server
            //             await this.gameClient.user.data.getGameData().then((response: any) => {
            //                 //Save data
            //                 if (response.data[`${userID}`] !== undefined) DataGame.dataUser = response.data[`${userID}`];
            //             }).catch(async (e) => {
            //                 console.log('Error at get game data: ', e);
            //             })
            //             let gameClientParams = parameters.addComponent(StoredAPI);
            //             gameClientParams.gameClient = this.gameClient;
            //             director.addPersistRootNode(parameters);
            //         })
            //         .catch((err) => console.log(err));
            //     }
            // }
            director.loadScene("Menu");
          })();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43f396758aa41223f532ade50bfa674ddb17c411.js.map