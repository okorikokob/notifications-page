import { UserCard } from "../components/UserCard";
import data from "../data.json";
import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const NotificationList = ({ onNotificationClick }) => {
	return (
		<Box>
			{data.map((user) => (
				<UserCard
					key={user.id}
					{...user}
                    onClick={() => onNotificationClick(user.id)}
                    
                    
				/>
			))}
		</Box>
	);
};

export default NotificationList;
