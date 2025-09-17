export class MainPage {
    constructor(page, user) {
        //техническое описание страницы
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        this.globalFeedButton = page.getByRole('button', { name: 'Global Feed' });
        this.addWishlistButton = page.locator('button.btn-outline-primary');
        this.removeWishlistButton = page.locator('button.btn-outline-primary.active');
        this.tagButton = page.getByRole('button', { name: 'реклама', exact: true });
        this.profileIcon = page.locator('div.nav-link img.user-pic');
        this.profileLink = page.getByRole('link', { name: 'Profile' });
        this.newArticleLink = page.getByRole('link', { name: 'New Article' });
        this.settingsLink = page.getByRole('link', { name: 'Settings' });

    }
    //методы
    async gotoRegister() {
        //бизнесовые действия со страницей
        await this.signupLink.click();
    }
    async gotoGlobalFeed() {
        await this.globalFeedButton.click();
    }
    async addWishlist() {
        await this.addWishlistButton.first().click();
    }
    //пока не понятно как использовать в тесте
    async removeWishlist() {
        await this.removeWishlistButton.click();
    }
    async filterByTag() {
        await this.tagButton.click();
    }
    async gotoProfile() {
        await this.profileIcon.click();
        await this.profileLink.click();
    }
    async gotoNewArticle() {
        await this.newArticleLink.click();
    }
    async gotoSettings() {
        await this.profileIcon.click();
        await this.settingsLink.click();
    }

}