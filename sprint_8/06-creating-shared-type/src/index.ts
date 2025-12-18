type User = {
  name: string;
  age?: number;
  contacts?: Contacts;
}

type Contacts = {
  phone: string;
}

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

type Skywalker = {
  type: "jedi" | "sith";
  name: string;
  father: string | null;
  isDark?: boolean;
}

const Luke: Skywalker = {
	type: "jedi",
	name: "Luke",
	father: "Anakin"
}

const Wader: Skywalker = {
	type: "sith",
	name: "Wader",
	father: null,
	isDark: true
}
