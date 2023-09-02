import BottomLinks from "./bottom-links";
import TopLinks from "./top-links";
import UserMenu from "./user-menu";

const Sidebar = () => {
	return (
		<div className="w-[38px] m-1 mt-0 h-[calc(100vh-48px)] overflow-y-auto overflow-x-hidden hide-scrollbar flex flex-col justify-between gap-8">
			<TopLinks />
			<div>
				<BottomLinks />
				<div className="translate-x-[6px] my-1 w-[calc(100%-12px)] h-[1px] bg-tertiary" />
				<UserMenu />
			</div>
		</div>
	);
};

export default Sidebar;
