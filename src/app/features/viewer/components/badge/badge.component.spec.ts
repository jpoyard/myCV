import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BootstrapColorEnum } from '../../model/color.enum';
import { BadgeComponent } from './badge.component';

describe(BadgeComponent.name, () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
  });

  describe('name property', () => {
    ['PostgresSQL', undefined].forEach((name) => {
      it(`should display given name '${name}' with badge-pill and badge-secondary classes
when name='${name}'`, () => {
        // Given
        if (name) {
          component.name = name;
        }
        // When
        fixture.detectChanges();
        // Then
        expect(component).toBeTruthy();
        const element = fixture.debugElement.query(
          By.css('.badge')
        ).nativeElement;
        expect(element.classList).toContain('badge-pill');
        expect(element.classList).toContain('badge-secondary');
        expect(element.textContent).toBe(name || '');
      });
    });
  });

  describe('hasBadgePill property', () => {
    [true, false].forEach((hasBadgePill) => {
      it(`should display component ${
        hasBadgePill ? 'with' : 'without'
      } badge-pill class
when hasBadgePill='${hasBadgePill}'`, () => {
        // Given
        component.name = 'Angular';
        component.hasBadgePill = hasBadgePill;
        // When
        fixture.detectChanges();
        // Then
        expect(component).toBeTruthy();
        const element = fixture.debugElement.query(
          By.css('.badge')
        ).nativeElement;
        expect(element.classList).toContain('badge-secondary');
        if (hasBadgePill) {
          expect(element.classList).toContain('badge-pill');
        } else {
          expect(element.classList).not.toContain('badge-pill');
        }
        expect(element.textContent).toBe(component.name);
      });
    });
  });

  describe('color property', () => {
    Object.values(BootstrapColorEnum).forEach((color) => {
      it(`should display component with badge-pill and badge-${color} classes
when color='${color}'`, () => {
        // Given
        const expectedBadgeColor = `badge-${color}`;
        component.name = 'Angular';
        component.color = color;
        // When
        fixture.detectChanges();
        // Then
        expect(component).toBeTruthy();
        const element = fixture.debugElement.query(
          By.css('.badge')
        ).nativeElement;
        expect(element.classList).toContain(expectedBadgeColor);
        expect(element.classList).toContain('badge-pill');
        expect(element.textContent).toBe(component.name);
      });
    });
  });
});
