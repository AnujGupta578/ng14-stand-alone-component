import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'standaloneStar',
    standalone: true
})
export class StandaloneStarPipe implements PipeTransform {
    transform(value: any) {
        const stars = new Array(value.length);
        return stars.fill('*').join('');
    }
}