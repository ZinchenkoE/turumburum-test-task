import {Component, OnInit} from '@angular/core';
import {Region, regions} from "../_shared/region.type";

@Component({
    selector: 'app-region-list',
    templateUrl: './region-list.component.html',
    styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {
    regions: Region[];

    constructor() {}

    ngOnInit() {
        this.regions = regions;
    }

}
