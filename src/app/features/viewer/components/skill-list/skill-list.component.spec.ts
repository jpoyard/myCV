import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChip } from '@angular/material/chips';
import { MatChipListboxHarness } from '@angular/material/chips/testing';
import { By } from '@angular/platform-browser';
import { getMockSkills } from '../../mock/skill.mock';
import { SkillWithLevelComponent } from '../skill-with-level/skill-with-level.component';
import { SkillListComponent } from './skill-list.component';
import { Skill } from '@features/viewer/model/skill';

describe(SkillListComponent.name, () => {
  let component: SkillListComponent;
  let fixture: ComponentFixture<SkillListComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillListComponent);
    component = fixture.componentInstance;
    // TODO: TestbedHarnessEnvironment.loader(fixture) is not working
    // loader = TestbedHarnessEnvironment.loader(fixture);
  });

  describe('title property', () => {
    it('should display no title when title is undefined', () => {
      // Given
      // When
      fixture.detectChanges();
      // Then
      expect(component).toBeTruthy();
      expect(fixture.debugElement.query(By.css('h3'))).toBeNull();
    });
    ['front-end', 'back-end'].forEach((title) => {
      it(`should display '${title}' title when title='${title}'`, () => {
        // Given
        component.title = title;
        // When
        fixture.detectChanges();
        // Then
        expect(component).toBeTruthy();
        const titleElt = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(titleElt.textContent).toContain(title);
      });
    });
  });

  describe('skills property', () => {
    const title = 'front-end';
    const skills = getMockSkills();

    it('should display no skill when component.skills is undefined', () => {
      // Given

      // When
      init({ title, skills: [], withLevel: true });

      // Then
      expect(component).toBeTruthy();
      expect(component.skills).toEqual([]);
      const skillElts = fixture.debugElement.queryAll(By.css('li'));
      expect(skillElts.length).toBe(0);
    });

    it('should display ordered (by level) skills with progress when component.skills is defined and component.withLevel=true', () => {
      // Given
      const expected = skills
        .sort((a, b) => (b.level || 0) - (a.level || 0))
        .map((a) => a.name);

      // When
      init({ title, skills, withLevel: true });

      // Then
      expect(component.orderedSkills.map((skill) => skill.name)).toEqual(
        expected
      );

      const skillElts = fixture.debugElement.queryAll(
        By.directive(SkillWithLevelComponent)
      );
      expect(skillElts.length).toBe(skills.length);
      expect(skillElts.map((a) => a.nativeElement.textContent)).toEqual(
        expected
      );
    });

    it('should display badges when component.skills is defined and component.withLevel=false', async () => {
      // Given
      const expected = skills
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((a) => a.name);

      // When
      init({ title, skills, withLevel: false });

      // Then
      expect(component.orderedSkills.map((skill) => skill.name)).toEqual(
        expected
      );

      // TODO: TestbedHarnessEnvironment.loader(fixture) is not working
      // const chipList = await loader.getHarness(MatChipListboxHarness);
      // const chips = await chipList.getChips({selected: true});

      // expect(chips.length).toBe(skills.length);
      // expect(await parallel(() => chips.map((chip) => chip.getText()))).toEqual(
      //   expected
      // );

      const skillElts = fixture.debugElement.queryAll(By.directive(MatChip));
      expect(skillElts.length).toBe(skills.length);
      expect(skillElts.map((a) => a.nativeElement.textContent)).toEqual(
        expected
      );
    });
  });

  function init({
    title,
    skills,
    withLevel,
  }: {
    title?: string;
    skills: Skill[];
    withLevel: boolean;
  }) {
    component.title = title;
    component.skills = skills;
    component.withLevel = withLevel;

    component.ngOnChanges({
      skills: {
        currentValue: skills,
        previousValue: [],
        isFirstChange: jest.fn(),
        firstChange: true,
      },
    });
    fixture.detectChanges();
  }
});
