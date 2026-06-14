import prompts from '../../../data/scraped_prompts.json';

export async function getStaticPaths() {
  return prompts.map((item) => ({
    params: { slug: item.slug },
    props: { prompt: item }
  }));
}

export async function GET({ props }) {
  return new Response(JSON.stringify(props.prompt), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
