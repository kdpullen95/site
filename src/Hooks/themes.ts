import { useEffect, useState } from "react";

export const THEMES = {
	Thunderstorm: "thundercloud.css",
	Sunshower: "sunshower.css",
};

type ThemeId = keyof typeof THEMES;

export function useTheme() {
	const [theme, set] = useState<ThemeId>("Thunderstorm");
	const setTheme = (theme: string) => {
		if (THEMES[theme] != null) set(theme as ThemeId);
	};
	useEffect(() => {
		document
			.getElementById("theme-css")
			.setAttribute("href", `/styles/${THEMES[theme]}`);
	}, [theme]);
	return { theme, setTheme };
}
