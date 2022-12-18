export enum Languages {
  Spanish,
  English,
  Catalan,
}

export class Permissions {
  canActivate(): boolean {
    return true;
  }
}
