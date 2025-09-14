export const add = (a: number, b: number): number => {
  return a + b;
};

export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

export const formatName = (firstName: string, lastName: string): string => {
  return `${capitalize(firstName)} ${capitalize(lastName)}`;
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
