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
var main_component_1 = require("../main/main.component");
var movie_service_1 = require("../services/movie.service");
var SortButtonsComponent = (function () {
    function SortButtonsComponent(main, service) {
        this.main = main;
        this.service = service;
        this.name = 'Sort Movies';
        this.nameByLike = 'by likes';
        this.nameByRating = 'by rating';
        this.flagLikes = false;
        this.flagRating = false;
    }
    SortButtonsComponent.prototype.likes = function () {
        var _this = this;
        this.service.getItemes().subscribe(function (result) {
            if (!_this.flagLikes) {
                _this.itemData = result.sort(function (a, b) { return b['likes'] - a['likes']; });
            }
            else {
                _this.itemData = result.sort(function (a, b) { return a['likes'] - b['likes']; });
            }
            _this.main.setItemData(_this.itemData);
            _this.flagLikes = !_this.flagLikes;
        }, function (error) { return console.log(error.statusText); });
    };
    SortButtonsComponent.prototype.rating = function () {
        var _this = this;
        this.service.getItemes().subscribe(function (result) {
            if (!_this.flagRating) {
                _this.itemData = result.sort(function (a, b) { return b['stars'] - a['stars']; });
            }
            else {
                _this.itemData = result.sort(function (a, b) { return a['stars'] - b['stars']; });
            }
            _this.main.setItemData(_this.itemData);
            _this.flagRating = !_this.flagRating;
        }, function (error) { return console.log(error.statusText); });
    };
    return SortButtonsComponent;
}());
SortButtonsComponent = __decorate([
    core_1.Component({
        selector: "sort-buttons",
        templateUrl: "app/features/sort-buttons/sort-buttons.component.html",
        styleUrls: ["app/features/sort-buttons/sort-buttons.component.css"],
        providers: [movie_service_1.MovieService]
    }),
    __metadata("design:paramtypes", [main_component_1.MainComponent, movie_service_1.MovieService])
], SortButtonsComponent);
exports.SortButtonsComponent = SortButtonsComponent;
//# sourceMappingURL=sort-buttons.component.js.map