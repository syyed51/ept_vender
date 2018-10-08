const dev = {
  API_HOST: window.API_URL,
  API_ERROR_LOG_ENPOINT: 'http://localhost:4200/errors/log',
};

const prod = {
  API_HOST: window.API_URL,
  API_ERROR_LOG_ENPOINT: '/errors/log',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  HELP_MENU_ITEM_URL: 'https://beta.danicapension.dk/privat/find-hjaelp',
  API_PATHS: {
    COVER_ON_DEATH: `${config.API_HOST}/cover-on-death`,
  },
  ...config,
};
