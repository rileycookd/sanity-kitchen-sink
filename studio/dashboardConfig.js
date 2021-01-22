export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '600b5beb0b64234391dca1f9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dkknkobr',
                  apiId: 'c37104a6-8cce-4f06-83a6-ae0612270764'
                },
                {
                  buildHookId: '600b5beb0b64234d19dca141',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hn8eveai',
                  apiId: 'e10d1b1b-cc56-4bcc-97f0-9a2f573d745c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rileycookd/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hn8eveai.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
