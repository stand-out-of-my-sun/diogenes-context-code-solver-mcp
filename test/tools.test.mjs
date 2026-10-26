import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, "../tools_manifest.json");
const tools = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const toolMap = new Map(tools.map(t => [t.name, t]));

test("Manifest Integrity: context-code-solver declares exactly 15 tools", () => {
  assert.equal(tools.length, 15, "Tool count must match manifest");
});

test("Audit tool schema & hints: prune_context_skeleton", () => {
  const tool = toolMap.get("prune_context_skeleton");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: plan_context_token_budget", () => {
  const tool = toolMap.get("plan_context_token_budget");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: rerank_hybrid_rag_chunks", () => {
  const tool = toolMap.get("rerank_hybrid_rag_chunks");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: apply_fuzzy_code_patch", () => {
  const tool = toolMap.get("apply_fuzzy_code_patch");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: analyze_ast_symbol_graph", () => {
  const tool = toolMap.get("analyze_ast_symbol_graph");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: audit_module_dependency_cycles", () => {
  const tool = toolMap.get("audit_module_dependency_cycles");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: isolate_stacktrace_root_cause", () => {
  const tool = toolMap.get("isolate_stacktrace_root_cause");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: compile_polyglot_type_schemas", () => {
  const tool = toolMap.get("compile_polyglot_type_schemas");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: evaluate_deterministic_math", () => {
  const tool = toolMap.get("evaluate_deterministic_math");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: schedule_critical_path_tasks", () => {
  const tool = toolMap.get("schedule_critical_path_tasks");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: evaluate_ab_statistical_significance", () => {
  const tool = toolMap.get("evaluate_ab_statistical_significance");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: detect_openapi_breaking_changes", () => {
  const tool = toolMap.get("detect_openapi_breaking_changes");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: generate_boundary_test_vectors", () => {
  const tool = toolMap.get("generate_boundary_test_vectors");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: simulate_monte_carlo_risk", () => {
  const tool = toolMap.get("simulate_monte_carlo_risk");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: diff_agent_memory_checkpoint", () => {
  const tool = toolMap.get("diff_agent_memory_checkpoint");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

