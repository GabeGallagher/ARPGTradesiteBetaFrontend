import { Component } from '@angular/core';
import { QueryBarComponent } from '../query-bar/query-bar.component';
import { ItemQuery } from '../../interfaces/item.interface';

@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [QueryBarComponent],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css',
})
export class TradeComponent {
  handleSearch(query: ItemQuery) {
    console.log(`Heard item query in trade component: ${query}`);
  }
}
