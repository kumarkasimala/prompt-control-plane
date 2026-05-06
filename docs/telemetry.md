# Prompt Runtime Telemetry

Prompt runtime telemetry should make prompt-driven behavior auditable without exposing sensitive content.

## Suggested Attributes

| Attribute | Meaning |
| --- | --- |
| `prompt.template.id` | Stable prompt template identifier |
| `prompt.template.version` | Semantic version of the prompt runtime object |
| `prompt.intent` | Approved business purpose |
| `prompt.grounding.sources` | Source classes used for grounding |
| `prompt.output.contract` | Output format or schema name |
| `prompt.guardrail.results` | Guardrail names and pass/fail results |
| `prompt.tool.calls` | Tool names invoked by the model or runtime |
| `prompt.injection_boundary.enabled` | Whether untrusted data was isolated from instructions |
| `prompt.escalation.triggered` | Whether human review or workflow escalation occurred |

## Redaction Rule

Telemetry should record identifiers, versions, source classes, and policy outcomes. It should not record raw customer data, secrets, PII, or full untrusted user text unless explicitly approved by policy.

