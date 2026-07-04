export default {
  async fetch(request, env) {
    try {
      const response = await env.AI.run('@cf/google/nano-banana-2-lite', {
        prompt: "A beautiful sci-fi landscape, digital art, 4k",
        aspect_ratio: "1:1"
      });
      
      return new Response(JSON.stringify(response), {
        headers: { 
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.toString() }), { 
        status: 500,
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
}
