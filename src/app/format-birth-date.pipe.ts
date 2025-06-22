import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatBirthDate'
})
export class FormatBirthDatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const date = new Date(value);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const month = date.toLocaleString('en-US', { month: 'long' }); // 'April'
    const day = date.getDate().toString().padStart(2, '0');         // '22'
    const year = date.getFullYear();                                // '1998'

    return `${month} ${day}, ${year}`;
  }
}
