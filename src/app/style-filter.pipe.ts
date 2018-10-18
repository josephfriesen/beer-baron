import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: 'styleFilter',
  pure: false
})

export class StyleFilterPipe implements PipeTransform {

  transform(input: Keg[], style: string) {
    if (style === "all") {
      return input;
    }
    let output: Keg[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].style == style) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
