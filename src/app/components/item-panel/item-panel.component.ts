import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-item-panel',
  standalone: true,
  imports: [],
  templateUrl: './item-panel.component.html',
  styleUrl: './item-panel.component.css',
})
export class ItemPanelComponent {
  @Input() item!: Item;

  formatDate(dateString: string): string {
    const date = new Date(dateString);

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }

  getTimeSincePost(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());

    if (Math.floor(diffTime / (1000 * 60 * 60)) < 24)
      return 'Less than 1 day ago';
    else if (Math.floor(diffTime / (1000 * 60 * 60)) < 47) return '1 day ago';
    else if (Math.floor(diffTime / (1000 * 60 * 60)) < 24 * 7)
      return 'Less than a week ago';
    else return 'More than a week ago';
  }

  getRarity(rarity: number): string {
    switch (rarity) {
      case 0:
        return 'Normal';

      case 1:
        return 'Uncommon';

      case 2:
        return 'Rare';

      case 3:
        return 'Legendary';

      default:
        return `Invalid rarity: ${rarity}`;
    }
  }

  getItemType(type: number): string {
    switch (type) {
      case 0:
        return 'Weapon';
      case 1:
        return 'Helm';
      case 2:
        return 'Chest';
      case 3:
        return 'Belt';
      case 4:
        return 'Ring';
      case 5:
        return 'Gloves';
      case 6:
        return 'Boots';
      case 7:
        return 'Off-Hand';
      case 8:
        return 'Amulet';
      default:
        return `Invalid item type: ${type}`;
    }
  }
}
