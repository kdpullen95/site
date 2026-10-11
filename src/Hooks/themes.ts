import { useEffect, useState } from "react";

export namespace Themes {
	export const DEFS = {
		Thunderstorm: "thundercloud.css",
		Sunshower: "sunshower.css",
	};

	export type ThemeId = keyof typeof DEFS;

	export const LIST = Object.keys(DEFS) as ThemeId[];

	export function isId(value: string): value is ThemeId {
		return LIST.includes(value as ThemeId);
	}

	export function useTheme() {
		const [theme, setTheme] = useState<ThemeId>("Thunderstorm");
		useEffect(() => {
			document
				.getElementById("theme-css")
				.setAttribute("href", `/styles/${DEFS[theme]}`);
		}, [theme]);
		return {
			theme,
			setTheme: (value: string) => {
				if (isId(value)) {
					setTheme(value);
				}
			},
		};
	}
}
