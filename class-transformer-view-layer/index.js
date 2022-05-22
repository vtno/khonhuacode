"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var class_transformer_1 = require("class-transformer");
var express = require("express");
var strftime = require("strftime");
var app = express();
var User = /** @class */ (function () {
    function User() {
    }
    User.find = function () {
        return [
            (0, class_transformer_1.plainToClass)(User, { id: 1, name: 'John', password: '1234', createdAt: new Date() }),
            (0, class_transformer_1.plainToClass)(User, { id: 2, name: 'Jane', password: '1235', createdAt: new Date() }),
            (0, class_transformer_1.plainToClass)(User, { id: 3, name: 'Same', password: '1236', createdAt: new Date() }),
        ];
    };
    return User;
}());
var APIUser = /** @class */ (function () {
    function APIUser() {
    }
    __decorate([
        (0, class_transformer_1.Expose)()
    ], APIUser.prototype, "name");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Transform)(function (value) { return strftime('%d/%m/%Y - %H:%M:%S', value.obj.createdAt); })
    ], APIUser.prototype, "createdAt");
    APIUser = __decorate([
        (0, class_transformer_1.Exclude)()
    ], APIUser);
    return APIUser;
}());
var GetUsersResponse = /** @class */ (function () {
    function GetUsersResponse() {
    }
    GetUsersResponse.fromUsers = function (users) {
        return { users: users.map(function (u) { return (0, class_transformer_1.plainToClass)(APIUser, u); }) };
    };
    return GetUsersResponse;
}());
app.get('/users', function (req, res) {
    var users = User.find();
    res.json(GetUsersResponse.fromUsers(users));
});
app.listen(3000, function () {
    console.log('listening on port 3000');
});
