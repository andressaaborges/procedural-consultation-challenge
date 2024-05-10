describe('process display', () => {
  it('should be able to display data from an existing process', () => {
    cy.searchByQuery('8500235-12.2019.4.05.8000')

    cy.location('pathname').should(
      'equal',
      '/process/8500235-12.2019.4.05.8000',
    )

    cy.contains('Processo nº 8500235-12.2019.4.05.8000 do TRF5')
  })

  it('should be able to display an error message when the process number is incorrect', () => {
    cy.searchByQuery('123456789')

    cy.location('pathname').should('include', '/')

    cy.contains(
      'Número inválido! CNJ deve seguir o formato: 0000000-00.0000.0.00.0000',
    )
  })

  it('should be able to display an message when the process number is not in the API', () => {
    cy.searchByQuery('0000000-00.0000.0.00.0000')

    cy.location('pathname').should(
      'equal',
      '/process/0000000-00.0000.0.00.0000',
    )

    cy.contains('Processo não encontrado!')
  })
})
