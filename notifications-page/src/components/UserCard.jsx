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
  onClick,
  
  
  
}) => {

  const [isUnread, setIsUnread] = useState(true)

  const handleClick =()=>{
    setIsUnread(false);
    if (onClick){
      onClick()
    }
  }
	return (
		<DefaultUsersCard onClick={handleClick} isUnread={isUnread}>
			<CardContent>
				<CardFlexContainer>
					<Avatar src={avatarSrc} alt={userName} />
					<TypographyContainer>
						<Typography>
							<UserName>{userName}</UserName>
							{actionText} <PostTitle>{postTitle}</PostTitle>
							{isUnread && <UnreadDot></UnreadDot>}
						</Typography>
						<TypographyTime>{timeAgo}</TypographyTime>
					</TypographyContainer>
				</CardFlexContainer>
			</CardContent>
		</DefaultUsersCard>
	);
};

const DefaultUsersCard = styled(Card)`
	${({ theme, isUnread }) => `
    max-width: 100%;
    margin-top: ${theme.spacing(2)};
    background-color: hsl(210, 60%, 98%);
    box-shadow: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease; // Smooth transition for background color

   
      background-color: ${isUnread ? 'hsl(210, 60%, 98%)' : 'hsl(0, 0%, 100%)'}; // Slightly change color on hover
   

    ${theme.breakpoints.down("sm")} {
      margin: ${theme.spacing(1)};
    }
  `}
`;

const CardFlexContainer = styled(Box)`
	display: flex;
	align-items: center;
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
