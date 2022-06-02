import { randUser, randLongitude, randLatitude } from '@ngneat/falso'

import { faker } from '@faker-js/faker'

export class User {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = randUser().firstName

    this.location = {
      lat: randLatitude(),
      lng: randLongitude(),
    }
  }
}

const myHouse = faker.address.latitude
