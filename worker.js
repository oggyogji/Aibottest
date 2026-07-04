export default {
  async fetch(request, env) {
    try {
      // 1. URL se user ka prompt nikalna (agar kuch nahi diya toh default use karega)
      const url = new URL(request.url);
      const userPrompt = url.searchParams.get('prompt') || "A beautiful sci-fi landscape, digital art, 4k";

      // 2. Us prompt ko AI model mein bhejna
      const response = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
        prompt: userPrompt
      });
      
      // 3. Image return karna
      return new Response(response, {
        headers: { 
          'content-type': 'image/png',
          'Access-Control-Allow-Origin': '*' // Ye aapki RelayChat site ko block hone se bachayega (CORS)
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
