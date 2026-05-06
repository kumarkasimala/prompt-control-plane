# Enterprise Prompt Runtime Architecture

Reference architecture for treating prompts, context, tools, guardrails, model routing, evaluation, and observability as production software infrastructure.

## Why This Exists

Enterprise AI systems often start with prompts as free-form text. At production scale, those prompts become operational control logic: they define behavior, constraints, tool usage, output contracts, grounding, safety checks, and escalation paths.

This project provides a public, vendor-neutral framework for managing prompts as programmable runtime objects in enterprise AI systems.

## Architecture

```text
User / System Intent
        |
        v
Prompt Runtime Control Layer
  - prompt templates
  - lifecycle events
  - context builders
  - runtime data resolution
  - grounding sources
  - policy constraints
  - model routing
  - tool contracts
  - evaluation suites
  - observability metadata
        |
        v
AI Execution Plane
  - LLM provider
  - retrieval tools
  - function calls
  - agent runtime
  - output validation
        |
        v
Response + telemetry + feedback loop
```

## Core Concepts

- `PromptTemplate`: versioned instruction object with variables, constraints, and metadata.
- `ContextBuilder`: resolves runtime data from CRM, knowledge, documents, or APIs.
- `GroundingResolver`: maps prompt variables to trusted enterprise data and retrieval results.
- `ExecutionPolicy`: defines allowed tools, models, safety checks, and escalation rules.
- `LifecycleHook`: validates, enriches, transforms, or audits prompt execution before and after model calls.
- `EvaluationSuite`: regression tests for accuracy, factuality, safety, format, and latency.
- `TelemetryEnvelope`: captures prompt version, context source, tool calls, model, cost, latency, and output quality signals.
- `InjectionBoundary`: separates trusted instructions from untrusted user or enterprise data.

## Repository Contents

- [Architecture](./docs/architecture.md)
- [Original contribution framing](./docs/original-contribution.md)
- [Prompt runtime telemetry](./docs/telemetry.md)
- [Prompt runtime JSON schema](./schemas/prompt-runtime.schema.json)
- [CRM support example](./examples/crm-support/templates/case-summary.prompt.json)
- [Promptfoo eval config](./examples/crm-support/evals/promptfoo.yaml)

## Example Use Case

The CRM support example demonstrates a governed prompt runtime object that:

- labels trusted enterprise data and untrusted customer text,
- requires CRM and knowledge-base grounding,
- defines a structured JSON output contract,
- blocks prompt injection attempts,
- records telemetry attributes without exposing raw customer data.

## Validate Examples

```bash
npm run validate:json
```

## Next Work

- Add a small TypeScript validator.
- Add OpenTelemetry span examples.
- Add a LangGraph governed workflow example.
- Add a LiteLLM routing policy example.

## License

MIT
