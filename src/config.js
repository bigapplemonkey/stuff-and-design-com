const config = {
  STYLES: {
    APP_BLUE: '#0018DF',
    APP_WHITE: '#FFFFFF',
    MOBILE_BREAK_POINT: 640,
    TABLET_BREAK_POINT: 992,
    DESKTOP_BREAK_POINT: 1040,
    LARGE_BREAK_POINT: 1200,
    BORDER_WIDTH: '0.0625rem',
  },

  ANIMATION: {
    FILTER_BUTTON_DURATION: 0.3,
    CUBIC_BEZIER: [0.24, 0.75, 0.34, 0.96],
  },
  NAV_LINKS: [
    { name: 'Home', to: '/', openInNewTab: false, isDisabled: false },
    { name: 'Work', to: '/', openInNewTab: false, isDisabled: true },
    { name: 'About', to: '/', openInNewTab: false, isDisabled: true },
    { name: 'Contact', to: '/', openInNewTab: false, isDisabled: true },
  ],
};

export const { STYLES, ANIMATION, NAV_LINKS } = config;
