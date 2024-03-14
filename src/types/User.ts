export type userType = {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image?: string,
    bloodGroup: string,
    height?: number,
    weight?: number,
    eyeColor?: string,
    hair: hair,
    domain: string,
    ip: string,
    address: address,
    macAddress: string,
    university: string,
    bank: bank,
    company: company,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: cryptoType
  
  }
  
 
  
  type hair = {
    color: string,
    type: string,
  }
  
  type address = {
    address: string,
    city: string,
    coordinates: {
      lat: number,
      lng: number
    }
    postalCode: string,
    state: string
  }
  
  type bank = {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string,
  }
  type company = {
    address: address,
    department: string,
    name: string,
    title: string,
  
  }
  type cryptoType = {
    coin: string,
    wallet: string,
    network: string,
  }