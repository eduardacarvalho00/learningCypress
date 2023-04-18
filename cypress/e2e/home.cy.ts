describe("home page", () => {
  beforeEach(() => {
    //This is a function that will get called “before each” test is run
    cy.visit("http://localhost:3000")
  })
  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    //Notice that within each test, we have to specifically tell Cypress where to navigate to in our application.

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses") // case-sensitive
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })
})
