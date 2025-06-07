import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import recFacialImg from '../../../../assets/images/rec_facial.png';
import capitechImg from '../../../../assets/images/capitech.png';
import zipUrlImg from '../../../../assets/images/projeto_zipurl.png';
import arduinoImg from '../../../../assets/images/arduino.jpeg';


const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
    }));

    const projects: ProjectCardProps[] = [
        {
            title: "Capitech – Plataforma Educacional ",
            subtitle: "2025",
            srcImg: capitechImg,
            description: "O projeto capitech-mobile é a versão mobile do sistema Capitech, voltado para educação tecnológica, com foco em fornecer ensino gratuito e de qualidade por meio de dispositivos móveis.",
            technologies: "Technologies: React, TypeScript, Tailwind, Yup, Axios",
            websiteURL: "https://capitech-front-final.vercel.app/",
            codeURL: "https://github.com/CapitechDev/capitech-mobile",
        },
        {
            title: "ZipURL – encurtador de URLs",
            subtitle: "Jan 2024 - Mar 2024",
            srcImg: zipUrlImg, // você pode trocar isso por um ícone/imagem representativa
            description: "Aplicação completa para encurtamento de URLs, com back-end em Node.js e front-end em React. Permite criar URLs curtas, redirecionamento automático e visual limpo.",
            technologies: "Technologies: Node.js, Express, MongoDB, React, Vercel",
            websiteURL: "https://zipurl-gray.vercel.app/",
            codeURL: "https://github.com/Clouddios/encurtadorBackEnd",
        },
        {
            title: "Sistema de Reconhecimento Facial",
            subtitle: "2023 - Presente",
            srcImg: recFacialImg,
            description: "Sistema acadêmico que compara diferentes algoritmos de reconhecimento facial (como HOG e CNN), testando precisão e performance. Inclui geração de relatórios e testes práticos com imagens.",
            technologies: "Technologies: Python, face_recognition, Jupyter, OpenCV",
            websiteURL: "https://github.com/seu-usuario/projeto-reconhecimento-facial",
            codeURL: "https://github.com/seu-usuario/projeto-reconhecimento-facial",
        },
        {
            title: "Sistema IoT de Monitoramento de Temperatura",
            subtitle: "2023",
            srcImg: arduinoImg,
            description: "Projeto para monitoramento remoto de temperatura e umidade em geladeira de medicamentos, com sensores DHT11/DHT22, ESP8266 e envio dos dados via API para banco de dados.",
            technologies: "Technologies: Arduino, C++, ESP8266, DHT11, API REST, Node.js",
            websiteURL: "https://github.com/seu-usuario/projeto-iot-geladeira",
            codeURL: "https://github.com/seu-usuario/projeto-iot-geladeira",
        }

    ];

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection;
