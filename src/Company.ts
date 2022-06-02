import { randCompanyName, randZipCode } from '@ngneat/falso'

export class Company {
  companyName: string
  location: {
    zipCode: number
  }

  constructor() {
    this.companyName = randCompanyName()
    this.location = {
      zipCode: parseFloat(randZipCode()),
    }
  }
}
