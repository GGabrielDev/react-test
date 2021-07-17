const size = {
  desktopXXL: '3840px',
  desktopXL: '2560px',
  desktopL: '1920px',
  desktopM: '1440px',
  desktopS: '1024px',
  tablet: '768px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px',
};

export const device = {
  desktopXXL: `(min-width: ${size.desktopXXL})`,
  desktopXL: `(min-width: ${size.desktopXL}) and (max-width: 3839px)`,
  desktopL: `(min-width: ${size.desktopL}) and (max-width: 2559px)`,
  desktopM: `(min-width: ${size.desktopM}) and (max-width: 1919px)`,
  desktopS: `(min-width: ${size.desktopS}) and (max-width: 1439px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 1023px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 767px)`,
  mobileM: `(min-width: ${size.mobileM}) and (max-width: 454px)`,
  mobileS: `(min-width: ${size.mobileS}) and (max-width: 374px)`,
};
