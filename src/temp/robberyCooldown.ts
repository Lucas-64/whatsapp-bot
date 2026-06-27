let lastRobbery = 0;

export default {
  get: () => lastRobbery,
  set: (value: number) => {
    lastRobbery = value;
  }
};