import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceDataAccess } from './commerce-data-access';

describe('CommerceDataAccess', () => {
  let component: CommerceDataAccess;
  let fixture: ComponentFixture<CommerceDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceDataAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
