import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeCharacter'
})
export class ProductCodePipe implements PipeTransform {
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }
}