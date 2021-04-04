import { WorkExperienceListComponent } from "../components/work-experience-list/work-experience-list.component";
import { WorkExperience } from "../model/work-experience";
import { getMockSkills } from "./skill.mock.spec";

const WORK_EXPERIENCES: WorkExperience[] = [
  {
    jobTitle: "Tech Lead Developer",
    company: "Startup Hub",
    period: {
      start: new Date(2018, 3)
    },
    description: `Role description goes here ipsum dolor sit amet, consectetuer adipiscing
  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
  quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede
  justo, fringilla vel.`,
    achievements: {
      description: `Praesentium voluptatum deleniti atque corrupti quos dolores et quas
    molestias excepturi sint occaecati cupiditate non provident.`,
      items: [
        "Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.",
        "At vero eos et accusamus et iusto odio dignissimos.",
        "Blanditiis praesentium voluptatum deleniti atque corrupti.",
        "Maecenas tempus tellus eget."
      ]
    },
    skills: getMockSkills()
  },
  {
    jobTitle: "Lead Developer",
    company: "a company",
    period: {
      start: new Date(2016, 6),
      end: new Date(2018, 2)
    },
    description: `Role description goes here ipsum dolor sit amet, consectetuer adipiscing
  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis.`,
    achievements: {
      description: `Praesentium voluptatum deleniti atque corrupti quos dolores et quas
    molestias excepturi sint occaecati cupiditate non provident.`,
      items: [
        "Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.",
        "Maecenas tempus tellus eget."
      ]
    },
    skills: getMockSkills()
  }
]

export function getMockWorkExperiences(): WorkExperience[] {
  return JSON.parse(JSON.stringify(WORK_EXPERIENCES))
}
