import { THEMES } from "../../Hooks/themes";

export function ThemeChooser() {
	const update = (theme: string) => {
		if (theme == "" || theme == null) return;
		document
			.getElementById("theme-css")
			.setAttribute("href", `/styles/${THEMES[theme]}`);
	};

	return (
		<select onChange={(e) => update(e.target.value)}>
			{Object.keys(THEMES).map((theme) => (
				<option key={theme} value={theme}>
					{theme}
				</option>
			))}
		</select>
	);
}
