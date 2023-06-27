import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getMockDegrees } from '../../mock/degree.mock';

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
      const degreeNameElts = fixture.debugElement.queryAll(By.css('.degree'));
      expect(degreeNameElts.map((d) => d.nativeElement.textContent)).toEqual(
        expected.map((e) => e.name)
      );
      // check schools
      const degreeSchoolElts = fixture.debugElement.queryAll(
        By.css('.degree-school')
      );
      expect(degreeSchoolElts.map((d) => d.nativeElement.textContent)).toEqual(
        expected.map((e) => e.school)
      );
      // check years
      const degreeYearElts = fixture.debugElement.queryAll(
        By.css('.degree-years')
      );
      degreeYearElts.forEach((degreeYearElts, i) =>
        expect(degreeYearElts.nativeElement.textContent).toContain(
          `${expected[i].start} - ${expected[i].end}`
        )
      );
    });
  });
});
