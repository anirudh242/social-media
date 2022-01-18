export interface userInterface {
  userId: number | null;
  iat: number | null;
  exp: number | null;
}

export interface postInterface {
  id: number | null;
  title: string | null;
  content: string | null;
  userId: number | null;
}
