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
  successStories = 'successStories',
  references = 'references',
  keySuccessFactors = 'keySuccessFactors',
  nonExistentCategory = 'Make sure all content values in MenuItems are keys of Activity',
};

export interface BsportJsonData {
    StartUrl:                  string;
    Menu:                      MenuItem[];
    ExampleOfActivites:        ExampleOfActivites;
    ExampleOfExcerciseProgram: ExampleOfExcerciseProgram;
}

export interface ExampleOfActivites {
    numberOfActivites: number;
    Activites:         Activity[];
}

export interface Activity {
    title:             string;
    partner:           string;
    link:              string;
    logo:              string;
    targetGroup:       string;
    needs:             string;
    challenges:        string;
    stakeholders:      string;
    indicators:        Indicator[];
    successStories:    SuccessStory[];
    references:        Reference[];
    keySuccessFactors: string;
}

export interface Indicator {
    description: string;
    referenceId: string;
}

export interface Reference {
    id:    string;
    title: string;
    link:  string;
}

export interface SuccessStory {
    title: string;
    link:  string;
}

export interface ExampleOfExcerciseProgram {
    numberOfExercisePrograms: number;
    Exercise: ExcerciseProgram[];
}

export interface ExcerciseProgram {
    title:   string;
    partner: string;
    link:    string;
    logo:    string;
}

export interface MenuItem {
    label:     string;
    href?:     string;
    content:   string;
    children?: MenuItem[];
}

