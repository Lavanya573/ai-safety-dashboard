export type Severity = 'low' | 'medium' | 'high'

export interface Incident {
  id: string
  title: string
  description: string
  severity: Severity
  reportedDate: string
}

export type SortOrder = 'newest' | 'oldest'; 