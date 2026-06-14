import prompts from '../../data/scraped_prompts.json';

export async function GET() {
  const indexData = prompts.map(({ title, slug, category, tags }) => ({
    title,
    slug,
    category,
    tags,
    url: `https://zion369369.github.io/awesome-prompting-hacks/prompts/${slug}`
  }));

  return new Response(JSON.stringify(indexData), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
