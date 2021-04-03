import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getMockSkills } from 'src/app/mock/skill.mock.spec';
import { BadgeComponent } from '../badge/badge.component';
import { ProgressComponent } from '../progress/progress.component';
import { SkillWithLevelComponent } from '../skill-with-level/skill-with-level.component';
import { SkillListComponent } from './skill-list.component';

describe(SkillListComponent.name, () => {
  let component: SkillListComponent;
  let fixture: ComponentFixture<SkillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillWithLevelComponent, SkillListComponent, BadgeComponent, ProgressComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillListComponent);
    component = fixture.componentInstance;
  });

  describe('title property', () => {
    it('should display no title when title is undefined', () => {
      // Given
      // When
      fixture.detectChanges();
      // Then
      expect(component).toBeTruthy();
      expect(fixture.debugElement.query(By.css('h5'))).toBeNull();
    });
    [
      'front-end', 'back-end'
    ].forEach(title => {
      it(`should display '${title}' title when title='${title}'`, () => {
        // Given
        component.title = title;
        // When
        fixture.detectChanges();
        // Then
        expect(component).toBeTruthy();
        const titleElt = fixture.debugElement.query(By.css('h5')).nativeElement;
        expect(titleElt.textContent).toBe(title)
      });
    });
  });

  describe('skills property', () => {
    const title = 'front-end';
    it('should display no skill when component.skills is undefined', () => {
      // Given
      component.title = title;
      // When
      fixture.detectChanges();
      // Then
      expect(component).toBeTruthy();
      expect(component.skills).toEqual([]);
      const skillElts = fixture.debugElement.queryAll(By.css('li'));
      expect(skillElts.length).toBe(0)
    });
    it('should display ordered (by level) skills with progress when component.skills is defined and component.withLevel=true', () => {
      // Given
      const skills = getMockSkills();
      const expected = skills.sort((a, b) => (a.level || 0) - (b.level || 0)).map(a => a.name);
      component.title = title;
      component.skills = skills;
      component.withLevel = true;
      // When
      fixture.detectChanges();
      // Then
      expect(component).toBeTruthy();
      const skillElts = fixture.debugElement.queryAll(By.css('.skill-name'));
      expect(skillElts.length).toBe(skills.length);
      expect(skillElts.map(a => a.nativeElement.textContent)).toEqual(expected);
    });
    it('should display ordered (by name) skills with badge when component.skills is defined and component.withLevel=false', () => {
      // Given
      const skills = getMockSkills();
      const expected = skills.sort((a, b) => a.name.localeCompare(b.name)).map(a => a.name);
      component.title = title;
      component.skills = skills;
      component.withLevel = false;
      // When
      fixture.detectChanges();
      // Then
      expect(component).toBeTruthy();
      const skillElts = fixture.debugElement.queryAll(By.css('mcv-badge'));
      expect(skillElts.length).toBe(skills.length);
      expect(skillElts.map(a => a.nativeElement.textContent)).toEqual(expected);
    });
  })
});
