export const generateUser = (id = 0) => ({
  id,
  age: 20,
  friends: [],
  hairColor: 'black',
  height: 170,
  name: 'Test',
  professions: ['Test Profession'],
  thumbnail: 'http://placehold.it/200x200',
  weight: 60,
});

export const generateUsers = amount => Array(amount)
  .fill(generateUser())
  .map((user, index) => {
    const newUser = { ...user };
    newUser.id = index;

    return newUser;
  });
