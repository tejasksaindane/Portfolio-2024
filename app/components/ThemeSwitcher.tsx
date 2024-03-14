// "use client"

// import React,{useState, useEffect} from  "react";
// import { useTheme } from "next-themes";
// import { switchThemeDuration } from "../constants";
// import { MoonIcon, SunIcon } from "lucide-react";

// export const ThemeSwitcher = () => {
//     const [mounted, setMounted] = useState(false);
//     const { theme, setTheme } = useTheme();

//     useEffect(() => {
//         setMounted(true);
//     }, [])
    
//     if (!mounted) {
//         return null;
//     }

//     return (
//         <button className={`${switchThemeDuration} bg-slate-50 dark:bg-[#212933]`}
//         onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}
//         >
//             {theme === "light" ? <SunIcon/> : <MoonIcon/> }
//         </button>
//     )
// }