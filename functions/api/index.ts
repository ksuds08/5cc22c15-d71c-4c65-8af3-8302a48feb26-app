// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { TemplateCustomizationBackendHandler } from './TemplateCustomizationBackend';
import { AIOptimizationBackendHandler } from './AIOptimizationBackend';
import { IndustrySpecificDesignsBackendHandler } from './IndustrySpecificDesignsBackend';
import { InstantFeedbackBackendHandler } from './InstantFeedbackBackend';
import { ResumeDownloadBackendHandler } from './ResumeDownloadBackend';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/TemplateCustomizationBackend") return TemplateCustomizationBackendHandler(request);
  if (path === "/api/AIOptimizationBackend") return AIOptimizationBackendHandler(request);
  if (path === "/api/IndustrySpecificDesignsBackend") return IndustrySpecificDesignsBackendHandler(request);
  if (path === "/api/InstantFeedbackBackend") return InstantFeedbackBackendHandler(request);
  if (path === "/api/ResumeDownloadBackend") return ResumeDownloadBackendHandler(request);

  return new Response("Not found", { status: 404 });
}
