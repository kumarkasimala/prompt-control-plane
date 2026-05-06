# Architecture

The prompt control plane separates business intent, enterprise context, model execution, guardrails, and observability into explicit runtime objects.

```mermaid
flowchart LR
  A[User or System Intent] --> B[Prompt Runtime Object]
  B --> C[Context Builder]
  C --> D[Grounding Resolver]
  D --> E[Policy and Guardrail Gate]
  E --> F[Model Router]
  F --> G[LLM or Agent Runtime]
  G --> H[Output Contract Validator]
  H --> I[Business Response]
  H --> J[Telemetry and Evals]
  J --> B
```

## Runtime Layers

| Layer | Responsibility |
| --- | --- |
| Prompt template | Versioned instructions and business intent |
| Context builder | Runtime data assembly from trusted systems |
| Grounding resolver | Retrieval, citations, and source constraints |
| Policy gate | Allowed tools, guardrails, escalation rules |
| Model router | Provider selection, fallback, cost/performance constraints |
| Output validator | Structured output, safety checks, schema validation |
| Telemetry envelope | Trace attributes, prompt version, source IDs, tool calls, eval results |

## Design Principle

Prompts in enterprise systems are not isolated strings. They are operational control objects that define how AI systems access context, call tools, route to models, satisfy policy, and produce auditable outputs.

