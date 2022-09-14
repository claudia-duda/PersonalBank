import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoDepositoComponent } from "./novo-deposito.component";

describe('NovoDepositoComponent', () => {
  let component: NovoDepositoComponent;
  let fixture: ComponentFixture<NovoDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoDepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
