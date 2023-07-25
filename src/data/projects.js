const data = [
  {
    id: '1',
    title: 'OrderMe',
    description:
      'OrderMe represent a web application based on PHP made with CakePhp that organizes the orders placed by customers in the restaurant.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671564532/portfolio/projects/Syntho/Screenshot_2022-12-20_at_21.26.17_1_c59hzo.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://orderme.caiupi.com/',
      repo: 'https://github.com/caiupi/orderme/tree/main',
    },
    technologies: [
      '#Php',
      '#CakePHP',
      '#MySQL',
      '#UnitTest',
      '#PHPUnit',
      '#LaTeX',
      '#Code coverage',
      '#Composer',
    ],
  },
  {
    id: '2',
    title: 'Quantitative Analysis',
    description:
      'Quantitative Analysis -  The project aims to model and evaluate the performances of a railway line.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671563302/portfolio/projects/minfin/Screenshot_2022-12-20_at_21.06.43_vl5h6k.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/caiupi/QuantitativeAnalysisOfSystem/tree/main',
      repo: 'https://github.com/caiupi/QuantitativeAnalysisOfSystem/tree/main',
    },
    technologies: [
      '#Quantitative Analysis',
      '#Mobius',
      '#SAN',
      '#Matlab',
      '#LaTeX',
    ],
  },
  {
    id: '3',
    title: 'Gym database',
    description:
      'The analysis and implementation of a database are necessary for the management of a gym.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671562261/portfolio/projects/fashion/Screenshot_2022-12-20_at_20.45.27_peyqly.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/caiupi/sistemi-informativi',
      repo: 'https://github.com/caiupi/sistemi-informativi',
    },
    technologies: [
      '#MySQL',
      '#data analyst',
      '#E-R',
      '#SQL trigger',
      '#view',
    ],
  },
  /*{
    id: '4',
    title: 'Apiko Marketplace',
    description:
      'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
      repo: 'https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk',
    },
    technologies: [
      '#react',
      '#redux',
      '#socket.io',
      '#scss',
      '#formik',
      '#react-window',
      '#restapi',
    ],
  },
  {
    id: '5',
    title: 'Places App',
    description:
      'A MERN app to let users share their experience of places along with Details. It is user friendly and can be useful to many others.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://yourplaces-sv.netlify.app/',
      repo: 'https://github.com/vsnaichuk/MERN-places',
    },
    technologies: [
      '#react',
      '#nodejs',
      '#express',
      '#mongodb',
      '#react-query',
      '#react-transition-group',
      '#mongoose',
      '#jwt',
      '#aws',
    ],
  },
  {
    id: '6',
    title: 'eCommerce Mobile App',
    description:
      'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://expo.dev/@v_snaichuk/online-shop-app',
      repo: 'https://github.com/vsnaichuk/RN-shop',
    },
    technologies: [
      '#react-native',
      'expo',
      '#redux',
      '#redux-toolkit',
      '#react-navigation',
      '#nodejs',
      '#express',
      '#mongodb',
    ],
  },
  {
    id: '7',
    title: 'Places Mobile App',
    description:
      'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://expo.dev/@v_snaichuk/rn-places',
      repo: 'https://github.com/vsnaichuk/RN-places',
    },
    technologies: [
      '#react-native',
      '#typescript',
      '#expo',
      '#mobx',
      '#sqlite',
      '#react-native-maps',
      '#expo-location',
    ],
  },
  {
    id: '8',
    title: 'Shopping Cart',
    description:
      'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://shopping-cart-sv.netlify.app/',
      repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
    },
    technologies: [
      '#react',
      '#typescript',
      '#material-ui',
      '#styled-components',
      '#swr',
      '#fakestoreapi',
    ],
  },*/
];

export default data;
