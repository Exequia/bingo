import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getEnumNumberValues(enumData: Object): number[] {
    return Object.keys(enumData || [])
      .map((v) => Number(v))
      .filter((num) => !isNaN(num));
  }
}
