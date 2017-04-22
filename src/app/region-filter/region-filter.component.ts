import {Component, OnInit} from '@angular/core';
import {Region, regions} from "../_shared/region.type";

@Component({
    selector: 'app-region-filter',
    templateUrl: './region-filter.component.html',
    styleUrls: ['./region-filter.component.scss']
})
export class RegionFilterComponent implements OnInit {
    regions: Region[] = [];

    showDropdownBox: boolean = false;
    showExcludeList: boolean = false;
    showIncludeList: boolean = false;

    selectViewPartText: string = 'Все области';

    constructor() {}

    ngOnInit() {
        document.body.addEventListener('click', () => {
            this.showDropdownBox = false;
            this.showExcludeList = false;
            this.showIncludeList = false;
        });
        this.regions = regions;
    }

    toggleDropdownBox(e) {
        e.stopPropagation();
        this.showDropdownBox = !this.showDropdownBox;
    }

    selectAllRegions(e) {
        e.stopPropagation();
        this.showIncludeList = false;
        this.showExcludeList = false;
        this.showDropdownBox = false;

        if (e.target.children[0]) this.selectViewPartText = e.target.children[0].innerText;
        this.regions.forEach((region) => {
            region.selected = true;
        });
    }

    excludeAllRegions(e) {
        e.stopPropagation();
        this.showIncludeList = false;
        this.showExcludeList = false;
        this.showDropdownBox = false;
        if (e.target.children[0]) this.selectViewPartText = e.target.children[0].innerText;

        this.regions.forEach((region) => {
            region.selected = false;
        });
    }

    includeRegions(e) {
        e.stopPropagation();
        this.showIncludeList = true;
        this.showExcludeList = false;
        if (e.target.children[0]) this.selectViewPartText = e.target.children[0].innerText;
    }

    excludeRegions(e) {
        e.stopPropagation();
        this.showExcludeList = true;
        this.showIncludeList = false;
        if (e.target.children[0]) this.selectViewPartText = e.target.children[0].innerText;
    }

    deleteLabel(region) {
        region.selected = false;
    }


}
