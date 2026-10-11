import { Style } from "../../Utility/Style";

const variants = {
	lg: Style.variable("spacer-lg"),
	md: Style.variable("spacer-md"),
	sm: Style.variable("spacer-sm"),
} as const satisfies Record<Spacer.Props["variant"], string>;

export function Spacer({ flex = false, variant = "md" }: Spacer.Props) {
	return (
		<div
			aria-hidden="true"
			style={{ flex: flex ? 1 : 0, width: variants[variant] }}
		></div>
	);
}

export namespace Spacer {
	export interface Props {
		flex?: boolean;
		variant?: "lg" | "md" | "sm";
	}
}
