export function typedObjectEntries<T extends Object>(obj: T): [keyof T, any][] {
  return Object.entries(obj) as [keyof T, any][];
}
