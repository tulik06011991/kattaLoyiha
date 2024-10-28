"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("@nestjs-modules/ioredis");
const redis_service_1 = require("./redis/redis.service");
let RedisModule = class RedisModule {
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ioredis_1.RedisModule.forRoot({
                config: {
                    host: 'your-redis-cloud-host',
                    port: your - redis - cloud - port,
                    password: 'your-redis-password',
                },
            }),
        ],
        providers: [redis_service_1.RedisService],
        exports: [ioredis_1.RedisModule, redis_service_1.RedisService],
    })
], RedisModule);
//# sourceMappingURL=redis.module.js.map