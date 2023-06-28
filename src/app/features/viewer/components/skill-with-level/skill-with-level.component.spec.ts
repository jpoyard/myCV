import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SkillLevelEnum } from '@model/skill';
import { SkillWithLevelComponent } from './skill-with-level.component';

describe(SkillWithLevelComponent.name, () => {
  let component: SkillWithLevelComponent;
  let fixture: ComponentFixture<SkillWithLevelComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillWithLevelComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should display progress with color=warn when skill.level is undefined', () => {
    // Given
    const name = 'Angular';
    component.skill = { name, keys: [] };
    // When
    fixture.detectChanges();
    // Then
    expect(component.color).toBe('warn');
    expect(fixture.debugElement.query(By.css('mcv-progress'))).toBeNull();
  });

  it('should display skill when name and level are defined', () => {
    // Given
    const name = 'Angular';
    component.skill = { name, keys: [], level: SkillLevelEnum.advanced };
    // When
    fixture.detectChanges();
    // Then
    expect(
      fixture.debugElement.query(By.css('b')).nativeElement.textContent
    ).toBe(name);
    expect(fixture.debugElement.query(By.css('mcv-progress'))).toBeDefined();
  });
});
