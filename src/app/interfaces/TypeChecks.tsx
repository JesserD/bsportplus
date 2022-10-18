import { Indicator } from './Interfaces';

export const isOfTypeIndicator = (objectKeys : string[]) => {
    const indicatorKeys: (keyof Indicator)[] = ['description', 'referenceId'];
    return objectKeys.length === indicatorKeys.length && objectKeys.every((el, ix) => el === indicatorKeys[ix]);
  };