import { ConfigModuleOptions } from "@nestjs/config/dist";
import { appConfig } from "./app";

export const config:ConfigModuleOptions = {
    load: [appConfig],
    cache: true,
    isGlobal: true
}
