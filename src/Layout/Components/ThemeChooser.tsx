import { Theme } from "../../Context/theme";

export function ThemeChooser() {
	const { theme, setTheme } = Theme.useTheme();

	return (
		<select value={theme} onChange={(e) => setTheme(e.target.value)}>
			{Theme.LIST.map((theme) => (
				<option key={theme} value={theme}>
					{theme}
				</option>
			))}
		</select>
	);
}
