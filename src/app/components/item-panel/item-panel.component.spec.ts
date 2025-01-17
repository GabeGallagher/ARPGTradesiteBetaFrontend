import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPanelComponent } from './item-panel.component';

describe('ItemPanelComponent', () => {
  let component: ItemPanelComponent;
  let fixture: ComponentFixture<ItemPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
