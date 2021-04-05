import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SkillLevelEnum } from 'src/app/features/viewer/model/skill';
import { ProgressComponent } from '../progress/progress.component';

import { SkillWithLevelComponent } from './skill-with-level.component';

describe(SkillWithLevelComponent.name, () => {
  let component: SkillWithLevelComponent;
  let fixture: ComponentFixture<SkillWithLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillWithLevelComponent, ProgressComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillWithLevelComponent);
    component = fixture.componentInstance;
  });

  describe('skill property', () => {
    it('should display nothing when skill is undefined', () => {
      // Given
      // When
      fixture.detectChanges();
      // Then
      expect(fixture.nativeElement.textContent).toBe('');
    });
    it('should display only skill.name when skill.level is undefined', () => {
      // Given
      const name = 'Angular';
      component.skill = { name, keys: [] };
      // When
      fixture.detectChanges();
      // Then
      expect(fixture.debugElement.query(By.css('.skill-name')).nativeElement.textContent).toBe(name);
      expect(fixture.debugElement.query(By.css('mcv-progress'))).toBeNull();
    });
    it('should display skill when name and level are defined', () => {
      // Given
      const name = 'Angular';
      component.skill = { name, keys: [], level: SkillLevelEnum.advanced };
      // When
      fixture.detectChanges();
      // Then
      expect(fixture.debugElement.query(By.css('.skill-name')).nativeElement.textContent).toBe(name);
      expect(fixture.debugElement.query(By.css('mcv-progress'))).toBeDefined();
    });
  })

});
