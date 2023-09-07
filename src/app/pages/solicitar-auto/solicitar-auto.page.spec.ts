import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarAutoPage } from './solicitar-auto.page';

describe('SolicitarAutoPage', () => {
  let component: SolicitarAutoPage;
  let fixture: ComponentFixture<SolicitarAutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitarAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
