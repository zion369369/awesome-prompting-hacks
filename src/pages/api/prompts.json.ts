import prompts from '../../data/scraped_prompts.json';

export async function GET() {
  return new Response(JSON.stringify(prompts), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
