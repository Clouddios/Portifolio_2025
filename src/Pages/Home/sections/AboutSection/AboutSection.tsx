import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
        backgroundColor: theme.palette.info.dark
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "SQL", "AWS", "NoSQL", "PHP", "Figma"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre min</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiências</Typography>
                                <Typography textAlign="center">1+ ano</Typography>
                                <Typography textAlign="center">Desenvolvedor Software</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Formação</Typography>
                                <Typography textAlign="center">Tecnólogo </Typography>
                                <Typography textAlign="center">Desenvolvimento Software</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                    Sou um desenvolvedor de software apaixonado por tecnologia e por criar soluções úteis e acessíveis.
                    Atualmente estou cursando Desenvolvimento de Software Multiplataforma na FATEC Votorantim,
                    o que tem expandido minha base técnica em áreas como desenvolvimento mobile, web, integração de sistemas e ciência de dados.
                    Já participei de projetos completos nas áreas de IoT, sistemas de gestão, plataformas educacionais e automação de processos internos.
                    Também me envolvo com temas como segurança da informação, boas práticas de programação e testes automatizados.
                    Além do aspecto técnico, valorizo muito o trabalho em equipe e a comunicação clara. Desenvolvi boas habilidades interpessoais,
                    organização e foco em resultados, que me ajudam a contribuir de forma positiva em qualquer ambiente de desenvolvimento.
                    Este portfólio tem como objetivo apresentar meus projetos, aprendizados e evolução na área de tecnologia.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="elevation" elevation={3} style={{ backgroundColor: "black", color: "white" }}>
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
