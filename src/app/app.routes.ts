import { Routes } from '@angular/router';
import { TradeComponent } from './components/trade/trade.component';

export const routes: Routes = [
  { path: '', component: TradeComponent },
  { path: 'trade', component: TradeComponent },
  { path: '**', component: TradeComponent }
];
