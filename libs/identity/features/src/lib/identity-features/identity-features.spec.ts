import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentityFeatures } from './identity-features';

describe('IdentityFeatures', () => {
  let component: IdentityFeatures;
  let fixture: ComponentFixture<IdentityFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityFeatures],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentityFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
