import Image from "next/image";

import SwitchTheme from "./switch-theme";

const Header = () => {
	return (
		<div className="flex items-center justify-between px-4 py-2">
			<div className="flex items-center gap-2">
				<Image
					src="./logo.svg"
					alt="Whatsapp Logo"
					width={24}
					height={24}
					draggable="false"
				/>
				<span className="text-tiny">Whatsup</span>
			</div>
			<SwitchTheme />
		</div>
	);
};

export default Header;
