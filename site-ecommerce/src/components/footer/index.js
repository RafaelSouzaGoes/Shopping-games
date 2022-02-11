import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./styles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "green",
                fontSize: "23px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                marginTop: "0px"
            }}>
                ©️ Rafael Goes - Todos os Direitos reservados
            </h1>
            <Container>
                <Row>

                    <Column>
                        <Heading className="flex">Social Media</Heading>

                        <FooterLink href="https://www.linkedin.com/in/rafaelsouzagoes/" target="_blank">
                            <i className="fab fa-linkedin">
                                <span style={{ marginLeft: "10px" }}>
                                    Linkedin
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://github.com/RafaelSouzaGoes" target="_blank">
                            <i className="fab fa-github">
                                <span style={{ marginLeft: "10px" }}>
                                    Github
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;