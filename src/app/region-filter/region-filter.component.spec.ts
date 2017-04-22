/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {RegionFilterComponent} from './region-filter.component';

describe('RegionFilterComponent', () => {
    let component: RegionFilterComponent;
    let fixture: ComponentFixture<RegionFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegionFilterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegionFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
