import {Pipe, PipeTransform} from '@angular/core';
import {Region} from './region.type';

@Pipe({
    name: 'filterSelected',
    pure: false
})
export class filterSelectedPipe implements PipeTransform {
    transform(regions: Region[]): any {
        return regions.filter(region => region.selected);
    }
}

@Pipe({
    name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
    transform(regions: Region[], search: string): any {
        if (!search) return regions;
        search = search.toLocaleLowerCase();
        return regions.filter(region => region.name.toLocaleLowerCase().indexOf(search) !== -1);
    }
}

@Pipe({
    name: 'orderBySelected',
    pure: false
})
export class OrderBySelectedPipe implements PipeTransform {
    transform(regions: Region[], revers: boolean = false): any {
        return regions.sort((a, b) => {
            if(revers){
                return a.selected ? 1 : -1;
            }else{
                return a.selected ? -1 : 1;
            }
        });
    }
}
