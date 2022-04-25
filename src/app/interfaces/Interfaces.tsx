export interface MenuItem {
    label: string;
    href?: string;
    content: ActivityKey | string;
    children?: MenuItem[];
}
export interface Activity {
    title: string;
    partner: string;
    link: string;
    logo: string
    targetGroup: string;
    needs: string;
    challenges: string;
    stakeholders: string;
    indicators: string;
    successstories: Source[];
    references: Source[];
    keySuccessFactors: string;
}
export interface Source {
    title: string;
    link?: string;
}

export interface ExcerciseProgram {
    title: string;
    partner: string;
    link: string;
    logo: string;
}

export enum ActivityKey {
  title = 'title',
  partner = 'partner',
  link = 'link',
  logo = 'logo',
  targetGroup = 'targetGroup',
  needs = 'needs',
  challenges = 'challenges',
  stakeholders = 'stakeholders',
  indicators = 'indicators',
  successstories = 'successstories',
  references = 'references',
  keySuccessFactors = 'keySuccessFactors',
  nonExistentCategory = 'Make sure all content values in MenuItems are keys of Activity',
};

