export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc6f5714b9e27a248d30d22',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3nupfjtx',
                  apiId: '3a65a00a-f21d-42fa-975b-498a35654715'
                },
                {
                  buildHookId: '5fc6f572a51aabbfa32bf3b9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gh7mhamj',
                  apiId: '2fd05473-4538-4865-96d1-3a2f8edbe0e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexRogalskiy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gh7mhamj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
