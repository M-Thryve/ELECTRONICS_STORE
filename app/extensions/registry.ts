/**
 * Extension registry — integration points for EKOMS extensions.
 *
 * Phase 5: PREPARATION ONLY. No extensions are registered by default.
 * EKOMS extension modules call `registerSlot()` (or `registerExtension()`)
 * at module load to mount a renderer into a named slot.
 *
 * The registry is module-scoped and safe for both Server and Client
 * Components. Unregistered slots render `null`.
 */
import type { ExtensionHook, SlotName, SlotRenderer } from "./types";

const slots = new Map<SlotName, SlotRenderer>();
const hooks = new Map<ExtensionHook, SlotRenderer>();
const extensions = new Set<string>();

/** Mount a renderer into a layout/page slot. Returns an unregister fn. */
export function registerSlot(slot: SlotName, renderer: SlotRenderer): () => void {
  slots.set(slot, renderer);
  return () => {
    if (slots.get(slot) === renderer) slots.delete(slot);
  };
}

/** Mount a renderer to a hook (extension point). Returns an unregister fn. */
export function registerExtension(hook: ExtensionHook, renderer: SlotRenderer): () => void {
  hooks.set(hook, renderer);
  return () => {
    if (hooks.get(hook) === renderer) hooks.delete(hook);
  };
}

/** Mark an extension module as loaded (idempotent). */
export function registerExtensionModule(name: string): void {
  extensions.add(name);
}

/** Read a registered slot renderer (or null when not registered). */
export function getSlotRenderer(slot: SlotName): SlotRenderer {
  return slots.get(slot) ?? null;
}

/** Read a registered hook renderer (or null when not registered). */
export function getHookRenderer(hook: ExtensionHook): SlotRenderer {
  return hooks.get(hook) ?? null;
}

/** Names of extension modules loaded so far. */
export function loadedExtensions(): string[] {
  return [...extensions];
}

/** True when a slot has a registered renderer. */
export function isSlotRegistered(slot: SlotName): boolean {
  return slots.has(slot);
}

/** True when a hook has a registered renderer. */
export function isHookRegistered(hook: ExtensionHook): boolean {
  return hooks.has(hook);
}