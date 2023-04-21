'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          title: 'Шашлык свиной',
          body: 'Вкусный свиной шашлык, прошлый заказчик пропал, в подарок - сок из апельсинов',
          img: 'https://www.maggi.ru/data/images/recept/img564x436/recept_6141_l0jj.jpg',
          location: 'Москва, ул. Маршала Жукова, д.4, кв. 5',
          initial_price: 400,
          sale: 15,
          phone: +79064026781,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Бургер от Вкусно-и-точка',
          body: 'Биг Спешиал без лука, приготовлен утром',
          img: 'https://medialeaks.ru/wp-content/uploads/2022/07/mycollages-13-1.jpg',
          location: 'Москва, ул. Мелких Коммерсантов, д.12, корп. 3б кв. 17',
          initial_price: 250,
          sale: 30,
          phone: +79043076781,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пирожки с ливером',
          body: '5 ливерных пирожков, свежих, просто объедение, готовила баба Зина',
          img: 'https://www.koolinar.ru/all_image/recipes/140/140162/recipe_dafd8c72-ecec-4a65-b469-1f9c767466e1_w450.webp',
          location: 'Москва, ул. Космонавтов, д.7, кв. 19',
          initial_price: 150,
          sale: 5,
          phone: +79028739012,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
