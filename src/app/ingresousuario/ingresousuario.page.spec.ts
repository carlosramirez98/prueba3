import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresousuarioPage } from './ingresousuario.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Si se usan formularios en el componente
import { IonicStorageModule } from '@ionic/storage-angular';
describe('IngresousuarioPage', () => {
  let component: IngresousuarioPage;
  let fixture: ComponentFixture<IngresousuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresousuarioPage],
      imports: [
        HttpClientModule,   // Necesario para peticiones HTTP
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(), // Para componentes de Ionic
        FormsModule,        // Si usas formularios en el componente
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IngresousuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
