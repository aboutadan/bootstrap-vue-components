# General Conventions

Apply these conventions to new code and to touched code when the improvement is local and low-risk. Do not churn stable legacy code just to make it conform.

## Code Style

- Prefer explicit over implicit. Name things for what they do, not how they do it.
- Keep functions at one level of abstraction. If a function grows past roughly 20-30 lines or mixes orchestration with low-level detail, question whether it should be split. Treat the number as a prompt, not a hard limit.
- Avoid deep nesting — extract early returns, guard clauses, or helper functions.
- `const` over `let` where the reference doesn't change (JS/TS).

## Naming

- Functions: verb phrases — `getUser`, `formatDate`, `isValid`
- Booleans: `is*`, `has*`, `can*`, `should*` — `isLoading`, `hasError`
- Event handlers: `on*` or `handle*` — `onSubmit`, `handleClick`
- Follow the naming conventions of the language and framework already in use. Reserve `UPPER_SNAKE_CASE` for true constants where that style is idiomatic.

## File Organisation

- One primary public export per file. Small private helpers that support that export are fine to colocate.
- Group related files by feature, not by type.
- Index files (`index.js`, `__init__.py`) for re-exporting only — no logic.
- Prefer dependencies to point inward: feature code can depend on shared utilities, but avoid casual imports across unrelated features. Extract genuinely shared code into a shared module instead of creating cross-feature coupling.

## Comments

- Comment _why_, not _what_. Code shows what; comments explain the decision.
- Remove commented-out code. Use git to recover it.
- TODO comments include a ticket or owner: `// TODO(PROJ-123): ...`

## Error Handling

- Handle errors at the boundary — HTTP handlers, job runners, CLI entry points, UI error boundaries, or other top-level async flows — not at every intermediate call.
- Never swallow exceptions silently. Log or re-raise.
- User-facing error messages are actionable: say what happened and what to do.

## Testing

- Test behavior that has meaningful branching logic, is easy to regress, or has caused bugs before.
- Keep tests close to the codebase conventions of the project. Prefer existing test layout and naming over introducing a new pattern.

## Async

- Prefer `async`/`await` over raw promise chains or callbacks when the language supports it.
- Always handle top-level async failures explicitly. Do not leave promise rejections or background task failures unobserved.

## API / HTTP

- Use consistent URL patterns: `/resource` (list), `/resource/:id` (item)
- Return consistent response shapes — success and error follow the same envelope
- 4xx for client errors, 5xx for server errors. Never 200 with an error body.
