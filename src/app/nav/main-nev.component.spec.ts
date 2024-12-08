import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNevComponent } from './main-nev.component';

describe('MainNevComponent', () => {
  let component: MainNevComponent;
  let fixture: ComponentFixture<MainNevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
