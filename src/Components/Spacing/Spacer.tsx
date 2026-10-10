import { Style } from "../../Utility/Style";

interface SpacerProps {
	flex?: boolean;
	variant?: "lg" | "md" | "sm";
}

const variants = {
	lg: Style.variable("spacer-lg"),
	md: Style.variable("spacer-md"),
	sm: Style.variable("spacer-sm"),
} as const satisfies Record<SpacerProps["variant"], string>;

export function Spacer({ flex = false, variant = "md" }: SpacerProps) {
	return (
		<div
			aria-hidden="true"
			style={{ flex: flex ? 1 : 0, width: variants[variant] }}
		></div>
	);
}
