'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      displayName: 'Lewis Hamilton',
      email: 'lewishamilton@gmail.com',
      password: '123456',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
    },
    {
      displayName: 'Michael Schumacher',
      email: 'MichaelSchumacher@gmail.com',
      password: '123456',
      image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
    },
  ], {}),
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
