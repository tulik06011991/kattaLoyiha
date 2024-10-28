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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheController = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("./redis.service");
let CacheController = class CacheController {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async setCache(body) {
        await this.redisService.setValue(body.key, body.value);
        return { message: 'Value set successfully' };
    }
    async getCache(key) {
        const value = await this.redisService.getValue(key);
        return { key, value };
    }
};
exports.CacheController = CacheController;
__decorate([
    (0, common_1.Post)('set'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CacheController.prototype, "setCache", null);
__decorate([
    (0, common_1.Get)('get/:key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CacheController.prototype, "getCache", null);
exports.CacheController = CacheController = __decorate([
    (0, common_1.Controller)('cache'),
    __metadata("design:paramtypes", [typeof (_a = typeof redis_service_1.RedisService !== "undefined" && redis_service_1.RedisService) === "function" ? _a : Object])
], CacheController);
//# sourceMappingURL=cache.controller.js.map