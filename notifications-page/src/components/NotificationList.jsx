import { UserCard } from "../components/UserCard";
import data from "../data.js";
import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const NotificationList = ({ clickedIds = new Set(), onNotificationClick }) => {
	return (
		<Box>
			{data.map((user) => (
				<UserCard
					key={user.id}
					{...user}
                    markAsRead={() => onNotificationClick(user.id)}
                    isRead={clickedIds.has(user.id)}
						
                    
				/>
			))}
		</Box>
	);
};

export default NotificationList;
