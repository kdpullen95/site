import { THEMES, useTheme } from "../../Hooks/themes";

export function ThemeChooser() {
	const { theme, setTheme } = useTheme();

	return (
		<select value={theme} onChange={(e) => setTheme(e.target.value)}>
			{Object.keys(THEMES).map((theme) => (
				<option key={theme} value={theme}>
					{theme}
				</option>
			))}
		</select>
	);
}
