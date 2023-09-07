import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfrecerAutoPage } from './ofrecer-auto.page';

describe('OfrecerAutoPage', () => {
  let component: OfrecerAutoPage;
  let fixture: ComponentFixture<OfrecerAutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfrecerAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
