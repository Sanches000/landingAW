import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
width: 100px;
  padding: 10px;
  background-color: #072b52;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color:rgb(10, 91, 179);
  }
`;

const ContactUs = () => {
    return (
        <Container className="container">
            <Title>Contate-nos!</Title>

            <Form>
                <Label htmlFor="name">Nome:</Label>
                <Input type="text" id="name" name="name" required />

                <Label htmlFor="phone">Telefone/Celular:</Label>
                <Input type="tel" id="phone" name="phone" required />

                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required />

                <Label htmlFor="message">Mensagem:</Label>
                <TextArea id="message" name="message" rows="5" required></TextArea>

                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
};

export default ContactUs;