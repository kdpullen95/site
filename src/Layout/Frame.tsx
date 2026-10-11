import type { PropsWithChildren } from "react";
import { Stack } from "../Components/Stack";
import { Header } from "./Header";

const NAV_ITEMS: Header.NavItem[] = [];

export function Frame({ children }: PropsWithChildren) {
	return (
		<>
			<Header items={NAV_ITEMS} />
			<Stack>{children}</Stack>
		</>
	);
}
