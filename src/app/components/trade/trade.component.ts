import { Component } from '@angular/core';
import { QueryBarComponent } from "../query-bar/query-bar.component";

@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [QueryBarComponent],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css'
})
export class TradeComponent {

}
