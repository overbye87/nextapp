import Cookies from 'js-cookie';

class CookieItem<D> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get(): D | undefined {
    const data = Cookies.get(this.name);
    if (!data) {
      return undefined;
    }
    try {
      const parsedData = JSON.parse(data) as D;
      return parsedData;
    } catch (err) {
      return undefined;
    }
  }

  set(data: D) {
    Cookies.set(
      this.name,
      JSON.stringify(data),
      { expires: 1 },
    );
  }

  remove() {
    Cookies.remove(this.name);
  }
}

const cookies = {
  token: new CookieItem<string>('token'),
  isAuth: new CookieItem<boolean>('isAuth'),
};

export default cookies;
