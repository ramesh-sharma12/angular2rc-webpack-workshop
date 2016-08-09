﻿
import {Component,OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import { NgFor, NgIf} from '@angular/common';
import {RouteConfig, RouterLink, RootRouter} from '@angular/router-deprecated';

import {ProxyService} from '../../services/proxyService';
import {Base} from '../../base';
import {Menu} from '../../common/menu';
import {Movie} from '../../models/Movie';

@Component({
    selector: 'component-1',
    templateUrl: './index.html',
    directives: [RouterLink, NgFor, NgIf]
})

export class MovieIndex implements OnInit//extends Base
{
    private proxyService: ProxyService;
    private movies: Array<Movie>;
    private menus: Array<Menu>;

    constructor(proxyService: ProxyService) {  
        //super('movies'); , public router : Router
        this.proxyService = proxyService;
        this.movies = new Array<Movie>();
        this.menus = new Array<Menu>();

        this.menus.push(new Menu('title', 'A-Z', 'asc'));
        this.menus.push(new Menu('year', 'year', 'desc'));
        this.menus.push(new Menu('rating', 'rating', 'desc'));
        this.menus.push(new Menu('review', 'User Review', 'desc'));
        this.menus.push(new Menu('collection', 'Box Collection', 'desc'));
    }

    getMovies() {
        this.proxyService.getMovies(null, null).then((response) => {
            this.movies = response;
        });

        //this.proxyService.getMovies()
        //    .map(r => r.json())
        //    .subscribe(a => {
        //    this.movies = a;
        //});
    }

    getDetails(event, id: string) {
        window.location.href = '/movies/detail/' + id;
    }

    getByFilters(sortKey: string, sortOrder: string) { 
       
        if (sortKey.length && sortOrder.length) {
            this.menus.forEach(function (item) {
                if (item.sortKey == sortKey) {
                    if (item.order == 'asc') {
                        item.order = 'desc';
                    } else {
                        item.order = 'asc';
                    }
                }
            });

            this.proxyService.getMovies(sortKey, sortOrder).then((response) => {
                this.movies = response;
            });
        }
    }

    ngOnInit() {
        this.getMovies();
    }
}