export interface dictType {
  nav: {
    logo: string;
    menu: string;
    about: string;
    contact: string;
    login: string;
    langBtn: string;
    logout: string;
    profile: string;
    admin: string;
  };

  hero: {
    title: string;
    decription: string;
    btn1: string;
    btn2: string;
  };

  bestSellers: {
    title: string;
    decription: string;
  };

  about: {
    title: string;
    decription: string;

    h3: string;
    h1: string;
    h2: string;

    p: string;
    btn1: string;
    btn2: string;

    features: {
      title: string;
      text: string;
    }[];

    mission: {
      title: string;
      p: string;
      point1: string;
      subtitle1: string;
      point2: string;
      subtitle2: string;
    };

    chefs: {
      title: string;
    };

    testmonials: {
      title: string;
      say: {
        id: string;
        p: string;
        footer: string;
      }[];
    };

    cta: {
      title: string;
      p: string;
      btn1: string;
      btn2: string;
    };
  };

  contact: {
    title: string;
    description: string;
    getTouch: string;
    phone: string;
    mail: string;
    address: string;

    formTitle: string;
    name: string;
    email: string;
    msg: string;
    btn: string;
  };

  login: {
    title: string;
    data: {
      label: string;
      name: string;
      type: string;
      placeholder: string;
    }[];
    p: string;
    span: string;
    btn: string;
  };

  register: {
    title: string;
    data: {
      label: string;
      name: string;
      placeholder: string;
    }[];
    p: string;
    span: string;
    btn: string;
  };
  profileForm:any,
  adminForm:any


  validations: {
    emailRequired: string;
    nameRequired: string;
    passwordRequired: string;
    emailValid: string;
    passwordValid: string;
    nameValid: string;
    confirmPassword: string;
    smallPassword: string;
    nameMin: string;
    confirmPasswordRequired: string;
    passwordMismatch: string;
  };
}
