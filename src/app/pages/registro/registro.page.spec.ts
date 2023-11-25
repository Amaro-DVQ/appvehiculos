import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service'; 
import { HttpClientModule } from '@angular/common/http';

class AngularFireAuthMock { }

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [
        AngularFireModule.initializeApp({}),
        AngularFireAuthModule,
        HttpClientModule, 
      ],
      providers: [
        { provide: AngularFireAuth, useClass: AngularFireAuthMock },
        UserService,
        LocationService,
      ],
    });

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the correct title', () => {
    const expectedTitle = 'Registro';
    expect(component.title).toEqual(expectedTitle);
  });
});
