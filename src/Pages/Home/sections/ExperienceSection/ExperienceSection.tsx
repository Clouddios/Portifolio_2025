import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ExperienceCard, { ExperienceCardProps } from "../../../../components/ExperienceCard/ExperienceCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ExperienceSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
    }));

    const experiences: ExperienceCardProps[] = [
        {
            title: "Desenvolvedor de Software",
            subtitle: "Farmaponte · Dez 2023 – Atual",
            description: "Atuação como desenvolvedor em apoio ao time técnico, analisando chamados de lojas e setores internos, identificando falhas sistêmicas, propondo melhorias e realizando consultas SQL para suporte à tomada de decisão. Participação na ponte entre usuários e desenvolvimento.",
            technologies: "Tecnologias: SQL, OCOMON, análise de sistemas, comunicação com stakeholders",
        },        
        {
            title: "Subgerente",
            subtitle: "Drogal · 2019 – 2022",
            description: "Atuação no controle estratégico e operacional da loja, controle de vendas, apoio à gerência, controle de estoque, metas e equipe. Responsável por manter o desempenho da loja e garantir o bom atendimento.",
            technologies: "Habilidades: Liderança, Estratégia de Vendas, Gestão de Estoque",
        },
        {
            title: "Balconista",
            subtitle: "Biafarma · 2016 – 2019",
            description: "Atendimento ao cliente, interpretação de receitas médicas, esclarecimento de dúvidas sobre medicamentos, dosagens e horários. Suporte no controle de estoque e organização da loja.",
            technologies: "Habilidades: Atendimento ao cliente, Farmacologia básica, Organização",
        },
        {
            title: "Técnico em Informática",
            subtitle: "Allmont Montagens · 2015",
            description: "Atendimento a chamados técnicos relacionados à manutenção de equipamentos e redes. Realização de suporte técnico local e remoto para usuários da empresa.",
            technologies: "Tecnologias: Suporte Técnico, Redes, Manutenção de Computadores",
        }
    ];

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="experience" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="text.primary">Experience</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {experiences.map((exp: ExperienceCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                <ExperienceCard
                                    title={exp.title}
                                    subtitle={exp.subtitle}
                                    description={exp.description}
                                    technologies={exp.technologies}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ExperienceSection;
