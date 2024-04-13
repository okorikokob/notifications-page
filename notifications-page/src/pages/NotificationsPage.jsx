import { useState } from "react";
import { styled, Card, CardContent,  } from "@mui/material";
import NotificationList from "../components/NotificationList";
import data from '../data.json'




const NotificationsPage = () => {
	const [unreadCount, setUnreadCount] = useState(data.length)

	const handleNotificationClick = () => {
        setUnreadCount((prevCount) => prevCount - 1);
    };


	const handleAllAsRead = ()=>{
		setUnreadCount(0)
	}
	return (
		<DefaultNotificationCard >
			<CardContent>
				<HeaderContent>
					<Notifications>
						Notifications <SpanNumber>{unreadCount}</SpanNumber>
					</Notifications>
					<AllAsRead onClick={handleAllAsRead} >Mark all as Read</AllAsRead>
				</HeaderContent>
				<NotificationList onNotificationClick={handleNotificationClick} />

				
			</CardContent>
		</DefaultNotificationCard>
	);
};

export default NotificationsPage;

const DefaultNotificationCard = styled(Card)`
	${({ theme }) => `
    max-width: 700px;
    margin: 50px auto; 
    border-radius: 5px;
    padding: 10px;
    background-color: ${theme.palette.background.paper};
    box-shadow: 0 2px 4px ${theme.palette.grey[300]};

    ${theme.breakpoints.down("sm")} {
      max-width: 95%; 
    }
  `}
`;

const HeaderContent = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SpanNumber = styled("span")`

background-color: hsl(219, 85%, 26%);
margin-left: 4px;
padding: 1px 10px;
border-radius: 5px;
color: #fff;
font-size: 14px;






}


`;

const AllAsRead = styled("Typography")`
	${({ theme }) => `

color: ${theme.palette.primary.primary};
&:hover {
    color: ${theme.palette.primary.dark}; 
    cursor: pointer; 
  }
`}
`;
const Notifications = styled("Typography")`
	${({ theme }) => `

color: ${theme.palette.text.secondary};
font-weight: ${theme.typography.h1.fontWeight};
font-size: 20px


`}
`;
