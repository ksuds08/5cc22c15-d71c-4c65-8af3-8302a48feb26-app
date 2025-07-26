export async function TemplateCustomizationBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), { status: 415, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await req.json();
    const validationError = validateTemplateCustomizationInput(data);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Placeholder for AI processing and template customization logic.
    const customizedTemplate = {
      message: 'Template customized successfully',
      templateId: 'example-template-id',
      userInputs: data
    };

    return new Response(JSON.stringify(customizedTemplate), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

interface TemplateCustomizationInput {
  name: string;
  email: string;
  careerDetails: string;
  preferences: string;
  industry: string;
}

function validateTemplateCustomizationInput(data: any): string | null {
  if (typeof data !== 'object' || data === null) {
    return 'Invalid input';
  }

  const { name, email, careerDetails, preferences, industry } = data as TemplateCustomizationInput;

  if (!name || typeof name !== 'string') {
    return 'Name is required and must be a string';
  }

  if (!email || typeof email !== 'string' || !validateEmail(email)) {
    return 'Valid email is required';
  }

  if (!careerDetails || typeof careerDetails !== 'string') {
    return 'Career details are required and must be a string';
  }

  if (!preferences || typeof preferences !== 'string') {
    return 'Preferences are required and must be a string';
  }

  if (!industry || typeof industry !== 'string') {
    return 'Industry is required and must be a string';
  }

  return null;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}
