import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPermissionRequestComponent } from './account-permission-request.component';

describe('AccountPermissionRequestComponent', () => {
  let component: AccountPermissionRequestComponent;
  let fixture: ComponentFixture<AccountPermissionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPermissionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPermissionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
