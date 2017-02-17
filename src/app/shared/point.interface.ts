export interface Point {
  location: {
    lat: number,
    lng: number
  },
  id: number,
  description?: string,
  title?:string
}