const WORDPRESS_ENDPOINT = import.meta.env.WORDPRESS_GRAPHQL_ENDPOINT;

export async function wpQuery(query: string, variables?: Record<string, any>) {
  try {
    const response = await fetch(WORDPRESS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      throw new Error(`GraphQL Error: ${errors[0].message}`);
    }

    return data;
  } catch (error) {
    console.error('WordPress Query Error:', error);
    throw error;
  }
}

export async function getPosts(first: number = 10) {
  const query = `
    query GetPosts($first: Int!) {
      posts(first: $first) {
        nodes {
          id
          databaseId
          title
          excerpt
          slug
          uri
          date
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  return wpQuery(query, { first });
}

export async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        databaseId
        title
        content
        excerpt
        slug
        uri
        date
        author {
          node {
            name
          }
        }
      }
    }
  `;

  return wpQuery(query, { id: slug });
}

export async function getPages(first: number = 10) {
  const query = `
    query GetPages($first: Int!) {
      pages(first: $first) {
        nodes {
          id
          databaseId
          title
          slug
          uri
          content
        }
      }
    }
  `;

  return wpQuery(query, { first });
}

export async function getPageBySlug(slug: string) {
  const query = `
    query GetPageBySlug($id: ID!) {
      page(id: $id, idType: URI) {
        id
        databaseId
        title
        content
        slug
        uri
      }
    }
  `;

  return wpQuery(query, { id: `/${slug}/` });
}
