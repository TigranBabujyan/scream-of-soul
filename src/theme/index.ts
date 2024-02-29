// There is a lot to fix and delete

import {brandColor} from "./brand";


const COLOR__BRAND_PRIMARY = brandColor.colors.primary;
const COLOR__BRAND_PRIMARY_HOVER = brandColor.colors.primaryHover;
const COLOR__BRAND_SECONDARY = brandColor.colors.secondary;
const COLOR__BRAND_SECONDARY_HOVER = brandColor.colors.secondaryhover;
const COLOR__BRAND_OUTLINE = brandColor.colors.outline;
const COLOR__BRAND_OUTLINE_BGR = brandColor.colors.outlineBackground;
const COLOR__TEXT_MAIN_DARK = brandColor.colors.mainTextDark;


export const themesOptions:any = {
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            sm: 576, // old 750
            md: 768, // old 960
            lg: 992, // old 1440
            xl: 1200, // old 1632
        },
    },
    props: {
        MuiButton: {
            disableFocusRipple: true,
        },
    },
    typography: {
        htmlFontSize: 10,
        fontSize: 16,
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '2rem',
                textTransform: 'unset',
                backgroundColor: 'white',
                boxShadow: ' 0px 2px 8px rgba(0, 0, 0, 0.102)',
                padding: '0.6rem 1.2rem',
                whiteSpace: 'nowrap',
                minWidth: '4.4rem',
                fontSize: '1.7rem',
                fontWeight: 'bold',
                '&.Mui-selected': {
                    color: 'white',
                    backgroundColor: COLOR__BRAND_PRIMARY,
                },
                '&:hover': {
                    backgroundColor: COLOR__BRAND_PRIMARY_HOVER
                },
                '&:focus': {
                    backgroundColor: COLOR__BRAND_OUTLINE
                }
            },
            containedSizeSmall:{
                padding: '1.2rem 1.6rem',
                fontWeight: 600,
                fontSize: '1.6rem',
                lineHeight: '2rem',
                maxHeight: '4.4rem',
            },
            containedSizeMedium:{
                padding: '1.6rem 2.4rem',
                fontWeight: 'bold',
                fontSize: '1.6rem',
                lineHeight: '1.9rem',
            },
            containedSizeLarge:{
                height: '6.4rem',
                maxHeight: '6.4rem',
                padding: '0 2rem',
                fontSize: 'clamp(1.6rem, 5vw, 2rem)',
            },
            containedPrimary:{
                fontWeight: 700,
                fontSize: '2rem',
                minWidth: '120px',
                height: '56px',
                maxHeight: '56px',
                borderRadius: '4rem',
                transition: 'background-color 0.25s ease-in-out',
                boxShadow: `0 0 0 .8rem rgb(0 0 0 / 0%)`,
                '&:hover':{
                    backgroundColor: COLOR__BRAND_PRIMARY_HOVER,
                    boxShadow: `0 0 0 .8rem rgb(0 0 0 / 0%)`,
                },
                '&:focus':{
                    boxShadow: `0 0 0 .8rem ${COLOR__BRAND_PRIMARY}1a`, //1a = 10% alpha
                    backgroundColor: COLOR__BRAND_PRIMARY,
                    width: `calc(100%-0.8rem)`,
                }
            },
            containedSecondary:{
                color: COLOR__BRAND_PRIMARY,
                fontWeight: 700,
                fontSize: '1rem',
                minWidth: '120px',
                height: '56px',
                maxHeight: '56px',
                borderRadius: '4rem',
                transition: 'all 0.25s ease-in-out',
                boxShadow: `inset 0 0 0 2px ${COLOR__BRAND_PRIMARY}, 0 0 0 .8rem rgb(0 0 0 / 0%)`,
                '&:hover':{
                    backgroundColor: COLOR__BRAND_SECONDARY_HOVER,
                    boxShadow: `inset 0 0 0 2px ${COLOR__BRAND_PRIMARY}, 0 0 0 .8rem rgb(0 0 0 / 0%)`,
                },
                '&:focus':{
                    boxShadow: `inset 0 0 0 2px${COLOR__BRAND_PRIMARY}, 0 0 0 .8rem ${COLOR__BRAND_PRIMARY}1a` //1a = 10% alpha
                }
            },
            textSecondary:{
                color: '#1A202C',
                boxShadow: 'none',
                padding: 0,
                backgroundColor: 'transparent!important',
                //backgroundColor: 'transparent!important',
                '&hover':{
                    backgroundColor: 'transparent!important',
                },
                '&focus':{
                    backgroundColor: 'transparent!important',
                }
            },
            textPrimary:{
                boxShadow: 'none',
                padding: 0,
                '&:hover':{
                    color: '#036016',
                    backgroundColor: 'transparent',
                },
                '&:focus':{
                    color: '#036016',
                    backgroundColor: 'transparent',
                },
            },
            outlinedSizeSmall:{
                width: '100%',
                height: '4rem',
                maxHeight: '4rem',
                fontWeight: 600,
                fontSize: '14px',
                padding: '0 1.6rem',
                color: `${COLOR__BRAND_PRIMARY}`,
                border: `2px solid ${COLOR__BRAND_PRIMARY}`,
                boxShadow: 'none',
                '&:hover':{
                    border: `2px solid ${COLOR__BRAND_PRIMARY}`,
                    boxShadow: 'none',
                },
                '&:focus':{
                    border: `2px solid ${COLOR__BRAND_PRIMARY}`,
                    boxShadow: 'none',
                },
            },
            outlinedSizeLarge:{
                height: '6.4rem',
                maxHeight: '6.4rem',
            },
            outlinedSecondary:{
                "& .MuiTouchRipple-root span span":{
                    backgroundColor: `${COLOR__BRAND_OUTLINE} !important`,
                },
                color: COLOR__BRAND_PRIMARY,
                fontWeight: 700,
                fontSize: '2rem',
                whiteSpace: 'nowrap',
                minWidth: '120px',
                height: '56px',
                maxHeight: '56px',
                borderRadius: '4rem',
                transition: 'box-shadow 0.25s ease-in-out',
                boxShadow: `inset 0 0 0 1px ${COLOR__BRAND_OUTLINE}, 0 0 0 .8rem rgb(0 0 0 / 0%)`,
                border: `solid 1px ${COLOR__BRAND_OUTLINE}`,
                '&:hover':{
                    backgroundColor: COLOR__BRAND_SECONDARY_HOVER,
                    boxShadow: `inset 0 0 0 1px ${COLOR__BRAND_OUTLINE}, 0 0 0 .8rem rgb(0 0 0 / 0%)`,
                    border: `solid 1px ${COLOR__BRAND_OUTLINE}`,
                },
                '&:focus':{
                    boxShadow: `inset 0 0 0 1px ${COLOR__BRAND_OUTLINE}, 0 0 0 .8rem ${COLOR__BRAND_OUTLINE_BGR}cc`, //cc = 80% alpha
                    border: `solid 1px ${COLOR__BRAND_OUTLINE}`,
                }
            },
            outlinedPrimary:{
                "& .MuiTouchRipple-root span span":{
                    backgroundColor: `${COLOR__BRAND_OUTLINE} !important`,
                },
                color: COLOR__TEXT_MAIN_DARK,
                fontWeight: 700,
                fontSize: '2rem',
                whiteSpace: 'nowrap',
                minWidth: '120px',
                height: '56px',
                maxHeight: '56px',
                borderRadius: '4rem',
                transition: 'box-shadow 0.25s ease-in-out',
                boxShadow: `inset 0 0 0 1px ${COLOR__BRAND_PRIMARY}, 0 0 0 .8rem rgb(0 0 0 / 0%)`,
                border: `solid 1px ${COLOR__BRAND_PRIMARY}`,
                '&:hover':{
                    backgroundColor: COLOR__BRAND_PRIMARY_HOVER,
                    boxShadow: `inset 0 0 0 1px ${COLOR__BRAND_PRIMARY}, 0 0 0 .8rem rgb(0 0 0 / 0%)`,
                    border: `solid 1px ${COLOR__BRAND_PRIMARY}`,
                    color: 'white',
                },
                '&:focus':{
                    boxShadow: `inset 0 0 0 1px ${COLOR__BRAND_PRIMARY}, 0 0 0 .8rem ${COLOR__BRAND_PRIMARY}1a`, //cc = 80% alpha
                    border: `solid 1px ${COLOR__BRAND_PRIMARY}`,
                }
            }
        },
        MuiBreadcrumbs: {
            root: {
                fontSize: '1.6rem',
                fontWeight: 600,
                //lineHeight: '1.93rem',
                color: '#1A202C',
                marginBottom: '1.6rem',
            },
        },
        MuiPaginationItem: {
            root: {
                borderRadius: '1.5rem',
                height: '3.6rem',
                minWidth: '3.6rem',
                fontSize: '1.6rem',
                lineHeight: '145%',
                fontWeight: '600',
                padding: '0.65rem 1.4rem',
                /*'&:hover':{
                    backgroundColor: 'rgba(235, 79, 90, 0.1)!important',
                },*/
            },
            icon: {
                fontSize: '2rem',
            }
        },
        MuiLinearProgress: {
            root: {
                height: '.4rem',
                borderRadius: '10rem',
            },
            barColorPrimary: {
                backgroundColor: '#036016',
            },
            colorPrimary: {
                backgroundColor: '#DFDFDF',
            }
        },
        MuiSvgIcon: {
            root: {
                width: '2.4rem',
                height: '2.4rem',
            },
            fontSizeLarge: {
                fontSize: '2.8rem',
            },
        },
        MuiRating: {
            root: {
                color: '#036016',
                fontSize: '2rem',
            },
            sizeLarge: {
                fontSize: '5rem',
            },
            sizeSmall: {
                fontSize: '1.2rem',
            }
        },
        MuiTypography: {
            body1: {
                fontSize: '1.6rem',
            }
        },
        PrivateSwitchBase: {
            root: {
                padding: '0',
            }
        },
        MuiSwitch: {
            track: {
                height: 'auto',
            }
        }
    },
    palette: {
        text:{
            primary: COLOR__TEXT_MAIN_DARK,
            disabled: brandColor.colors.greyLight,
        },
        primary: {
            main: COLOR__BRAND_PRIMARY,
            light: COLOR__BRAND_PRIMARY_HOVER
        },
        secondary: {
            main: COLOR__BRAND_SECONDARY,
        },
        outlined:{
            main: COLOR__BRAND_OUTLINE,
        },
    }
};
