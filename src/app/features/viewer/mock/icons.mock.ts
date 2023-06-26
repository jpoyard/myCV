import { SvgIcon } from '../model/icon';
import MOCK_SVG_ICONS from 'mock-data/icons.json';

export function getMockSvgIcons(): SvgIcon[] {
  return JSON.parse(JSON.stringify(MOCK_SVG_ICONS));
}
