import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleticketComponent } from './teleticket.component';

describe('TeleticketComponent', () => {
  let component: TeleticketComponent;
  let fixture: ComponentFixture<TeleticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeleticketComponent]
    });
    fixture = TestBed.createComponent(TeleticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
