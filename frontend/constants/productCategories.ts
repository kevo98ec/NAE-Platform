export const PRODUCT_CATEGORIES = {
    FOOTBALL: "football",
    SNEAKERS: "sneakers",
    RUNNING: "running",
    CLOTHING: "clothing",
} as const;


export type ProductCategory =
    (typeof PRODUCT_CATEGORIES)[keyof typeof PRODUCT_CATEGORIES];