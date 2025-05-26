/*class CategoryPage {
    selectCategory(category) {
        cy.contains("'a', category").click()
    }

    selectProduct(product) {
        cy.contains('a', product).click()
    }
}

export default CategoryPage*/

class CategoryPage {
    selectProduct(product) {
        cy.contains('a', product)
            .should('be.visible')
            .click();
    }
}

export default CategoryPage;

