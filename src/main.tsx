import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import App from "./App.tsx";
import { Theme } from "./Context/theme.tsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
			<Theme.Provider>
				<App />
			</Theme.Provider>
		</HashRouter>
	</StrictMode>,
);
