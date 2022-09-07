import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvisitorComponent } from './showvisitor.component';

describe('ShowvisitorComponent', () => {
  let component: ShowvisitorComponent;
  let fixture: ComponentFixture<ShowvisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowvisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
