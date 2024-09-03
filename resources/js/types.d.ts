interface Menu {
  id: string;
  name: string;
  parent_id?: string | null;
  depth: number;
  children: Menu[];
  created_at?: string;
  updated_at?: string;
}
