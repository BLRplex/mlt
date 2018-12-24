import pt from 'prop-types';

export default {
  age: pt.number.isRequired,
  friends: pt.arrayOf(pt.string).isRequired,
  hairColor: pt.string,
  height: pt.number.isRequired,
  id: pt.number.isRequired,
  name: pt.string.isRequired,
  professions: pt.arrayOf(pt.string).isRequired,
  thumbnail: pt.string.isRequired,
  weight: pt.number.isRequired,
};
