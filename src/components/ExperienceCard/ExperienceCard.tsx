import React from "react";
import { Typography, styled } from "@mui/material";

export interface ExperienceCardProps {
    title: string;
    subtitle: string;
    description: string;
    technologies: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    title,
    subtitle,
    description,
    technologies,
}) => {
    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid ${theme.palette.primary.contrastText}`,
        backgroundColor: "black",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    }));

    return (
        <StyledCard>
            <Typography variant="h5">{title}</Typography>
            <Typography>{subtitle}</Typography>
            <Typography pt={2}>{description}</Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
        </StyledCard>
    );
};

export default ExperienceCard;
