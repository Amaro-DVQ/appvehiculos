import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { OfrecerAutoPage } from './ofrecer-auto.page';
import { of } from 'rxjs';

describe('OfrecerAutoPage', () => {
  let component: OfrecerAutoPage;
  let fixture: ComponentFixture<OfrecerAutoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfrecerAutoPage],
      providers: [
        { provide: AngularFireAuth, useValue: { authState: of({ email: 'test@example.com' }) } },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { num: '123' },
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(OfrecerAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize cantidadPersonas to undefined', () => {
    expect(component.cantidadPersonas).toBeUndefined();
  });

});
