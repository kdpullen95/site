import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { Spacer } from "../Components/Spacing/Spacer";
import { Stack } from "../Components/Stack";
import { ThemeChooser } from "./Components/ThemeChooser";

export function Header({ items }: Header.Props) {
	return (
		<Stack>
			{items.map((item) => (
				<NavLink key={item.label} to={item.to}>
					{item.label}
				</NavLink>
			))}
			<Spacer flex />
			<ThemeChooser />
		</Stack>
	);
}

export namespace Header {
	export interface NavItem {
		to: string;
		label: string;
		icon: ReactNode;
	}
	export interface Props {
		items: NavItem[];
	}
}
