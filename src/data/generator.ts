import { StageType, StageItem, ItemStatus, ItemType, TemplateType, GanttItem } from '../types';
import { getDateBlocks } from './utils';
import { faker } from '@faker-js/faker';

export const getStages = (start: Date, end: Date): StageItem[] => {
  const blocks = getDateBlocks(start, end, 6);
  
  return blocks.map((el, index) => {
    return { stage: Object.values(StageType)[index], ...el };
  });
};

export const getGanttItem = (): GanttItem => {
  const id = faker.string.uuid();
  const fNumber = String(faker.number.int(999999));
  const number = `GL-${fNumber.padStart(6, '0')}`;
  const name = faker.company.name();
  const description = faker.company.catchPhrase();
  const status = faker.helpers.enumValue(ItemStatus);
  const type = faker.helpers.enumValue(ItemType);
  const startDate = new Date(2021, 0, 1);
  const endDate = new Date(2021, 0, 20);
  const template = faker.helpers.enumValue(TemplateType);
  const fTags = faker.helpers.multiple(faker.lorem.word, { count: 10 });
  const tags = faker.helpers.arrayElements(fTags, { min: 1, max: 6 });
  const fCompanies = faker.helpers.multiple(faker.company.name, { count: 10 });
  const companies = faker.helpers.arrayElements(fCompanies, { min: 1, max: 6 });
  const stages = getStages(startDate, endDate);

  return {
    id,
    number,
    name,
    description,
    status,
    type,
    startDate,
    endDate,
    template,
    tags,
    companies,
    stages,
  };
};
