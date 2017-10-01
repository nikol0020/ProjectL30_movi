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
var SearchButtonComponent = (function () {
    function SearchButtonComponent(service, main) {
        this.service = service;
        this.main = main;
        this.newSearchTitle = '';
    }
    SearchButtonComponent.prototype.onSearch = function (form) {
        var _this = this;
        this.service.getItemes().subscribe(function (result) {
            _this.itemData = result.filter(function (item) { return (item['title'].toLowerCase().indexOf(form.value.title) !== -1); });
            _this.main.setItemData(_this.itemData);
        }, function (error) { return console.log(error.statusText); });
    };
    return SearchButtonComponent;
}());
SearchButtonComponent = __decorate([
    core_1.Component({
        selector: "search-button",
        templateUrl: "app/features/search-button/search-button.component.html",
        styleUrls: ["app/features/search-button/search-button.component.css"]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService, main_component_1.MainComponent])
], SearchButtonComponent);
exports.SearchButtonComponent = SearchButtonComponent;
//# sourceMappingURL=search-button.component.js.map