// TODO: Реализуйте тип FilterByProperty
type FilterByProperty<T, Key extends string> = T extends { [K in Key]: any } ? T : never;

type Administrator = {
  name: string;
};

type Security = {
  name: string;
  shift: 'day' | 'night';
};

type Developer = {
  name: string;
  computer: 'MacOS' | 'Windows';
};

type TestingEngineer = {
  name: string;
  computer: 'MacOS' | 'Windows';
};

type Personal = Administrator | Security | Developer | TestingEngineer;

type WithComputers = FilterByProperty<Personal, 'computer'>;
// type WithComputers = Developer | TestingEngineer
