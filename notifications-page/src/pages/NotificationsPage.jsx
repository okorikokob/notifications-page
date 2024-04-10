import { styled, Card, CardContent, Typography } from "@mui/material";
import theme from "../theme";

const NotificationsPage = () => {
	return (
		<DefaultNotificationCard>
			<CardContent>
				<HeaderContent>
					<Typography color={`${theme.palette.text.secondary}`} variant="h6">Notifications <SpanNumber>3</SpanNumber></Typography>
					<AllAsRead>Mark all as Read</AllAsRead>
				</HeaderContent>
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
    background-color: ${theme.palette.background.paper};
    box-shadow: 0 2px 4px ${theme.palette.grey[300]};

    ${theme.breakpoints.down("sm")} {
      max-width: 95%; 
    }
  `}
`;

const HeaderContent = styled("div")`
	display: flex;
	justify-content: space-between;
`;

const SpanNumber = styled('span')`
${({theme}) =>`
background-color: hsl(219, 85%, 26%);
margin-left: 4px;
padding: 1px 10px;
border-radius: 5px;
color: #fff


`



}


`

const AllAsRead = styled('Typography')`
${({theme})=>`

color: ${theme.palette.primary.dark}
`}

`


