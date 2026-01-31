interface User {
  id: string;
  name: string;
  city: string;
}

class UserService {
  private users: User[] = [
    { id: '2061', name: 'Тимур', city: 'Саранск' },
    { id: '7494', name: 'Роберт', city: 'Чебоксары' },
    { id: '5864', name: 'Илья', city: 'Майкоп' },
    { id: '9300', name: 'Мария', city: 'Ростов-на-Дону' },
    { id: '3756', name: 'Евгений', city: 'Краснодар' },
  ];

  getCurrentUser(id: string) {
    return this.users.find((user) => user.id === id);
  }
}

interface City {
  name: string;
  region: string;
}

class GeoService {
  private cities: City[] = [
    { name: 'Саранск', region: 'Республика Мордовия' },
    { name: 'Чебоксары', region: 'Республика Чувашия' },
    { name: 'Майкоп', region: 'Республика Адыгея' },
    { name: 'Ростов-на-Дону', region: 'Ростовская область' },
    { name: 'Краснодар', region: 'Краснодарский Край' },
  ];

  getCity(cityName: string) {
    return this.cities.find((city) => city.name === cityName);
  }
}

class Facade {
  constructor(
    private users: UserService,
    private geo: GeoService
  ) {}

  /* реализуйте метод getUserRegion */
  getUserRegion(userId: string): string | undefined {
    const user = this.users.getCurrentUser(userId);
    if (!user) {
      return undefined;
    }
    const city = this.geo.getCity(user.city);
    return city ? city.region : undefined;
  }
}

const facade = new Facade(new UserService(), new GeoService());

console.log(facade.getUserRegion('5864'));
