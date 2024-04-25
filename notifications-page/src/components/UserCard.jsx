/* eslint-disable react/prop-types */
// import imageOne from "../assets/images/avatar-angela-gray.png";
import { useState } from "react";
import {
	styled,
	Card,
	CardContent,
	Avatar,
	Typography,
	Box,
} from "@mui/material";

export const UserCard = ({
	avatarSrc,
	userName,
	actionText,
	postTitle,
	timeAgo,
	description,
	markAsRead,
	isRead,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleCardClick = () => {
		setIsOpen(!isOpen);
		if (!isRead) markAsRead();
	};

	return (
		<DefaultUsersCard onClick={handleCardClick} isRead={isRead}>
			<CardContent>
				<CardFlexContainer>
					<Avatar src={avatarSrc} alt={userName} />
					<TypographyContainer>
						<Typography>
							<UserName>{userName}</UserName>
							{actionText} <PostTitle>{postTitle}</PostTitle>
							{!isRead && <UnreadDot></UnreadDot>}
						</Typography>
						<TypographyTime>{timeAgo}</TypographyTime>
						{isOpen ? <CardDescription>{description}</CardDescription> : null}
					</TypographyContainer>
				</CardFlexContainer>
			</CardContent>
		</DefaultUsersCard>
	);
};

const DefaultUsersCard = styled(Card)`
	${({ theme, isRead }) => `
    max-width: 100%;
    margin-top: ${theme.spacing(2)};
    background-color: hsl(210, 60%, 98%);
    box-shadow: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease; 

   
      background-color: ${!isRead ? "hsl(210, 60%, 98%)" : "hsl(0, 0%, 100%)"}; 
   

    ${theme.breakpoints.down("sm")} {
      margin: ${theme.spacing(1)};
    }
  `}
`;

const CardFlexContainer = styled(Box)`
	display: flex;

	gap: ${({ theme }) => theme.spacing(2)};
`;

const TypographyContainer = styled("div")`
	display: flex;
	flex-direction: column;
`;

const UserName = styled("span")`
	font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
	color: ${({ theme }) => theme.palette.text.secondary};
	margin-right: 5px;
	font-size: ${({ theme }) => theme.typography.h1.fontSize};
`;
const PostTitle = styled("span")`
	color: hsl(219, 12%, 42%);
	font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
	margin-left: 5px;
	font-size: ${({ theme }) => theme.typography.h1.fontSize};
	&:hover {
		color: ${({ theme }) => theme.palette.primary.dark};
		cursor: pointer;
	}
`;
const TypographyTime = styled(Typography)`
	font-size: ${({ theme }) => theme.typography.body1.fontSize};
	margin-top: 2px;
`;

const UnreadDot = styled("span")`
	display: inline-block;
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.palette.primary.main};

	margin-left: 5px;
`;

const CardDescription = styled("div")`
	padding: 20px;
	margin-top: 15px;
	border: 1px solid #c3c0c0;
	background: #fff;
	border-radius: 5px;
	&:hover {
		background: ${({ theme }) => theme.palette.primary.contrastText};
		border: none;
	}
`;
