const birthDate: Date = new Date("2007-01-29");
const today: Date = new Date();
const stasAge: number =
  today.getFullYear() -
  birthDate.getFullYear() -
  (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

export default stasAge;
