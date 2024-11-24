import BasePage from '../base.page.js'
import LoginPage from '../login.page.js'
import HomePage from '../home.page.js'
import ShoppingCardPage from '../shopping-card.page.js'
import CheckoutPage from '../checkout.page.js'
import MyOrdersPage from '../my-orders.page.js'

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.shoppingCart = new ShoppingCardPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.myOrdersPage = new MyOrdersPage(page);
    }
}
