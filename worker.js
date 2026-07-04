export default {
  async fetch(request, env) {
    try {
      // Cloudflare ka asli Stable Diffusion image model
      const response = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
        prompt: "A beautiful sci-fi landscape, digital art, 4k"
      });
      
      // Direct image format mein response return karega
      return new Response(response, {
        headers: { 
          'content-type': 'image/png',
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
