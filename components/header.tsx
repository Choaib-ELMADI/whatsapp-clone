import Image from "next/image";

import SwitchTheme from "./switch-theme";

const Header = () => {
	return (
		<div className="flex items-center justify-between p-2 mb-1">
			<div className="flex items-center gap-2 ml-1">
				<Image
					src="/logo.svg"
					alt="Whatsapp Logo"
					width={22}
					height={22}
					draggable="false"
				/>
				<span className="text-tiny">Whatsup</span>
			</div>
			<SwitchTheme />
		</div>
	);
};

export default Header;
