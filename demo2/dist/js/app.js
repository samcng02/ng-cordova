System.register("app/app", ["angular2/angular2", "ionic/ionic", "./pages/songs", "./pages/playlists"], function (_export) {
    "use strict";

    var NgFor, Component, View, IonicApp, Register, Aside, Nav, List, Item, Content, SongsPage, PlaylistsPage, __decorate, __metadata, MyApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export("main", main);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function main(ionicBootstrap) {
        ionicBootstrap(MyApp);
    }

    return {
        setters: [function (_angular2Angular2) {
            NgFor = _angular2Angular2.NgFor;
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
        }, function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            Register = _ionicIonic.Register;
            Aside = _ionicIonic.Aside;
            Nav = _ionicIonic.Nav;
            List = _ionicIonic.List;
            Item = _ionicIonic.Item;
            Content = _ionicIonic.Content;
        }, function (_pagesSongs) {
            SongsPage = _pagesSongs.SongsPage;
        }, function (_pagesPlaylists) {
            PlaylistsPage = _pagesPlaylists.PlaylistsPage;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            MyApp = (function () {
                var _class = function MyApp(app) {
                    _classCallCheck(this, _class);

                    console.log("IonicApp Start", SongsPage);
                    this.app = app;
                    this.pages = [{ title: "Songs", component: SongsPage }, { title: "Playlists", component: PlaylistsPage }];
                    this.firstPage = SongsPage;
                };

                _createClass(_class, [{
                    key: "openPage",
                    value: function openPage(aside, page) {
                        console.log("Opening page", page);
                        // Close the side menu
                        aside.close();
                        // Reset the content nav to have just this page
                        var nav = this.app.getComponent("nav");
                        nav.setItems([page.component]);
                    }
                }]);

                return _class;
            })();

            MyApp = __decorate([Component({ selector: "ion-app" }), View({
                directives: [NgFor, Aside, Nav, Content, List, Item, Register],
                templateUrl: "templates/main.html"
            }), __metadata("design:paramtypes", [typeof IonicApp !== "undefined" && IonicApp || Object])], MyApp);
        }
    };
});