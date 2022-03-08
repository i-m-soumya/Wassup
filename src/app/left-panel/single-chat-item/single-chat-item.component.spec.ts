import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChatItemComponent } from './single-chat-item.component';

describe('SingleChatItemComponent', () => {
  let component: SingleChatItemComponent;
  let fixture: ComponentFixture<SingleChatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChatItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
