import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { MoveService } from './move.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  items: string[] = ['https://getbootstrap.com/', 'https://getbootstrap.com/', 'https://getbootstrap.com/'];
  newItem: string;

  constructor(private sanitizer: DomSanitizer, private moveService: MoveService) {}

  ngOnInit() {
  }

  getSafeUrl(item: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(item);
  }

  add(item: string): void {
    this.items.push(item);
  }

  remove(item: string): void{
    const index = this.items.indexOf(item);
    if(~index){
      this.items.splice(index, 1);
    }
  }

  moveup(item: string): void{
    var currIndex = this.items.indexOf(item);
    if(~currIndex){
      var new_index = currIndex -1;
      console.log('CURR ', currIndex, 'NEW ', new_index);
      this.items = this.moveService.array_move(this.items, currIndex, new_index);
      console.log('NEW ARR', this.items);
    }
  }
}
