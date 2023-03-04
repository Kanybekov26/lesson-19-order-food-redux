// import store from '../../store'

export const lightTheme = {
    palette: {
        primary: {
            main: '#8a2b06',
            light: 'c44817',
            dark: '#481805',
            contrastText: '#fff',
        },
        secondary: {
            main: '#5c5957',
            light: '#5c5957',
            dark: '#5c5957',
            contrastText: '#fff',
        },
        error: {
            main: '#e1616',
            light: '#e1616',
            dark: '#e1616',
            contrastText: '#fff',
        },
        success: {
            main: '#cec32',
            light: '#cec32',
            dark: '#cec32',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
    },
    spacing: {},
}

export const darkTheme = {
    palette: {
        primary: {
            main: '#060f4a',
            light: '#060f4a',
            dark: '#060f8a',
            contrastText: '#fff',
        },
        secondary: {
            main: '#5c5957',
            light: '#5c5957',
            dark: '#5c5957',
            contrastText: '#fff',
        },
        error: {
            main: '#e1616',
            light: '#e1616',
            dark: '#e1616',
            contrastText: '#fff',
        },
        success: {
            main: '#cec32',
            light: '#cec32',
            dark: '#cec32',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
    },
    spacing: {},
}

// export const getTheme = () => {
//     const curentThem = store.getState().ui.themeMode
//     return curentThem === 'light' ? lightTheme : darkTheme
// }
