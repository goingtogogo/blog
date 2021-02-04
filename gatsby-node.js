const {createFilePath} = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const date = new Date(node.frontmatter.date)
    const year = date.getFullYear()

    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    })
    createNodeField({node, name: 'year', value: year})
  }
}

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/posts/Page.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
