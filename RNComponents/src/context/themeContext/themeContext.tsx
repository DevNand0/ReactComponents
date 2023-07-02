import { createContext, useEffect, useReducer } from "react";
import { ThemeState, darkTheme, lightTheme, themeReducer } from "./themeReducer";
import { AppState, Appearance, useColorScheme } from "react-native";

interface ThemeContextProps {
    theme:ThemeState;
    setDarkTheme:()=>void;
    setLightTheme:()=>void;
}

//USO DEL CONTEXT
export const ThemeContext  = createContext({} as ThemeContextProps);
export const ThemeProvider = ({children}:any)=>{
    //const colorScheme = useColorScheme();//funciona solo en IOS
    const [theme,dispatch] = useReducer(themeReducer, (Appearance.getColorScheme()==='dark')?darkTheme:lightTheme);
    useEffect(()=>{
        //UTILIZAR EL AppState de REACT y solo de REACT
        AppState.addEventListener('change',(status)=>{
            console.log({status});
            if(status==='active'){
                (Appearance.getColorScheme()==='light')
                ?setLightTheme()
                :setDarkTheme();
            }

        })
    });

    const setDarkTheme  =()=>{
        dispatch({type:'set_dark_theme'});//dispatch se encarga de setear
        console.log("set_dark_theme");
    }
    const setLightTheme =()=>{
        dispatch({type:'set_light_theme'});//dispatch se encarga de setear
        console.log("set_light_theme");
    }
    return (
        <ThemeContext.Provider value={{  
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
