export enum ItemStatus {
  Inactive = 'Inactive',
  Active = 'Active',
  Ceased = 'Ceased',
}

export enum ItemType {
  Parent = 'Parent',
  Child = 'Child',
}

export enum TemplateType {
  LOE = 'LOE',
  SOW = 'SOW',
  NDA = 'NDA',
  MSA = 'MSA',
}

export enum StageType {
  Active = 'Active',
  Pre = 'Pre',
  Post = 'Post'
}

export type StageItem = {
  stage: StageType,
  from:Date,
  to:Date;
}

export type GanttItem = {
  id: string;
  number: string;
  name:string;
  description: string;
  status: ItemStatus;
  type: ItemType;
  startDate: Date;
  endDate: Date;
  template: TemplateType;
  tags: string[];
  companies: string[];
  stages: StageItem[];
}