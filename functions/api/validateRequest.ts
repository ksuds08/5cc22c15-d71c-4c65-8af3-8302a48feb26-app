export function validateRequest(body: any): string | null {
  if (!body || typeof body !== 'object') {
    return 'Invalid request body';
  }

  const { careerDetails, preferences, industry } = body;
  if (!careerDetails || typeof careerDetails !== 'string') {
    return 'Missing or invalid career details';
  }
  if (!preferences || typeof preferences !== 'object') {
    return 'Missing or invalid preferences';
  }
  if (!industry || typeof industry !== 'string') {
    return 'Missing or invalid industry';
  }

  return null;
}
