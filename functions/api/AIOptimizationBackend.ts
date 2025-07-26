import { validateRequest } from './validateRequest';
import { optimizeResume } from './optimizeResume';

export async function AIOptimizationBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const requestBody = await req.json();
    const validationError = validateRequest(requestBody);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400 });
    }

    const optimizedResume = await optimizeResume(requestBody);
    return new Response(JSON.stringify({ success: true, data: optimizedResume }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500 });
  }
}
