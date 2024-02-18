interface MediumArticle {
  id: string;
  title: string;
  content: string;
  // Add more properties as needed
}

async function fetchMediumArticles(
  username: string,
  accessToken: string
): Promise<MediumArticle[]> {
  const response = await fetch(
    `https://api.medium.com/v1/users/${username}/posts`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Medium articles');
  }

  const data = await response.json();
  const articles: MediumArticle[] = data.payload.references.Post.map(
    (postId: string) => data.payload.Post[postId]
  );

  return articles;
}

async function fetchMediumData(url: string, accessToken: string) {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Charset': 'utf-8',
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Medium data');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching Medium data:', error);
    throw error;
  }
}

// Usage example:
const username = 'your_username';
const accessToken = 'your_access_token';

fetchMediumArticles(username, accessToken)
  .then((articles) => {
    // Process the fetched articles and display them in your application
    console.log(articles);
  })
  .catch((error) => {
    console.error('Error fetching Medium articles:', error);
  });
