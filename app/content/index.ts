/**
 * Content barrel — single import point for all template content objects.
 *
 * Each object mirrors the destination format from template.content.mapping.json
 * (`<PagePascalCase>.<SectionPascalCase>.<field>`), so intake data can be
 * validated and injected field-by-field.
 */
export * from "./assets";
export * from "./site";
export * from "./home";
export * from "./shop";
export * from "./product";
export * from "./collections";
export * from "./cart";
export * from "./support";
export * from "./account";
export * from "./misc";