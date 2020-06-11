import { LoggingLevelEnum } from "../enums/logging-level.enum";

export interface AppConfig {
    apiEndpoint: string;
    loggingEnabled: boolean;
    loggingLevel: LoggingLevelEnum;
}
