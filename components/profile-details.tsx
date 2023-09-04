import { UserCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const ProfileDetails = () => {
	const { user } = useUser();

	return (
		<div>
			<div className="mb-6">
				{user && user.imageUrl ? (
					<Image
						src={user?.imageUrl}
						alt={user.fullName!}
						width={96}
						height={96}
						draggable="false"
						className="rounded-full"
					/>
				) : (
					<UserCircle className="w-24 h-24" />
				)}
			</div>

			<p className="text-tiny text-secondary">User name</p>
			<p className="text-tiny mb-3">{user?.fullName!}</p>
			<p className="text-tiny text-secondary">User email</p>
			<p className="text-tiny">{user?.primaryEmailAddress?.emailAddress}</p>
		</div>
	);
};

export default ProfileDetails;
