import React from "react";
import './App.css'
import styled from 'styled-components'

const Header = styled.header`
  height: 20vh;
  background-color:tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bolder;
`;

const Form = styled.form`
  display: flex;
  gap: 30px;
  height: 20vh;
  width: 100%;
  background-color:;
  justify-content: center;
  align-items: center;
  position: relative;
   @media (max-width: 460px){
      gap:10px;
    
    }
`;

const Span_list = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  color: #fff;
  margin-top:20px;
  position: absolute;
  @media (max-width: 460px){
      min-width: 200px;
    
    }
`;

const Section = styled.section`
  display: flex;
  gap: 30px;
  width: 100%;
  max-height: 45vh;
  justify-content: center;
  overflow-y: auto;
  background-color: #fff;
  position: relative;
  z-index: 1;
  @media (max-width: 460px){
      gap:0px;
    
    }
`;

const Div = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (max-width: 460px){
      gap:10px;
    
    }

`;

const Li = styled.li`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  gap: 30px;
  min-width: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.459);
  border-radius: 10px;
  padding: 10px;
  align-items: center;

  @media (max-width: 460px){
      min-width: 240px;
    
    }

`;

const P = styled.p`
  word-wrap:break-word;
  max-width: 400px;
  @media (max-width: 460px){
      min-width: 200px;
      max-width: 200px;

    
    }
`;

const ButtonDelete = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 3px #000;
  background: url(https://www.clipartmax.com/png/middle/84-842915_delete-icon-png-red.png) no-repeat center / cover;
  transition: all 0.4s;
  &:hover{
    transform: scale(1.1);
  }
`;

const Button_addTarefas = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  background: url(https://pt.seaicons.com/wp-content/uploads/2016/11/Document-Add-icon.png) no-repeat center / cover;
  transition: all 0.4s;

  &:hover{
    transform: scale(1.1);
  }

`;

const Span = styled.span`
  position: absolute;
  margin-left:-76px;
  margin-top:-10px;
  min-width:300px;
  color: #fff;
  cursor: pointer;
  font-weight:bolder;

  @media (max-width: 460px){
      min-width: 220px;
      margin-left:-66px;
    }
`;

const Input = styled.input`
    margin-top:20px;
    height: 0;
    min-width:300px;
    padding-left: 10px;
    transition: all 0.4s;
    border: solid 1px transparent;
    position: relative;
    z-index: 1;
    cursor: pointer;

    &:hover{
      height: 50px;
      margin-top: 0;
    }

    &:focus{
      height: 50px;
      margin-top: 0;
    }
    @media (max-width: 460px){
      min-width: 230px;
    
    }
`;



export default class App extends React.Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };

  addTarefa = (/* e */) => {
    if (this.state.tarefa === "") {
      return;
    }
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random()
      }),
      tarefa: ""
    });
    /*  e.preventDefault() */
  };

  delete = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <>
        <Header>
          <h1>Lista de Tarefas</h1>
        </Header>
        <main>
        <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}>
              <Span className="span">Digitar Tarefa</Span>  
              <Input className="input" value={this.state.tarefa} onChange={this.handleChange} placeholder={'Digitar Tarefa'} />
              <Button_addTarefas onClick={this.addTarefa}></Button_addTarefas>
        </Form>
        <Span_list>Lista Vazia</Span_list>
        <Section>
            <ol>
                {this.state.lista.map((item) => (
                  <Div>
                    <Li><P>{item.tarefa}</P></Li>
                    <ButtonDelete onClick={() => {this.delete(item.id);}}></ButtonDelete>
                  </Div>
                ))}
              </ol>
          </Section>
        </main>
      </>
    );
  }
}
