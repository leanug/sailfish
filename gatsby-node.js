const path = require('path') // full path required path.resolve en createpage

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      portfolio: allMdx(filter: {frontmatter: {type: {in: "portfolio"}}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  
  // Todo nodejs stuff no entido nada
  // Esto genera de una todas las pagians programaticamente enviando al slug a post-templates,
  // eligiendo el post con el slug pasado.
  result.data.portfolio.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/portfolio/${slug}`,
      component: path.resolve(`src/templates/portfolio-template.js`),
      context: {
        slug,
      },
    })
  })
}
