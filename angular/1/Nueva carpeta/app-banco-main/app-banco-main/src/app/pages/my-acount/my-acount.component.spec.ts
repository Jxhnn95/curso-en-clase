import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAcountComponent } from './my-acount.component';

describe('MyAcountComponent', () => {
  let component: MyAcountComponent;
  let fixture: ComponentFixture<MyAcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAcountComponent]
    });
    fixture = TestBed.createComponent(MyAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
