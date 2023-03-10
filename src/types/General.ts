import Router from "~/api/Router";

export type StatusCodes = 400 | 401 | 403 | 404 | 405 | 406 | 408 | 409 | 410 | 429 | 500 | 501 | 507 | 505;

export interface ErrorResponse {
    statusCode: number;
    statusMessage: string;
    message: string;
}

export type Errors = {
    [T in StatusCodes]: ErrorResponse;
};

export interface RobotsConfig {
    userAgent: string | string[];
    disallow: string | string[];
    crawlDelay?: string;
    sitemap?: string | string[];
    host?: string | string[];
}

export interface Context {
    path: string;
    method: string;
    controller: Router;
}
