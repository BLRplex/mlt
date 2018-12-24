export default (usersArray) => {
  const professionsList = new Set();
  const hairColorsList = new Set();

  // Avoid kebab case and normalize data for camel case.
  const normalizedUsers = usersArray
    // eslint-disable-next-line
    .map(({ hair_color, professions, ...rest }) => ({
      hairColor: hair_color,
      professions: professions.map(profession => profession.trim()),
      ...rest,
    }));

  normalizedUsers.forEach((user) => {
    if (user.professions && user.professions.length > 0) {
      user.professions.forEach((profession) => {
        professionsList.add(profession.trim());
      });
    }

    if (user.hairColor && user.hairColor.length > 0) {
      hairColorsList.add(user.hairColor.trim());
    }
  });

  return {
    users: normalizedUsers,
    professions: Array.from(professionsList),
    hairColors: Array.from(hairColorsList),
  };
};
