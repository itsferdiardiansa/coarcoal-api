
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum TechLevel {
    LOW = "LOW",
    MID = "MID",
    STRONG = "STRONG"
}

export class Experience {
    company?: Nullable<string>;
    years?: Nullable<string>;
}

export abstract class IQuery {
    abstract experience(): Nullable<Experience[]> | Promise<Nullable<Experience[]>>;

    abstract aboutMe(): Nullable<AboutMe> | Promise<Nullable<AboutMe>>;

    abstract techStacks(): Nullable<Tech[]> | Promise<Nullable<Tech[]>>;
}

export class AboutMe {
    description?: Nullable<string>;
}

export class Tech {
    name?: Nullable<string>;
    url?: Nullable<string>;
    imageUrl?: Nullable<string>;
    level?: Nullable<TechLevel>;
}

type Nullable<T> = T | null;
