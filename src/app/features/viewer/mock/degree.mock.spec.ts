import { Degree } from "../model/degree";

const MOCK_DEGREES: Degree[] = [
  {
    name: 'MSc in Computer Science',
    school: 'University College London',
    start: 2010,
    end: 2011
  },
  {
    name: 'BSc Maths and Physics',
    school: 'Imperial College London',
    start: 2007,
    end: 2010
  },
]

export function getMockDegrees(): Degree[] {
  return JSON.parse(JSON.stringify(MOCK_DEGREES))
}
