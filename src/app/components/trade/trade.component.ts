import { Component } from '@angular/core';
import { QueryBarComponent } from '../query-bar/query-bar.component';
import { ItemQuery } from '../../interfaces/item-query.interface';
import { ItemService } from '../../services/item/item.service';
import { CommonModule } from '@angular/common';
import { ItemPanelComponent } from '../item-panel/item-panel.component';

@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [QueryBarComponent, CommonModule, ItemPanelComponent],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css',
})
export class TradeComponent {
  items: any[] = [];

  constructor(private itemService: ItemService) {}

  handleSearch(query: ItemQuery) {
    this.itemService.getItems(query).subscribe({
      next: (response) => {
        this.items = response;
        console.log(`Items received: ${response}`);
      },
      error: (error) => {
        console.error(`Error fetching items: ${error}`);
      },
    });

    console.log(`Heard item query in trade component: ${query}`);
  }
}
