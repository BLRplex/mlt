export const filterByNameCallback = (users, filterValue) => {
  if (!filterValue) {
    return users;
  }

  return users.filter(user => user.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
};

export const filterByProfessionCallback = (users, filterValue) => {
  if (!filterValue || filterValue.length === 0) {
    return users;
  }

  return users.filter(user => filterValue.some(filter => user.professions.indexOf(filter) !== -1));
};

export const filterByHairsCallback = (users, filterValue) => {
  if (!filterValue || filterValue.length === 0) {
    return users;
  }

  return users.filter(user => filterValue.some(filter => user.hairColor === filter));
};

export const filterStrategy = (users, filters) => {
  const strategies = [
    { callback: filterByNameCallback, key: 'filterName' },
    { callback: filterByHairsCallback, key: 'filterHairColors' },
    { callback: filterByProfessionCallback, key: 'filterProfessions' },
  ];

  return strategies.reduce(
    (acc, strategy) => {
      // eslint-disable-next-line
      acc = strategy.callback(acc, filters[strategy.key]);

      return acc;
    },
    users,
  );
};
