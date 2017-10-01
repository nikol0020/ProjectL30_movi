"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var movie_service_1 = require("../services/movie.service");
var MainComponent = (function () {
    function MainComponent(http, service) {
        this.http = http;
        this.service = service;
        this.stars = 0;
        this.title = '';
        this.likes = 0;
        this.posterUrl = '';
        this.director = '';
        this.actors = '';
        this.genres = '';
        this.description = '';
        this.toggoleShowHide = 'hidden';
        this.widthMainContent = '100%';
    }
    MainComponent.prototype.like = function (item) {
        item['likes']++;
        this.likeRender(item);
    };
    MainComponent.prototype.dislike = function (item) {
        item['likes']--;
        this.likeRender(item);
    };
    MainComponent.prototype.getItemData = function () {
        return this.itemData;
    };
    MainComponent.prototype.setItemData = function (itemData) {
        return this.itemData = itemData;
    };
    MainComponent.prototype.close = function () {
        this.toggoleShowHide = 'hidden';
        this.widthMainContent = '100%';
    };
    MainComponent.prototype.render = function (details) {
        this.title = details['title'];
        this.likes = details['likes'];
        this.posterUrl = details['posterUrl'];
        this.director = details['director'];
        this.actors = details['actors'];
        this.genres = details['genres'];
        this.description = details['description'];
        this.toggoleShowHide = 'visible';
        this.widthMainContent = '50%';
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getItemes().subscribe(function (result) { return _this.itemData = result; }, function (error) { return console.log(error.statusText); });
    };
    MainComponent.prototype.likeRender = function (item) {
        this.service.likeMovie(item).subscribe(function (error) { return console.log(error.statusText); });
    };
    ;
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        templateUrl: 'app/features/main/main.component.html',
        styleUrls: ['app/features/main/main.component.css'],
        providers: [movie_service_1.MovieService]
    }),
    __metadata("design:paramtypes", [http_1.Http, movie_service_1.MovieService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map