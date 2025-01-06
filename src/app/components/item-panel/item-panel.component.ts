import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-item-panel',
  standalone: true,
  imports: [],
  templateUrl: './item-panel.component.html',
  styleUrl: './item-panel.component.css'
})
export class ItemPanelComponent {
  @Input() item!: Item;
}
