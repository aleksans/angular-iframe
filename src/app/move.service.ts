import { Injectable } from '@angular/core';

@Injectable()
export class MoveService {

  constructor() { }

  array_move(arr: string[], old_index: number, new_index: number): string[] {
    if(new_index == old_index ||
      new_index >= arr.length ||
      new_index < 0){
        return arr;
      }

      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr;
  }
}
