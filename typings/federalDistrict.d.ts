interface IFederalDistrict {
  id: number
  nome: string
  sigla: string
}

interface ICityOptions {
  id: number
  nome: string
}

interface ICity {
  distance: number
  name: string
  instructions: string
  id: string
  isActive: boolean
  address: {
    postalCode: string
    country: any
    city: string
    state: string
    neighborhood: string
    street: string
    number?: string
    complement?: string
    reference: string
    location: {
      latitude: number
      longitude: number
    }
  }
  pickupHolidays: Array<any>
  businessHours: Array<{
    dayOfWeek: number
    openingTime: string
    closingTime: string
  }>
}