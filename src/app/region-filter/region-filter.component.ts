import {Component, OnInit} from '@angular/core';
import {Region, regions} from "../_shared/region.type";

@Component({
    selector: 'app-region-filter',
    templateUrl: './region-filter.component.html',
    styleUrls: ['./region-filter.component.scss']
})
export class RegionFilterComponent implements OnInit {
    selectedRegion: Region[];
    showDropdownBox: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }
    toggleDropdown(){
        this.showDropdownBox = !this.showDropdownBox;
    }
}
