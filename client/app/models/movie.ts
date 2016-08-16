﻿import {Review} from '../../app/models/review';

export class Movie
{
    public id: number;
    public imdb : string;
    public name: string;
    public description: string;
    public collection: number;
    public genre: string;
    public language: string;   
    public year: number;
    public rating: number;
    public type : string;
    public poster: string;
    public Reviews: Array<Review>;
} 