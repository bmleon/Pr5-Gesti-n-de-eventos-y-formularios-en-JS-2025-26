export interface Reservation {
  name: string
  nif: string
  phone: string
  email: string
  eventType: string
  eventDate: string
  eventTime: string
  attendees: number
  catering: string[]
  budget: string
  comments: string
  termsAccepted: boolean
}
