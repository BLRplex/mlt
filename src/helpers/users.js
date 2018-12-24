export const extractUsersByNames = (
  users,
  names,
) => users.filter(user => names.indexOf(user.name) !== -1);

export const extractProfileDetails = user => [
  {
    label: 'Age',
    value: user.age,
  },
  {
    label: 'Height',
    value: user.height,
  },
  {
    label: 'Weight',
    value: user.weight,
  },
  {
    label: 'Hair color',
    value: user.hairColor,
  },
]
  // Return only filled props
  .filter(prop => prop.value);

export const extractColleagues = (
  users,
  professions,
) => users.filter((user) => {
  let professionFound = false;

  user.professions.forEach((userProfession) => {
    if (!professionFound && professions.indexOf(userProfession) !== -1) {
      professionFound = true;
    }
  });

  return professionFound;
});

export const findUsersByNameOrProfession = (
  users,
  name,
) => users
  .filter((user) => {
    const usernameMatchs = user.name
      .toLowerCase()
      .indexOf(name.toLowerCase()) !== -1;

    const professionMatchs = user.professions
      .map(profession => profession.toLowerCase())
      .indexOf(name.toLowerCase()) !== -1;

    return usernameMatchs || professionMatchs;
  });
