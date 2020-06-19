import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListBrgPage } from './list-brg.page';

describe('ListBrgPage', () => {
  let component: ListBrgPage;
  let fixture: ComponentFixture<ListBrgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBrgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListBrgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
