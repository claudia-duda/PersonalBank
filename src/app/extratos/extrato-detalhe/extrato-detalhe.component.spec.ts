import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoDetalheComponent } from './extrato-detalhe.component';

describe('ExtratoDetalheComponent', () => {
  let component: ExtratoDetalheComponent;
  let fixture: ComponentFixture<ExtratoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratoDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtratoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
