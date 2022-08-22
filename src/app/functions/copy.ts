export const copy = (value: any) => value ? JSON.parse(JSON.stringify(value)) : value;
