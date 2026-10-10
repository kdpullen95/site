import type { PropsWithChildren } from "react";
import { Stack } from "../Components/Stack";
import { NAV_ITEMS } from "./Data";
import { Header } from "./Header";

export function Frame({ children }: PropsWithChildren) {
	return (
		<>
			<Header items={NAV_ITEMS} />
			<Stack>{children}</Stack>
		</>
	);
}
