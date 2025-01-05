import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemQuery } from '../../interfaces/item.interface';

@Component({
  selector: 'app-query-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './query-bar.component.html',
  styleUrl: './query-bar.component.css',
})

export class QueryBarComponent {
  query: ItemQuery = {};

  @Output() searchSubmitted = new EventEmitter<ItemQuery>();

  itemTypes = [
    'Any',
    'Weapon',
    'Helm',
    'Chest',
    'Belt',
    'Ring',
    'Gloves',
    'Boots',
    'Off-Hand',
    'Amulet',
  ];
  rarities = ['Any', 'Normal', 'Uncommon', 'Rare', 'Legendary'];
  datesPosted = ['Any', 'Last Hour', '24 Hours', 'Last Week'];

  onSearch() {
    const searchQuery = Object.fromEntries(
      Object.entries(this.query).filter(
        ([_, value]) => value !== '' && value != null
      )
    );
    this.searchSubmitted.emit(searchQuery);
    console.log(`Searching query: ${searchQuery.toString()}`);
  }
}
