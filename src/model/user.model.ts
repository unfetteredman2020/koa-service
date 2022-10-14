import { DataTypes } from 'sequelize';
import sequelize from '@/config/db.config';

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// try {
//   (async() => {
//     await User.sync({ force: true });
//   })();
// } catch (error) {
//   console.error(error);
// }

export default User;
