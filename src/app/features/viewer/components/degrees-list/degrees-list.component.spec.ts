import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getMockDegrees } from '../../../../mock/degree.mock';

import { DegreesListComponent } from './degrees-list.component';

describe(DegreesListComponent.name, () => {
  let component: DegreesListComponent;
  let fixture: ComponentFixture<DegreesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesListComponent);
    component = fixture.componentInstance;
  });

  describe('degrees property', () => {
    it(`should display nothing when component.degrees isn't initialized`, () => {
      // Given
      // When
      fixture.detectChanges();
      // Then
      expect(component.orderedDegrees).toEqual([]);
      expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(0);
    });
    it(`should display ordered (DESC by degree.start) degrees when component.degrees is defined`, () => {
      // Given
      const degrees = getMockDegrees().map((d, i) => {
        d.start = 2000 + i;
        d.end = 2001 + i;
        return d;
      });
      const expected = [...degrees].reverse();
      component.degrees = degrees;
      // When
      fixture.detectChanges();
      // Then
      expect(component.orderedDegrees).toEqual(expected);
      // check names
      const degreeNameElts = fixture.debugElement.queryAll(
        By.css('.mat-mdc-list-item-title')
      );
      expect(degreeNameElts.map((d) => d.nativeElement.textContent)).toEqual(
        expected.map((e) => e.name)
      );
      // check schools and years
      const degreeElts = fixture.debugElement.queryAll(
        By.css('.at-mdc-list-item-line')
      );
      degreeElts.forEach((degreeElts, i) =>
        expect(degreeElts.nativeElement.textContent).toEqual(
          expected.map(
            (e) =>
              `${expected[i].start} - ${expected[i].end} ${expected[i].school}`
          )
        )
      );
    });
  });
});
