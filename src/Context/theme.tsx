import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
	type PropsWithChildren,
} from "react";

export namespace Theme {
	export const DEFS = Object.freeze({
		Thunderstorm: "thundercloud.css",
		Sunshower: "sunshower.css",
	});

	export type Id = keyof typeof DEFS;

	export const LIST = Object.keys(DEFS) as Id[];

	export function isId(value: string): value is Id {
		return LIST.includes(value as Id);
	}

	interface ContextPair {
		theme: Id;
		setTheme: (theme: string) => void;
	}

	export const Context = createContext<ContextPair>({
		theme: "Thunderstorm",
		setTheme: () => null,
	});

	export function Provider({ children }: PropsWithChildren) {
		const [theme, set] = useState<Id>("Thunderstorm");
		const setTheme = useCallback(
			(value: string) => {
				if (isId(value)) set(value);
			},
			[set],
		);
		useEffect(() => {
			document
				.getElementById("theme-css")
				.setAttribute("href", `/styles/${DEFS[theme]}`);
		}, [theme]);
		const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
		return <Context value={value}>{children}</Context>;
	}

	export function useTheme() {
		return useContext(Context);
	}
}
