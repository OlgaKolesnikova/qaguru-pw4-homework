import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {MainPage, RegisterPage} from '../src/pages/index';

const URL = 'https://realworld.qa.guru/';

test.describe('Избранное', () => {
  test.beforeEach( async ({ page }) => {
    await page.goto(URL);
    const user = {

    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
    };
    const mainPage = new MainPage(page);
    await mainPage.gotoRegister();
    const registerPage = new RegisterPage(page);
    await registerPage.register(user);
});

  test('Пользователь нажимает кнопку добавления в желаемое', async ({ page, }) => {
    
    const mainPage = new MainPage(page);
    await mainPage.gotoGlobalFeed();
    await mainPage.addWishlist();

    await expect(page.locator('button.btn-outline-primary.active')).toBeVisible();
  });

  test('Поиск по тегу', async ({ page, }) => {
    const mainPage = new MainPage(page);
    await mainPage.filterByTag();

    await expect(page.locator('button.nav-link.active')).toContainText('реклама');
  });

  test('Переход в профиль', async ({ page, }) => {
    const mainPage = new MainPage(page);
    await mainPage.gotoProfile();
    
    await expect(page.getByRole('main').locator('.profile-page img')).toBeVisible();
  });

  test('Переход к созданию новой статьи', async ({ page, }) => {
    const mainPage = new MainPage(page);
    await mainPage.gotoNewArticle();
    
    await expect(page.getByRole('textbox', { name: 'Article Title' })).toBeVisible();
  });

  test('Переход к настройкам', async ({ page, }) => {
    const mainPage = new MainPage(page);
    await mainPage.gotoSettings();
    
    await expect(page.getByRole('heading', { name: 'Your Settings' })).toBeVisible();
  });

});