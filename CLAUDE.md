## Project Index (cix)

<!-- cix:hash=a204d1be -->

Project ID: `9f0e263511f4`

cix indexes this codebase via a live MCP server (`cix-project-index`). Use cix
tools before reaching for `Read`/`Edit`/`Grep` when the question is symbol-,
structure-, or "does this already exist"-shaped.

**Hard rules**

- Before creating a new symbol, call `search_code`.
- Before creating a new file, call `check_convention`.
- Before writing any model, migration, or database query, call `get_schema`.

The full decision rule (when to use each cix tool) is injected at the start of
every session by the cix SessionStart hook, which reads the canonical tool list
from `cix.core.all_tool_defs()`. The rules always reflect the current shape of
cix; no duplicate copy lives in this file.

If the index is unavailable, say so explicitly rather than silently skipping it.
<!-- /cix -->
