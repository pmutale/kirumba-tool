import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFirebaseComponent } from './app-firebase.component';

describe('AppFirebaseComponent', () => {
  let component: AppFirebaseComponent;
  let fixture: ComponentFixture<AppFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFirebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
