import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInUsersComponent } from './log-in-users.component';

describe('LogInUsersComponent', () => {
  let component: LogInUsersComponent;
  let fixture: ComponentFixture<LogInUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
