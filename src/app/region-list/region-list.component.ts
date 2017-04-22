import {Component, OnInit, Input} from '@angular/core';
import {Region, regions} from "../_shared/region.type";

@Component({
    selector: 'app-region-list',
    templateUrl: './region-list.component.html',
    styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {
    @Input() type: string;
    regions: Region[] = [];
    searchStr: string;

    constructor() {}

    ngOnInit() {
        this.regions = regions;
    }

    changeRegionCheckbox(region: Region, e) {
        if (this.type === 'includeList') {
            region.selected = e.target.checked;
        } else {
            region.selected = !e.target.checked;
        }
    }

}
