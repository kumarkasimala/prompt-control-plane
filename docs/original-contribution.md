# Original Contribution Framing

This repository proposes a public, vendor-neutral pattern for treating prompts as governed runtime objects in enterprise AI systems.

## Problem

Enterprise LLM systems often treat prompts as text assets. That is too weak for production use. The prompt also controls context access, data grounding, tool use, output format, escalation, model routing, security boundaries, and observability.

## Contribution

The contribution is a structured prompt runtime object that combines:

- versioned prompt templates,
- typed and trust-labeled inputs,
- grounding and citation requirements,
- allowed tools and policy gates,
- output contracts,
- prompt injection boundaries,
- telemetry attributes,
- evaluation cases.

## Why It Matters

This turns prompt engineering into software architecture. It makes prompt-driven behavior easier to review, test, observe, govern, and reuse across enterprise AI workflows.

## Public Artifacts in This Repository

- JSON schema for prompt runtime objects.
- CRM support example showing trusted and untrusted context boundaries.
- Promptfoo evaluation config for regression testing.
- Architecture diagram and design notes.

