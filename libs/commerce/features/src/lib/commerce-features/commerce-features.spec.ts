import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceFeatures } from './commerce-features';

describe('CommerceFeatures', () => {
  let component: CommerceFeatures;
  let fixture: ComponentFixture<CommerceFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceFeatures],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
