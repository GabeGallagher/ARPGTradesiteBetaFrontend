import { Component } from '@angular/core';
import { QueryBarComponent } from '../query-bar/query-bar.component';
import { ItemQuery } from '../../interfaces/item.interface';
import { ItemService } from '../../services/item/item.service';

@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [QueryBarComponent],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css',
})
export class TradeComponent {
  constructor(private itemService: ItemService) {}

  handleSearch(query: ItemQuery) {
    this.itemService.getItems(query).subscribe({
      next: (response) => {
        console.log(`Items received: ${response}`);
      },
      error: (error) => {
        console.error(`Error fetching items: ${error}`);
      }
    })

    console.log(`Heard item query in trade component: ${query}`);
  }
}
