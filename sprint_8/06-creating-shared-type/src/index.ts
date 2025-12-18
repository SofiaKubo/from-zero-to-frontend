const firstUser: User = {
	name: "alex",
	age: 34
}

const secondUser: User = {
	name: "mary",
	contacts: {
		phone: "123321"
	}
}

type User = {
  name: string;
  age?: number;
  contacts?: Contact;
}

type Contact = {
  phone: string;
}
