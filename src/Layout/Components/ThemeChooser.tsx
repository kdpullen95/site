import { Themes } from "../../Hooks/themes";

export function ThemeChooser() {
	const { theme, setTheme } = Themes.useTheme();

	return (
		<select value={theme} onChange={(e) => setTheme(e.target.value)}>
			{Themes.LIST.map((theme) => (
				<option key={theme} value={theme}>
					{theme}
				</option>
			))}
		</select>
	);
}
