import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { Spacer } from "../Components/Spacing/Spacer";
import { Stack } from "../Components/Stack";
import { ThemeChooser } from "./Components/ThemeChooser";

export interface NavItem {
	to: string;
	label: string;
	icon: ReactNode;
}

interface HeaderProps {
	items: NavItem[];
}

export function Header({ items }: HeaderProps) {
	return (
		<Stack>
			{items.map((item) => (
				<NavLink to={item.to}>{item.label}</NavLink>
			))}
			<Spacer flex />
			<ThemeChooser />
		</Stack>
	);
}
