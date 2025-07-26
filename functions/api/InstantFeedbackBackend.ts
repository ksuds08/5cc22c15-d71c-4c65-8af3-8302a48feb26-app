export async function InstantFeedbackBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    }

    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "Invalid content type" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const body = await req.json();
    const { resumeContent } = body;

    if (typeof resumeContent !== "string" || resumeContent.trim() === "") {
      return new Response(JSON.stringify({ error: "Invalid resume content" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const feedback = getFeedbackOnResume(resumeContent);
    return new Response(JSON.stringify({ feedback }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

function getFeedbackOnResume(resumeContent: string): { keywordUsage: string; structureFeedback: string } {
  const keywordUsage = evaluateKeywords(resumeContent);
  const structureFeedback = evaluateStructure(resumeContent);
  return { keywordUsage, structureFeedback };
}

function evaluateKeywords(content: string): string {
  // Placeholder logic for evaluating keyword usage
  return "Good use of industry-specific keywords.";
}

function evaluateStructure(content: string): string {
  // Placeholder logic for evaluating resume structure
  return "The structure is well-organized and clear.";
}
