/**
 * Extension preparation point — WHERE EKOMS EXTENSIONS MOUNT.
 *
 * Phase 5: PREPARATION ONLY. This module is intentionally empty of any
 * extension implementation. EKOMS extension modules will be pulled in here
 * (or imported from a package) and call `registerExtension`/`registerSlot`
 * from `./registry` at module load.
 *
 * Client-build example (NOT implemented — reference only):
 *
 *   import { registerExtension, registerExtensionModule } from "./registry";
 *   import { extensionConfig } from "./config";
 *
 *   if (extensionConfig.analytics.ga_integration.measurementId) {
 *     registerExtension("ga_integration", () => <GAScript id={...} />);
 *   }
 *   if (extensionConfig.cart_checkout.cart_prototype.enabled) {
 *     registerExtension("cart_prototype", () => <CartProvider/>);
 *   }
 *   registerExtensionModule("content");
 *
 * Import this module once from the root layout:
 *   import "@/extensions/_prepare";
 */
export {};