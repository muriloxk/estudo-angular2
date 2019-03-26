import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoCompraComponent } from './sucesso-compra.component';

describe('SucessoCompraComponent', () => {
  let component: SucessoCompraComponent;
  let fixture: ComponentFixture<SucessoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
